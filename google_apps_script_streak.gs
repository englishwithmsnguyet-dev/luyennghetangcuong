/**
 * ============================================================================
 * GOOGLE APPS SCRIPT - QUẢN LÝ CHUỖI NGHE & MỞ KHÓA HỌC VIÊN
 * Dự án: LUYỆN NGHE TĂNG CƯỜNG (Miss Nguyệt)
 * ============================================================================
 * HƯỚNG DẪN CÀI ĐẶT (CHỈ MẤT 3 PHÚT):
 * 1. Tạo 1 Google Sheet mới (VD đặt tên: "Quan Ly Chuoi - Luyen Nghe Tang Cuong")
 * 2. Vào menu: Tiện ích mở rộng (Extensions) -> Apps Script
 * 3. Xóa hết code mẫu mặc định, dán toàn bộ code trong file này vào và nhấn Lưu (Ctrl+S)
 * 4. Nhấn nút: Triển khai (Deploy) -> Tùy chọn triển khai mới (New deployment)
 *    - Chọn loại (Select type): Ứng dụng web (Web app)
 *    - Thực thi với tư cách (Execute as): Tôi (Me)
 *    - Ai có quyền truy cập (Who has access): Bất kỳ ai (Anyone)
 * 5. Nhấn Triển khai -> Cấp quyền (Authorize access -> Advanced -> Go to...)
 * 6. Copy đường link Web App (dạng https://script.google.com/macros/s/.../exec)
 *    và gửi lại cho hệ thống / dán vào phần Cài đặt trên Web Giáo viên!
 * ============================================================================
 */

const VN_TZ = 'Asia/Ho_Chi_Minh';
const TEACHER_ADMIN_KEY = 'PTMN_VSTEP_2026';

const SHEET_STUDENTS = 'HocVien';
const SHEET_CONFIG = 'CaiDat';

const STUDENT_HEADERS = [
  'StudentKey',         // 0: key chuan hoa (ten_khong_dau|MALOP)
  'FullName',           // 1: Ho ten hoc vien
  'ClassCode',          // 2: Ma lop
  'StreakCount',        // 3: Chuoi hien tai
  'BestStreak',         // 4: Chuoi cao nhat
  'LastActiveDate',     // 5: Ngay hoat dong gan nhat (YYYY-MM-DD)
  'FirstLoginDate',     // 6: Ngay vao lan dau (YYYY-MM-DD)
  'TotalDays',          // 7: Tong so ngay da hoc
  'Status',             // 8: ACTIVE | LOCKED
  'LockReason',         // 9: Ly do khoa
  'LockedAt',           // 10: Thoi diem khoa
  'UnlockRequested',    // 11: YES | NO
  'UnlockRequestNote',  // 12: Loi nhan xin mo khoa tu hoc vien
  'UnlockedByTeacherAt',// 13: Lan mo khoa gan nhat
  'GraceUntilDate',     // 14: Ngay an han sau khi co mo khoa (YYYY-MM-DD)
  'UpdatedAt'           // 15: Cap nhat cuoi
];

function getTodayVN() {
  return Utilities.formatDate(new Date(), VN_TZ, 'yyyy-MM-dd');
}

function getNowVN() {
  return Utilities.formatDate(new Date(), VN_TZ, 'yyyy-MM-dd HH:mm:ss');
}

function normalizeDateCell(val) {
  if (!val) return '';
  if (val instanceof Date) {
    return Utilities.formatDate(val, VN_TZ, 'yyyy-MM-dd');
  }
  const s = String(val).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
    return s.slice(0, 10);
  }
  return s;
}

function diffDaysYMD(ymdStart, ymdEnd) {
  if (!ymdStart || !ymdEnd) return 0;
  const p1 = ymdStart.split('-').map(Number);
  const p2 = ymdEnd.split('-').map(Number);
  if (p1.length !== 3 || p2.length !== 3) return 0;
  const t1 = Date.UTC(p1[0], p1[1] - 1, p1[2]);
  const t2 = Date.UTC(p2[0], p2[1] - 1, p2[2]);
  return Math.round((t2 - t1) / 86400000);
}

function isOnlySundaysMissed(ymdStart, ymdEnd) {
  const p1 = ymdStart.split('-').map(Number);
  const p2 = ymdEnd.split('-').map(Number);
  const t1 = Date.UTC(p1[0], p1[1] - 1, p1[2]);
  const t2 = Date.UTC(p2[0], p2[1] - 1, p2[2]);
  for (let t = t1 + 86400000; t < t2; t += 86400000) {
    const d = new Date(t);
    if (d.getUTCDay() !== 0) {
      return false;
    }
  }
  return true;
}

function slugifyName(str) {
  if (!str) return 'unknown';
  return String(str)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '') || 'unknown';
}

function makeStudentKey(name, classCode) {
  const normClass = String(classCode || '').trim().toUpperCase().replace(/\s+/g, '');
  return slugifyName(name) + '|' + normClass;
}

function ensureSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  let studentSheet = ss.getSheetByName(SHEET_STUDENTS);
  if (!studentSheet) {
    studentSheet = ss.insertSheet(SHEET_STUDENTS);
    studentSheet.getRange(1, 1, 1, STUDENT_HEADERS.length).setValues([STUDENT_HEADERS]);
    studentSheet.getRange(1, 1, 1, STUDENT_HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#0f172a')
      .setFontColor('#ffffff');
    studentSheet.setFrozenRows(1);
  } else if (studentSheet.getLastRow() === 0) {
    studentSheet.getRange(1, 1, 1, STUDENT_HEADERS.length).setValues([STUDENT_HEADERS]);
  }

  let configSheet = ss.getSheetByName(SHEET_CONFIG);
  if (!configSheet) {
    configSheet = ss.insertSheet(SHEET_CONFIG);
    configSheet.getRange(1, 1, 5, 2).setValues([
      ['Key', 'Value'],
      ['SystemEnabled', 'TRUE'],         // TRUE = bat khoa khi bo chuoi, FALSE = tam tat toan he thong
      ['StreakMode', 'STRICT_DAILY'],    // STRICT_DAILY | ALLOW_SUNDAY_OFF
      ['RequireActivity', 'ACTIVITY'],   // ACTIVITY (nghe/nop bai) | LOGIN (chi can dang nhap)
      ['UpdatedAt', getNowVN()]
    ]);
    configSheet.getRange(1, 1, 1, 2).setFontWeight('bold').setBackground('#059669').setFontColor('#ffffff');
  }

  return { studentSheet, configSheet };
}

function readConfig(configSheet) {
  const cfg = {
    SystemEnabled: true,
    StreakMode: 'STRICT_DAILY',
    RequireActivity: 'ACTIVITY'
  };
  const rows = configSheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    const k = String(rows[i][0] || '').trim();
    const v = String(rows[i][1] || '').trim();
    if (k === 'SystemEnabled') cfg.SystemEnabled = (v.toUpperCase() !== 'FALSE');
    if (k === 'StreakMode' && v) cfg.StreakMode = v;
    if (k === 'RequireActivity' && v) cfg.RequireActivity = v;
  }
  return cfg;
}

function writeConfig(configSheet, newCfg) {
  const rows = configSheet.getDataRange().getValues();
  const keysToSet = {};
  if (typeof newCfg.SystemEnabled !== 'undefined') keysToSet.SystemEnabled = newCfg.SystemEnabled ? 'TRUE' : 'FALSE';
  if (typeof newCfg.StreakMode !== 'undefined') keysToSet.StreakMode = String(newCfg.StreakMode);
  if (typeof newCfg.RequireActivity !== 'undefined') keysToSet.RequireActivity = String(newCfg.RequireActivity);
  keysToSet.UpdatedAt = getNowVN();

  Object.keys(keysToSet).forEach((key) => {
    let found = false;
    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][0]).trim() === key) {
        configSheet.getRange(i + 1, 2).setValue(keysToSet[key]);
        found = true;
        break;
      }
    }
    if (!found) {
      configSheet.appendRow([key, keysToSet[key]]);
    }
  });

  return readConfig(configSheet);
}

function rowToStudentObj(row, rowIndex) {
  return {
    rowIndex: rowIndex,
    studentKey: String(row[0] || ''),
    fullName: String(row[1] || ''),
    classCode: String(row[2] || ''),
    streakCount: Number(row[3] || 0),
    bestStreak: Number(row[4] || 0),
    lastActiveDate: normalizeDateCell(row[5]),
    firstLoginDate: normalizeDateCell(row[6]),
    totalDays: Number(row[7] || 0),
    status: String(row[8] || 'ACTIVE').toUpperCase(),
    lockReason: String(row[9] || ''),
    lockedAt: String(row[10] || ''),
    unlockRequested: String(row[11] || 'NO').toUpperCase() === 'YES',
    unlockRequestNote: String(row[12] || ''),
    unlockedByTeacherAt: String(row[13] || ''),
    graceUntilDate: normalizeDateCell(row[14]),
    updatedAt: String(row[15] || '')
  };
}

function findStudentRow(studentSheet, key) {
  const data = studentSheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0] || '').trim() === key) {
      return { rowNumber: i + 1, row: data[i], student: rowToStudentObj(data[i], i + 1) };
    }
  }
  return null;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleAction(params) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const { studentSheet, configSheet } = ensureSheets();
    const cfg = readConfig(configSheet);
    const action = String(params.action || 'ping').trim();
    const today = getTodayVN();
    const nowStr = getNowVN();

    if (action === 'ping') {
      return { ok: true, message: 'Luyen Nghe Tang Cuong Streak API ready', today: today, config: cfg };
    }

    // =========================================================================
    // 1. CHECK LOGIN (Học viên đăng nhập)
    // =========================================================================
    if (action === 'checkLogin') {
      const name = String(params.name || '').trim();
      const classCode = String(params.classCode || '').trim().toUpperCase();
      if (!name || !classCode) {
        return { ok: false, error: 'Missing name or classCode' };
      }

      const rawInit = parseInt(params.initialStreak, 10);
      const initStreak = (!isNaN(rawInit) && rawInit >= 1 && rawInit <= 365) ? rawInit : 1;

      const key = makeStudentKey(name, classCode);
      const found = findStudentRow(studentSheet, key);

      // Học viên mới tinh lần đầu vào web -> tạo mới (tự động kế thừa số bài/DAY đã làm trên máy nếu có)
      if (!found) {
        const newRow = [
          key,
          name,
          classCode,
          initStreak,     // StreakCount
          initStreak,     // BestStreak
          today,          // LastActiveDate (Ngày đầu tiên không bị phạt khóa ngay)
          today,          // FirstLoginDate
          initStreak,     // TotalDays
          'ACTIVE',       // Status
          '',             // LockReason
          '',             // LockedAt
          'NO',           // UnlockRequested
          '',             // UnlockRequestNote
          '',             // UnlockedByTeacherAt
          '',             // GraceUntilDate
          nowStr          // UpdatedAt
        ];
        studentSheet.appendRow(newRow);
        return {
          ok: true,
          locked: false,
          isNew: true,
          seededFromHistory: initStreak > 1,
          streakCount: initStreak,
          bestStreak: initStreak,
          lastActiveDate: today,
          todayDone: true,
          config: cfg
        };
      }

      const st = found.student;
      const rNum = found.rowNumber;

      // Bổ sung chuỗi cũ nếu học viên vừa đăng nhập lần đầu hôm nay trước khi có tính năng tự cộng chuỗi
      let seededFromHistory = false;
      if (
        initStreak > 1 &&
        st.status === 'ACTIVE' &&
        st.firstLoginDate === today &&
        st.lastActiveDate === today &&
        st.totalDays === 1 &&
        st.streakCount === 1 &&
        !st.unlockedByTeacherAt
      ) {
        st.streakCount = initStreak;
        st.bestStreak = Math.max(st.bestStreak, initStreak);
        st.totalDays = initStreak;
        seededFromHistory = true;
        studentSheet.getRange(rNum, 4).setValue(st.streakCount);
        studentSheet.getRange(rNum, 5).setValue(st.bestStreak);
        studentSheet.getRange(rNum, 8).setValue(st.totalDays);
        studentSheet.getRange(rNum, 16).setValue(nowStr);
      }

      // Nếu hệ thống khóa chuỗi đang được giáo viên tạm TẮT toàn bộ
      if (!cfg.SystemEnabled) {
        return {
          ok: true,
          locked: false,
          systemDisabled: true,
          streakCount: st.streakCount,
          bestStreak: st.bestStreak,
          lastActiveDate: st.lastActiveDate,
          todayDone: st.lastActiveDate === today,
          config: cfg
        };
      }

      // Kiểm tra xem hôm nay có phải ngày cô vừa mở khóa (ân hạn) không
      const hasGraceToday = (st.graceUntilDate === today);

      // Nếu đang bị đánh dấu LOCKED trong Sheet
      if (st.status === 'LOCKED' && !hasGraceToday) {
        return {
          ok: true,
          locked: true,
          fullName: st.fullName,
          classCode: st.classCode,
          streakCount: st.streakCount,
          lastActiveDate: st.lastActiveDate,
          lockReason: st.lockReason || 'Tài khoản đang bị khóa do bỏ chuỗi luyện nghe.',
          unlockRequested: st.unlockRequested,
          unlockRequestNote: st.unlockRequestNote,
          config: cfg
        };
      }

      // Nếu đã hoạt động hôm nay rồi -> mở bình thường
      if (st.lastActiveDate === today) {
        // Cập nhật lại tên hiển thị có dấu nếu lần trước nhập khác hoa/thường
        if (name && name !== st.fullName) {
          studentSheet.getRange(rNum, 2).setValue(name);
        }
        return {
          ok: true,
          locked: false,
          seededFromHistory: seededFromHistory,
          streakCount: st.streakCount,
          bestStreak: st.bestStreak,
          lastActiveDate: st.lastActiveDate,
          todayDone: true,
          config: cfg
        };
      }

      // Kiểm tra khoảng cách ngày từ lần cuối học đến hôm nay
      const gap = diffDaysYMD(st.lastActiveDate, today);

      // Nếu gap >= 2 (tức là đã bỏ ít nhất 1 ngày trọn vẹn không vào nghe) và không có ân hạn hôm nay
      if (gap >= 2 && !hasGraceToday) {
        const sundayBypass = (cfg.StreakMode === 'ALLOW_SUNDAY_OFF') && isOnlySundaysMissed(st.lastActiveDate, today);
        if (!sundayBypass) {
          const reason = `Bỏ chuỗi (lần cuối nghe: ${st.lastActiveDate || 'chưa rõ'}, vắng ${gap - 1} ngày)`;
          studentSheet.getRange(rNum, 9).setValue('LOCKED');   // Status
          studentSheet.getRange(rNum, 10).setValue(reason);    // LockReason
          studentSheet.getRange(rNum, 11).setValue(nowStr);    // LockedAt
          studentSheet.getRange(rNum, 16).setValue(nowStr);    // UpdatedAt
          return {
            ok: true,
            locked: true,
            fullName: st.fullName,
            classCode: st.classCode,
            streakCount: st.streakCount,
            lastActiveDate: st.lastActiveDate,
            lockReason: reason,
            unlockRequested: st.unlockRequested,
            unlockRequestNote: st.unlockRequestNote,
            config: cfg
          };
        }
      }

      // Nếu chế độ là LOGIN (chỉ cần đăng nhập mỗi ngày là tính giữ chuỗi luôn)
      if (cfg.RequireActivity === 'LOGIN') {
        const nextStreak = (gap === 1 || hasGraceToday) ? (st.streakCount + 1) : 1;
        const nextBest = Math.max(st.bestStreak, nextStreak);
        studentSheet.getRange(rNum, 4).setValue(nextStreak);
        studentSheet.getRange(rNum, 5).setValue(nextBest);
        studentSheet.getRange(rNum, 6).setValue(today);
        studentSheet.getRange(rNum, 8).setValue(st.totalDays + 1);
        studentSheet.getRange(rNum, 9).setValue('ACTIVE');
        studentSheet.getRange(rNum, 15).setValue('');
        studentSheet.getRange(rNum, 16).setValue(nowStr);
        return {
          ok: true,
          locked: false,
          streakCount: nextStreak,
          bestStreak: nextBest,
          lastActiveDate: today,
          todayDone: true,
          config: cfg
        };
      }

      // Nếu chế độ là ACTIVITY: Cho vào lớp hôm nay, nhắc nghe audio / làm bài để điểm danh chuỗi hôm nay
      studentSheet.getRange(rNum, 16).setValue(nowStr);
      return {
        ok: true,
        locked: false,
        streakCount: st.streakCount,
        bestStreak: st.bestStreak,
        lastActiveDate: st.lastActiveDate,
        todayDone: false,
        hasGraceToday: hasGraceToday,
        config: cfg
      };
    }

    // =========================================================================
    // 2. RECORD ACTIVITY (Ghi nhận học viên đã vào nghe Audio / Nộp bài hôm nay)
    // =========================================================================
    if (action === 'recordActivity') {
      const name = String(params.name || '').trim();
      const classCode = String(params.classCode || '').trim().toUpperCase();
      if (!name || !classCode) return { ok: false, error: 'Missing name or classCode' };

      const key = makeStudentKey(name, classCode);
      const found = findStudentRow(studentSheet, key);
      if (!found) {
        return handleAction({ action: 'checkLogin', name: name, classCode: classCode });
      }

      const st = found.student;
      const rNum = found.rowNumber;
      if (st.lastActiveDate === today) {
        return { ok: true, streakCount: st.streakCount, bestStreak: st.bestStreak, todayDone: true };
      }

      const gap = diffDaysYMD(st.lastActiveDate, today);
      const sundayBypass = (cfg.StreakMode === 'ALLOW_SUNDAY_OFF') && isOnlySundaysMissed(st.lastActiveDate, today);
      let nextStreak = 1;
      if (gap <= 1 || sundayBypass || st.graceUntilDate === today) {
        nextStreak = Math.max(1, st.streakCount + 1);
      }
      const nextBest = Math.max(st.bestStreak, nextStreak);

      studentSheet.getRange(rNum, 4).setValue(nextStreak);
      studentSheet.getRange(rNum, 5).setValue(nextBest);
      studentSheet.getRange(rNum, 6).setValue(today);
      studentSheet.getRange(rNum, 8).setValue(st.totalDays + 1);
      studentSheet.getRange(rNum, 9).setValue('ACTIVE');
      studentSheet.getRange(rNum, 10).setValue('');
      studentSheet.getRange(rNum, 12).setValue('NO');
      studentSheet.getRange(rNum, 15).setValue('');
      studentSheet.getRange(rNum, 16).setValue(nowStr);

      return {
        ok: true,
        streakCount: nextStreak,
        bestStreak: nextBest,
        lastActiveDate: today,
        todayDone: true
      };
    }

    // =========================================================================
    // 3. REQUEST UNLOCK (Học viên gửi yêu cầu xin cô mở khóa)
    // =========================================================================
    if (action === 'requestUnlock') {
      const name = String(params.name || '').trim();
      const classCode = String(params.classCode || '').trim().toUpperCase();
      const note = String(params.note || '').trim().slice(0, 300);
      if (!name || !classCode) return { ok: false, error: 'Missing name or classCode' };

      const key = makeStudentKey(name, classCode);
      const found = findStudentRow(studentSheet, key);
      if (!found) return { ok: false, error: 'Student not found' };

      const rNum = found.rowNumber;
      studentSheet.getRange(rNum, 12).setValue('YES');
      studentSheet.getRange(rNum, 13).setValue(note || '(Học viên đã nhấn yêu cầu mở khóa)');
      studentSheet.getRange(rNum, 16).setValue(nowStr);

      return { ok: true, unlockRequested: true };
    }

    // =========================================================================
    // CÁC HÀNH ĐỘNG DÀNH RIÊNG CHO GIÁO VIÊN (CẦN ADMIN KEY)
    // =========================================================================
    const adminKey = String(params.adminKey || '').trim();
    if (adminKey !== TEACHER_ADMIN_KEY) {
      return { ok: false, error: 'Unauthorized: Invalid teacher adminKey' };
    }

    // 4. LIST STUDENTS
    if (action === 'listStudents') {
      const data = studentSheet.getDataRange().getValues();
      const students = [];
      for (let i = 1; i < data.length; i++) {
        if (!data[i][0]) continue;
        const st = rowToStudentObj(data[i], i + 1);
        // Tính thêm trạng thái thực tế theo ngày hôm nay (dù học viên chưa đăng nhập lại hôm nay)
        const gap = diffDaysYMD(st.lastActiveDate, today);
        const sundayBypass = (cfg.StreakMode === 'ALLOW_SUNDAY_OFF') && isOnlySundaysMissed(st.lastActiveDate, today);
        const willBeLocked = cfg.SystemEnabled && st.status !== 'LOCKED' && st.graceUntilDate !== today && gap >= 2 && !sundayBypass;
        st.daysMissed = Math.max(0, gap - 1);
        st.willBeLockedOnNextLogin = willBeLocked;
        st.todayDone = (st.lastActiveDate === today);
        students.push(st);
      }

      // Sắp xếp: Xin mở khóa -> Đang bị khóa -> Sắp bị khóa -> Đang học
      students.sort((a, b) => {
        const score = (s) => {
          if (s.status === 'LOCKED' && s.unlockRequested) return 0;
          if (s.status === 'LOCKED') return 1;
          if (s.willBeLockedOnNextLogin) return 2;
          return 3;
        };
        return score(a) - score(b);
      });

      return { ok: true, today: today, config: cfg, students: students };
    }

    // 5. UNLOCK STUDENT
    if (action === 'unlockStudent') {
      const studentKey = String(params.studentKey || '').trim();
      const keepStreak = String(params.keepStreak || 'false').toLowerCase() === 'true';
      const found = findStudentRow(studentSheet, studentKey);
      if (!found) return { ok: false, error: 'Không tìm thấy học viên' };

      const rNum = found.rowNumber;
      const st = found.student;
      if (!keepStreak) {
        studentSheet.getRange(rNum, 4).setValue(0); // Học xong hôm nay sẽ lên thành 1
      }
      studentSheet.getRange(rNum, 9).setValue('ACTIVE');
      studentSheet.getRange(rNum, 10).setValue('');
      studentSheet.getRange(rNum, 12).setValue('NO');
      studentSheet.getRange(rNum, 13).setValue('');
      studentSheet.getRange(rNum, 14).setValue(nowStr);
      studentSheet.getRange(rNum, 15).setValue(today); // Ân hạn cả ngày hôm nay để vào lại không bị tự khóa ngay
      studentSheet.getRange(rNum, 16).setValue(nowStr);

      return { ok: true, unlocked: studentKey, keepStreak: keepStreak };
    }

    // 6. LOCK STUDENT (Khóa thủ công)
    if (action === 'lockStudent') {
      const studentKey = String(params.studentKey || '').trim();
      const reason = String(params.reason || 'Khóa thủ công bởi Miss Nguyệt').trim();
      const found = findStudentRow(studentSheet, studentKey);
      if (!found) return { ok: false, error: 'Không tìm thấy học viên' };

      const rNum = found.rowNumber;
      studentSheet.getRange(rNum, 9).setValue('LOCKED');
      studentSheet.getRange(rNum, 10).setValue(reason);
      studentSheet.getRange(rNum, 11).setValue(nowStr);
      studentSheet.getRange(rNum, 15).setValue('');
      studentSheet.getRange(rNum, 16).setValue(nowStr);

      return { ok: true, locked: studentKey };
    }

    // 7. SET CONFIG
    if (action === 'setConfig') {
      const updated = writeConfig(configSheet, {
        SystemEnabled: typeof params.systemEnabled !== 'undefined' ? String(params.systemEnabled).toLowerCase() === 'true' : undefined,
        StreakMode: params.streakMode,
        RequireActivity: params.requireActivity
      });
      return { ok: true, config: updated };
    }

    // 8. DELETE STUDENT
    if (action === 'deleteStudent') {
      const studentKey = String(params.studentKey || '').trim();
      const found = findStudentRow(studentSheet, studentKey);
      if (!found) return { ok: false, error: 'Không tìm thấy học viên' };
      studentSheet.deleteRow(found.rowNumber);
      return { ok: true, deleted: studentKey };
    }

    return { ok: false, error: 'Unknown action: ' + action };
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  try {
    const params = (e && e.parameter) ? e.parameter : {};
    return jsonResponse(handleAction(params));
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}

function doPost(e) {
  try {
    let params = (e && e.parameter) ? Object.assign({}, e.parameter) : {};
    if (e && e.postData && e.postData.contents) {
      try {
        const body = JSON.parse(e.postData.contents);
        params = Object.assign(params, body);
      } catch (parseErr) {}
    }
    return jsonResponse(handleAction(params));
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}
