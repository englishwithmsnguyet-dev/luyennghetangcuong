/**
 * LUCKY CLOVER GARDEN INTERACTION & ANIMATION ENGINE ("CHẬU CỎ 4 LÁ MAY MẮN CỦA CÔ NGUYỆT")
 * Dedicated exclusively to growing and caring for Cỏ 4 Lá May Mắn (🍀).
 * Special Feature Edition: Relaxing Gamification + Exam Motivation & Daily Study Rewards.
 * 
 * Core Mechanics:
 * 1. Water Economy (Giọt Nước Nỗ Lực 💧):
 *    - Water is not infinite; it is earned through daily logins, student attendance,
 *      and answering questions correctly in class / quick exam drills.
 *    - Costs 10💧 per watering session (+25% growth).
 * 2. Grand Harvest Celebration & Exam Motivation Cards (Thông Điệp Ôn Thi 📜):
 *    - Reaching 100% full bloom unlocks a Grand Harvest modal with a curated,
 *      heartfelt exam motivation message from Cô Nguyệt.
 *    - All harvested messages are archived in the Lucky Clover Basket.
 * 3. Daily Check-in Streak & Quick Exam Mini-Quiz (Đố Vui Ôn Thi 🎯).
 */
(function(root) {
  'use strict';

  // ==========================================
  // 1. PROCEDURAL WEB AUDIO SYNTHESIZER
  // ==========================================
  const GardenAudio = (function() {
    let ctx = null;

    function getCtx() {
      if (!ctx) {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (AudioClass) ctx = new AudioClass();
      }
      if (ctx && ctx.state === 'suspended') {
        ctx.resume();
      }
      return ctx;
    }

    // Water droplet trickle sound
    function playWater() {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      [0, 0.08, 0.16, 0.24].forEach((delay, idx) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'sine';
        const startFreq = 800 + idx * 120 + (Math.random() * 80 - 40);
        osc.frequency.setValueAtTime(startFreq, now + delay);
        osc.frequency.exponentialRampToValueAtTime(startFreq + 450, now + delay + 0.06);

        gain.gain.setValueAtTime(0.12, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.07);

        osc.connect(gain);
        gain.connect(c.destination);

        osc.start(now + delay);
        osc.stop(now + delay + 0.08);
      });
    }

    // Warm Sunbeam Shimmer Sound
    function playSun() {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      const freqs = [523.25, 659.25, 783.99, 987.77, 1046.50];
      freqs.forEach((freq, i) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);

        gain.gain.setValueAtTime(0.08, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.45);

        osc.connect(gain);
        gain.connect(c.destination);

        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.5);
      });
    }

    // Fertilizer Growth Pop Sound
    function playFertilize() {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.15);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(c.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    }

    // Water Drop / Reward Sparkling Chime
    function playReward() {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      const notes = [659.25, 830.61, 987.77, 1318.51];
      notes.forEach((f, idx) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + idx * 0.06);

        gain.gain.setValueAtTime(0.12, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.35);

        osc.connect(gain);
        gain.connect(c.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.4);
      });
    }

    // Joyous Lucky Harvest Fanfare
    function playHarvest() {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      const notes = [
        { f: 783.99, t: 0 },
        { f: 1046.50, t: 0.1 },
        { f: 1318.51, t: 0.2 },
        { f: 1567.98, t: 0.32 },
        { f: 2093.00, t: 0.48 }
      ];

      notes.forEach(n => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, now + n.t);

        gain.gain.setValueAtTime(0.16, now + n.t);
        gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + 0.65);

        osc.connect(gain);
        gain.connect(c.destination);

        osc.start(now + n.t);
        osc.stop(now + n.t + 0.7);
      });
    }

    return { playWater, playSun, playFertilize, playReward, playHarvest };
  })();

  // ==========================================
  // 2. LUCKY CLOVER GARDEN ENGINE
  // ==========================================
  const FlowerGarden = {
    STORAGE_KEY: 'flower_garden_data_v1',
    WATER_PER_WATERING: 10, // Giọt nước cần thiết cho mỗi lần tưới

    state: {
      currentFlowerId: 'clover',
      progress: 30, // 0 to 100
      moisture: 75,
      sunlight: 80,
      waterDrops: 35, // Giọt nước nỗ lực tích lũy
      loginStreak: 1,
      lastLoginDate: '',
      lastWateredDate: '', // Theo dõi ngày tưới nước gần nhất để héo cây nếu bỏ bê
      isWilted: false, // Trạng thái héo rũ khi >= 1 ngày không được tưới
      harvestCount: 0,
      basket: {
        clover: 0
      },
      harvestedQuotes: [], // Lưu các thông điệp ôn thi đã rút được
      seenQuizIds: [], // Ghi nhớ ID các câu hỏi đã làm để đảm bảo KHÔNG TRÙNG LẶP
      history: []
    },

    currentQuizIndex: 0,

    init() {
      this.loadState();
      this.checkWiltingStatus();
      this.checkDailyLoginReward();
      this.bindEvents();
      this.initStudentNameWatcher();
      this.render();
      this.startAmbientDecay();

      // Show wilted alert notice if plant needs water
      if (this.isPlantWilted()) {
        setTimeout(() => {
          this.updateSpeechBubble(`🥀 Em khát nước quá rồi... Đã 1 ngày ${this.getStudentName()} chưa tưới nước, lá cỏ đang bị héo rũ mất rồi! Mau tưới cho em 10💧 nước để hồi sinh nhé! 🥺💧`);
        }, 600);
      }

      if (typeof window !== 'undefined') {
        const hash = window.location.hash;
        if (hash === '#quiz') {
          setTimeout(() => this.openQuizModal(), 300);
        } else if (hash === '#quiz-benefits') {
          setTimeout(() => this.openQuizModal(null, 'benefits'), 300);
        } else if (hash === '#quiz-speaking') {
          setTimeout(() => this.openQuizModal(null, 'speaking'), 300);
        } else if (hash === '#quiz-writing') {
          setTimeout(() => this.openQuizModal(null, 'writing'), 300);
        } else if (hash === '#harvest-test') {
          setTimeout(() => this.harvest(), 400);
        } else if (hash === '#earn-water') {
          setTimeout(() => this.openEarnWaterModal(), 300);
        } else if (hash === '#basket' || hash === '#basket-test') {
          setTimeout(() => this.openBasketModal(), 300);
        } else if (hash === '#wilted' || hash === '#wilt-test') {
          // Dedicated debug hash for testing wilted plant state
          this.state.lastWateredDate = '2026-01-01';
          this.state.moisture = 10;
          this.checkWiltingStatus();
          this.render();
          this.updateSpeechBubble(`🥀 Em khát nước quá rồi... Đã 1 ngày ${this.getStudentName()} chưa tưới nước, lá cỏ đang bị héo rũ mất rồi! Mau tưới cho em 10💧 nước để hồi sinh nhé! 🥺💧`);
        }
      }
    },

    loadState() {
      try {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          this.state = Object.assign(this.state, parsed);
        }
      } catch (e) {
        console.warn('Could not load garden state from localStorage', e);
      }

      // Guarantee single plant is always clover
      this.state.currentFlowerId = 'clover';
      const cloverCount = (this.state.basket && (this.state.basket.clover || this.state.basket.sunflower || this.state.harvestCount)) || 0;
      this.state.basket = { clover: cloverCount };
      if (!this.state.harvestCount) {
        this.state.harvestCount = cloverCount;
      }
      if (typeof this.state.waterDrops !== 'number' || isNaN(this.state.waterDrops)) {
        this.state.waterDrops = 35;
      }
      if (!Array.isArray(this.state.harvestedQuotes)) {
        this.state.harvestedQuotes = [];
      }
      if (!this.state.loginStreak) {
        this.state.loginStreak = 1;
      }
      if (!this.state.lastWateredDate) {
        // Initialize to today for fresh players so they start healthy
        this.state.lastWateredDate = new Date().toISOString().slice(0, 10);
      }
    },

    saveState() {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
      } catch (e) {
        console.warn('Could not save garden state to localStorage', e);
      }
    },

    // ==========================================
    // PLANT WILTING & REVIVAL ENGINE (HÉO RŨ KHI 1 NGÀY KHÔNG TƯỚI)
    // ==========================================
    getTodayDateString() {
      return new Date().toISOString().slice(0, 10);
    },

    getDaysSinceLastWater() {
      if (!this.state.lastWateredDate) return 0;
      const today = this.getTodayDateString();
      if (this.state.lastWateredDate === today) return 0;

      try {
        const t1 = new Date(this.state.lastWateredDate + 'T00:00:00');
        const t2 = new Date(today + 'T00:00:00');
        const diffMs = t2.getTime() - t1.getTime();
        const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
        return Math.max(0, diffDays);
      } catch (e) {
        return 0;
      }
    },

    isPlantWilted() {
      // 1. If clover already reached full bloom (100%), it stays ready to harvest
      if (this.state.progress >= 100) return false;
      // 2. If >= 1 day has passed without watering, the clover withers
      return this.getDaysSinceLastWater() >= 1;
    },

    checkWiltingStatus() {
      if (this.isPlantWilted()) {
        this.state.isWilted = true;
        // Dry out soil moisture when neglected
        if (this.state.moisture > 15) {
          this.state.moisture = 15;
          this.saveState();
        }
      } else {
        this.state.isWilted = false;
      }
    },

    triggerRevivalAnimation() {
      const potWrapper = document.getElementById('garden-pot-wrapper');
      if (potWrapper) {
        potWrapper.classList.remove('is-wilted');
        potWrapper.classList.remove('pot-revival-burst');
        void potWrapper.offsetWidth;
        potWrapper.classList.add('pot-revival-burst');
        setTimeout(() => potWrapper.classList.remove('pot-revival-burst'), 1200);
      }
    },

    // Check Daily Login for Streak & Free Water Reward
    checkDailyLoginReward() {
      const today = new Date().toISOString().slice(0, 10);
      if (this.state.lastLoginDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        if (this.state.lastLoginDate === yesterday) {
          this.state.loginStreak = (this.state.loginStreak || 1) + 1;
        } else if (!this.state.lastLoginDate) {
          this.state.loginStreak = 1;
        } else {
          // Break in streak
          this.state.loginStreak = 1;
        }
        this.state.lastLoginDate = today;

        // Daily login water bonus: base 15 + streak bonus up to 25
        const bonus = 15 + Math.min(10, (this.state.loginStreak - 1) * 2);
        this.state.waterDrops += bonus;
        this.saveState();

        setTimeout(() => {
          this.showDailyLoginToast(bonus, this.state.loginStreak);
        }, 1200);
      }
    },

    showDailyLoginToast(bonus, streak) {
      GardenAudio.playReward();
      this.spawnParticles('💧', 6);
      this.spawnParticles('✨', 6);
      const msg = `☀️ Điểm danh đăng nhập ngày mới: +${bonus}💧 Nước Nỗ Lực! (Chuỗi ${streak} ngày chuyên cần) 🍀`;
      this.updateSpeechBubble(msg);
      if (typeof showToast === 'function') {
        showToast(msg);
      }
    },

    bindEvents() {
      // Care action buttons
      const btnWater = document.getElementById('btn-water-flower');
      const btnSun = document.getElementById('btn-sun-flower');
      const btnFertilize = document.getElementById('btn-fertilize-flower');
      const btnHarvest = document.getElementById('btn-harvest-flower');
      const btnQuiz = document.getElementById('btn-quiz-flower');

      if (btnWater) btnWater.addEventListener('click', () => this.water());
      if (btnSun) btnSun.addEventListener('click', () => this.sunbathe());
      if (btnFertilize) btnFertilize.addEventListener('click', () => this.fertilize());
      if (btnHarvest) btnHarvest.addEventListener('click', () => this.harvest());
      if (btnQuiz) btnQuiz.addEventListener('click', () => this.openQuizModal());

      // Header modal button for clover basket
      const btnOpenBasket = document.getElementById('btn-open-flower-basket');
      if (btnOpenBasket) btnOpenBasket.addEventListener('click', () => this.openBasketModal());

      // Header water pill click to open earning guide
      const btnOpenEarnWater = document.getElementById('btn-open-earn-water');
      if (btnOpenEarnWater) btnOpenEarnWater.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openEarnWaterModal();
      });
      const waterPill = document.getElementById('garden-water-pill');
      if (waterPill) waterPill.addEventListener('click', () => this.openEarnWaterModal());

      // Stage click for petting plant
      const stage = document.getElementById('garden-stage');
      if (stage) {
        stage.addEventListener('click', (e) => {
          if (!e.target.closest('button')) {
            this.petPlant();
          }
        });
      }
    },

    // ==========================================
    // STUDENT NAME PERSONALIZATION ENGINE
    // ==========================================
    initStudentNameWatcher() {
      if (typeof window === 'undefined') return;

      // 1. Storage event listener (sync name across tabs or when login occurs)
      window.addEventListener('storage', (e) => {
        if (e.key === 'vstep_student_name' || e.key === 'vstep_user_session' || e.key === 'student_name') {
          this.updateTitleWithStudentName();
        }
      });

      // 2. DOM MutationObserver to detect async login name rendering
      const candidateElements = [
        document.getElementById('sidebar-user-name'),
        document.getElementById('b-stat-student'),
        document.querySelector('.user-name'),
        document.querySelector('#user-display-name'),
        document.querySelector('#current-user-name')
      ].filter(Boolean);

      if (window.MutationObserver && candidateElements.length > 0) {
        const observer = new MutationObserver(() => {
          this.updateTitleWithStudentName();
        });
        candidateElements.forEach(el => {
          observer.observe(el, { childList: true, characterData: true, subtree: true });
        });
      }
    },

    getStudentName() {
      // 1. Check custom name in flower garden state
      if (this.state && this.state.studentName && typeof this.state.studentName === 'string') {
        const s = this.cleanStudentName(this.state.studentName);
        if (s && s !== 'Bạn') return s;
        // Clean legacy "Cô Nguyệt" stored in state
        if (/cô nguyệt|co nguyet|ptmn/i.test(this.state.studentName)) {
          this.state.studentName = '';
          this.saveState();
        }
      }

      // 2. Check localStorage / sessionStorage
      try {
        const candidateKeys = ['vstep_student_name', 'student_name', 'studentName', 'userName', 'username'];
        for (const k of candidateKeys) {
          const val = localStorage.getItem(k) || sessionStorage.getItem(k);
          if (val && typeof val === 'string') {
            const s = this.cleanStudentName(val);
            if (s && s !== 'Bạn') return s;
          }
        }

        // Check JSON session in listening-mock-tests
        const sessionStr = localStorage.getItem('vstep_user_session');
        if (sessionStr) {
          const parsed = JSON.parse(sessionStr);
          if (parsed && parsed.name) {
            const s = this.cleanStudentName(parsed.name);
            if (s && s !== 'Bạn') return s;
          }
        }
      } catch (e) {}

      // 3. Check common DOM elements on the page
      const selectors = [
        '#sidebar-user-name',
        '#b-stat-student',
        '#student-name',
        '.user-name',
        '#user-display-name',
        '#current-user-name'
      ];
      for (const sel of selectors) {
        const el = document.querySelector(sel);
        if (el && el.textContent) {
          const s = this.cleanStudentName(el.textContent);
          if (s && s !== 'Bạn') return s;
        }
      }

      // 4. Default fallback: "Bạn"
      return 'Bạn';
    },

    cleanStudentName(raw) {
      if (!raw || typeof raw !== 'string') return '';
      let s = raw.trim();
      // Filter out generic placeholders and teacher identifiers
      if (/^(học viên|hoc vien|học viên vstep|chưa nhập tên|chua nhap ten|ẩn danh|an danh|học viên ẩn danh|cô nguyệt|co nguyet|ptmn|giáo viên|giao vien|teacher|cô nguyệt \(ptmn\))$/i.test(s)) return '';

      // Strip (PTMN) or (Giáo viên) suffixes if attached
      s = s.replace(/\s*\((ptmn|giáo viên|teacher)\)/gi, '').trim();
      if (/^(cô nguyệt|co nguyet|ptmn)$/i.test(s)) return '';

      // If name has format "CB206 - Nguyễn Văn A" or "Nguyễn Văn A - CB206"
      if (s.includes(' - ')) {
        const parts = s.split(' - ').map(p => p.trim());
        const namePart = parts.find(p => !/^[A-Z0-9]{2,6}$/i.test(p) && p.length > 2 && !/cô nguyệt|ptmn/i.test(p));
        if (namePart) return namePart;
      }
      return s;
    },

    escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    },

    setStudentName(newName) {
      if (!newName || !newName.trim()) return;
      const clean = this.cleanStudentName(newName);
      if (!clean) return;
      this.state.studentName = clean;
      try {
        localStorage.setItem('vstep_student_name', clean);
        sessionStorage.setItem('vstep_student_name', clean);
      } catch (e) {}
      this.saveState();
      this.updateTitleWithStudentName();
      this.updateSpeechBubble(`Chào mừng ${clean} đến với Chậu Cỏ May Mắn! Chăm chỉ tích lũy nước nỗ lực mỗi ngày nhé! 🍀✨`);
      if (typeof showToast === 'function') {
        showToast(`🍀 Đã cập nhật tên chủ nhân Chậu Cỏ May Mắn: ${clean}!`);
      }
    },

    updateTitleWithStudentName() {
      const titleEl = document.getElementById('garden-title-heading') ||
                      document.querySelector('.garden-header-row h3');
      if (!titleEl) return;

      const studentName = this.getStudentName();
      
      titleEl.innerHTML = `🍀 Chậu Cỏ 4 Lá May Mắn Của <span class="garden-student-name-tag" id="garden-student-name" title="Bấm để đổi tên học viên của bạn">${this.escapeHtml(studentName)} <i class="fa-solid fa-pen-to-square edit-name-pen-icon" style="font-size:12px; opacity:0.75; margin-left:3px;"></i></span>`;

      // Attach click to edit student name
      const nameTag = titleEl.querySelector('#garden-student-name');
      if (nameTag && !nameTag.dataset.bound) {
        nameTag.dataset.bound = 'true';
        nameTag.style.cursor = 'pointer';
        nameTag.addEventListener('click', (e) => {
          e.stopPropagation();
          const current = studentName === 'Bạn' ? '' : studentName;
          const entered = prompt('Nhập họ và tên học viên của bạn để khắc tên lên Chậu Cỏ May Mắn 🍀:', current);
          if (entered !== null && entered.trim()) {
            this.setStudentName(entered);
          }
        });
      }
    },

    // ==========================================
    // REWARD & WATER DROP EARNING API
    // ==========================================
    addWaterDrops(amount, reason, notify = true) {
      const added = Math.max(1, parseInt(amount, 10) || 5);
      this.state.waterDrops = (this.state.waterDrops || 0) + added;
      this.saveState();

      GardenAudio.playReward();
      this.triggerWaterDropPillGlint();
      this.spawnWaterDropsFloat(`+${added}💧`);

      if (notify) {
        const msg = `🎉 +${added}💧 Nước Nỗ Lực! (${reason || 'Học tập chăm chỉ'}) 🍀`;
        this.updateSpeechBubble(msg);
        if (typeof showToast === 'function') {
          showToast(msg);
        }
      }
      this.render();
    },

    triggerWaterDropPillGlint() {
      const pill = document.getElementById('garden-water-pill');
      if (pill) {
        pill.classList.remove('pill-reward-glow');
        void pill.offsetWidth;
        pill.classList.add('pill-reward-glow');
        setTimeout(() => pill.classList.remove('pill-reward-glow'), 1200);
      }
    },

    spawnWaterDropsFloat(text) {
      const stage = document.getElementById('garden-stage');
      if (!stage) return;

      const badge = document.createElement('div');
      badge.className = 'garden-float-water-reward';
      badge.textContent = text;
      badge.style.left = `${35 + Math.random() * 30}%`;
      badge.style.bottom = `${45 + Math.random() * 20}%`;
      stage.appendChild(badge);

      setTimeout(() => {
        if (typeof badge.remove === 'function') badge.remove();
      }, 1600);
    },

    // ==========================================
    // CARE ACTIONS
    // ==========================================

    // 1. Water Action: Costs WATER_PER_WATERING (10💧) -> +25% progress
    water() {
      if (this.state.progress >= 100) {
        this.triggerReadyToHarvest();
        return;
      }

      const cost = this.WATER_PER_WATERING;
      if (this.state.waterDrops < cost) {
        this.showNeedMoreWaterNotice();
        return;
      }

      const wasWilted = this.isPlantWilted();

      // Deduct water
      this.state.waterDrops -= cost;
      this.state.moisture = Math.min(100, this.state.moisture + 35);
      this.state.lastWateredDate = this.getTodayDateString();
      this.state.isWilted = false;
      this.addProgress(25);

      GardenAudio.playWater();
      this.triggerPlantBounce();
      this.triggerWateringAnimation();

      if (wasWilted) {
        this.triggerRevivalAnimation();
        this.spawnParticles('🌿', 8);
        this.spawnParticles('✨', 8);
        this.spawnParticles('💧', 8);
        this.updateSpeechBubble(`🎉 Oa, tuyệt vời quá! Cảm ơn ${this.getStudentName()} đã tưới nước kịp thời! Bé cỏ 4 lá đã hồi sinh tươi tốt và xanh mướt trở lại rồi! 🥰🌿✨`);
        if (typeof showToast === 'function') {
          showToast(`🌿 Bé Cỏ 4 Lá đã hồi sinh xanh mướt nhờ 10💧 nước nỗ lực của ${this.getStudentName()}!`);
        }
      } else {
        this.spawnParticles('💧', 6);
        this.updateSpeechBubble(`Bé cỏ được tưới 10💧 nước nỗ lực mát lành, đang vươn mình lớn nhanh! 💧🍀 (Còn ${this.state.waterDrops}💧)`);
      }

      this.saveState();
      this.render();
    },

    showNeedMoreWaterNotice() {
      GardenAudio.playSun();
      this.updateSpeechBubble(`Chưa đủ nước tưới rồi! Em cần 10💧 (hiện có ${this.state.waterDrops}💧). Hãy làm câu đố ôn thi hoặc điểm danh để nhận thêm nước nhé! 💧✨`);
      if (typeof showToast === 'function') {
        showToast(`💧 Cần 10 giọt nước để tưới cây (bạn đang có ${this.state.waterDrops}💧). Bấm "Đố vui ôn thi" để kiếm thêm nước nhé!`);
      }
      this.openEarnWaterModal();
    },

    // 2. Sunlight Action (+20%)
    sunbathe() {
      if (this.isPlantWilted()) {
        GardenAudio.playSun();
        this.triggerPlantBounce();
        this.spawnParticles('🥀', 3);
        this.updateSpeechBubble(`🥀 Cây đang bị héo rũ vì 1 ngày chưa tưới nước! Phơi nắng lúc này sẽ làm cây càng khô hơn. Mau bấm "Cứu cây hồi sinh" để tưới 10💧 nước trước nhé ${this.getStudentName()}! 🥺💧`);
        if (typeof showToast === 'function') {
          showToast('🥀 Cây đang héo vì thiếu nước! Hãy tưới nước cứu cây trước khi tắm nắng nhé!');
        }
        return;
      }

      if (this.state.progress >= 100) {
        this.triggerReadyToHarvest();
        return;
      }

      GardenAudio.playSun();
      this.state.sunlight = Math.min(100, this.state.sunlight + 30);
      this.addProgress(20);

      this.triggerPlantBounce();
      this.triggerSunAnimation();
      this.spawnParticles('✨', 6);
      this.updateSpeechBubble('Ánh nắng ấm áp rọi xuống, lá cỏ 4 lá thêm xanh mướt! ☀️✨');
      this.saveState();
      this.render();
    },

    // 3. Fertilize Action (+30%)
    fertilize() {
      if (this.isPlantWilted()) {
        GardenAudio.playSun();
        this.triggerPlantBounce();
        this.spawnParticles('🥀', 3);
        this.updateSpeechBubble(`🥀 Cây đang bị héo rũ vì thiếu nước! Đất đang khô cằn nên chưa thể hấp thụ phân bón. Mau tưới 10💧 nước cứu cây trước nhé ${this.getStudentName()}! 🥺💧`);
        if (typeof showToast === 'function') {
          showToast('🥀 Đất khô cằn do chưa tưới nước! Hãy bấm "Cứu cây hồi sinh" trước nhé!');
        }
        return;
      }

      if (this.state.progress >= 100) {
        this.triggerReadyToHarvest();
        return;
      }

      GardenAudio.playFertilize();
      this.addProgress(30);

      this.triggerPlantBounce();
      this.spawnParticles('🧴', 4);
      this.spawnParticles('🌱', 4);
      this.updateSpeechBubble('Bón thêm dinh dưỡng hữu cơ, rễ bám chắc và mầm xanh bung tỏa! 🪴✨');
      this.saveState();
      this.render();
    },

    // 4. Pet Plant (+5%)
    petPlant() {
      GardenAudio.playSun();
      this.triggerPlantBounce();

      if (this.isPlantWilted()) {
        this.spawnParticles('🥀', 3);
        this.updateSpeechBubble(`🥀 Cây cỏ 4 lá đang bị héo rũ vì thiếu nước! Bạn vuốt nhẹ nhưng bé cỏ khẽ thì thầm: "Tưới 10💧 nước cứu em với ${this.getStudentName()} ơi..." 🥺💧`);
        if (typeof showToast === 'function') {
          showToast('🥀 Cây đang bị héo do 1 ngày chưa tưới nước! Mau bấm "Cứu cây hồi sinh" nhé!');
        }
        return;
      }

      this.spawnParticles('💚', 3);
      this.spawnParticles('✨', 3);
      if (this.state.progress < 100) {
        this.addProgress(5);
        this.updateSpeechBubble('Bạn nhẹ nhàng vuốt ve mầm cây, bé cỏ rung rinh thích thú! 🥰🌿');
      } else {
        this.updateSpeechBubble(`Cỏ 4 lá may mắn đã nở trọn vẹn rồi! Mau bấm "Thu hoạch" để đón thông điệp may mắn nhé ${this.getStudentName()}! 🍀✨`);
      }
      this.saveState();
      this.render();
    },

    triggerPlantBounce() {
      const pot = document.getElementById('garden-pot-wrapper');
      if (pot) {
        pot.classList.remove('plant-bouncing');
        void pot.offsetWidth;
        pot.classList.add('plant-bouncing');
        setTimeout(() => pot.classList.remove('plant-bouncing'), 650);
      }
    },

    addProgress(amount) {
      const prev = this.state.progress;
      this.state.progress = Math.min(100, this.state.progress + amount);

      if (prev < 100 && this.state.progress >= 100) {
        GardenAudio.playHarvest();
        this.triggerBloomCelebration();
      }
    },

    triggerReadyToHarvest() {
      this.updateSpeechBubble(`Cỏ 4 Lá May Mắn đã bung nở tuyệt đẹp! Mau bấm "Thu hoạch" để đón nhận thông điệp ôn thi may mắn nhé ${this.getStudentName()}! 🍀✨`);
      if (typeof showToast === 'function') {
        showToast('🍀 Cỏ 4 Lá đã nở rộ! Bấm nút "Thu hoạch" để nhận thông điệp may mắn!');
      }
    },

    // ==========================================
    // 5. GRAND HARVEST & EXAM MOTIVATION REVEAL
    // ==========================================
    harvest() {
      const flower = (root.FLOWER_CATALOG && root.FLOWER_CATALOG.clover) || {
        name: 'Cỏ 4 Lá May Mắn',
        icon: '🍀'
      };

      // 1. Play triumphant fanfare
      GardenAudio.playHarvest();

      // 2. Select a thoughtful Non-Repeating Quote (THÔNG ĐIỆP HÔM NAY)
      const quote = (typeof root.getRandomNonRepeatingQuote === 'function')
        ? root.getRandomNonRepeatingQuote()
        : {
            id: 'quote-default',
            english: 'Believe you can and you\'re halfway there.',
            vietnamese: 'Hãy tin rằng bạn có thể làm được, và bạn đã đi được nửa chặng đường rồi.',
            signature: 'From Miss Nguyet with LOVE ❤️'
          };

      // 3. Update persistent counts
      this.state.harvestCount = (this.state.harvestCount || 0) + 1;
      this.state.basket.clover = (this.state.basket.clover || 0) + 1;

      const harvestRecord = {
        harvestNum: this.state.harvestCount,
        flowerId: 'clover',
        flowerName: flower.name,
        quote: quote,
        timestamp: new Date().toISOString()
      };

      this.state.harvestedQuotes.unshift(harvestRecord);
      this.state.history.unshift(harvestRecord);

      // 4. Confetti burst
      this.triggerHarvestCelebration(flower);

      // 5. Reset for next clover sprout
      this.state.progress = 0;
      this.state.moisture = 75;
      this.state.sunlight = 75;
      this.state.currentFlowerId = 'clover';

      this.saveState();
      this.render();

      // 6. Present the Grand Exam Motivation Modal!
      setTimeout(() => {
        this.openGrandHarvestModal(quote, this.state.harvestCount);
      }, 450);
    },

    openGrandHarvestModal(quote, harvestNum) {
      let modal = document.getElementById('garden-harvest-modal');
      if (!modal) {
        modal = this.createGrandHarvestModalDom();
        document.body.appendChild(modal);
      }
      this.renderGrandHarvestCard(quote, harvestNum);
      modal.classList.add('active');
    },

    createGrandHarvestModalDom() {
      const modal = document.createElement('div');
      modal.className = 'modal-overlay garden-modal garden-harvest-modal';
      modal.id = 'garden-harvest-modal';
      modal.innerHTML = `
        <div class="modal-card garden-harvest-card">
          <button class="modal-close-btn" id="btn-close-harvest-modal">&times;</button>
          <div class="harvest-celebration-head">
            <div class="harvest-clover-sparkle-halo">
              <picture class="harvest-clover-pic">
                <source type="image/webp" srcset="assets/garden/clover_stage_4.webp">
                <img src="assets/garden/clover_stage_4.png" alt="Cỏ 4 Lá May Mắn Nở Hoa" class="harvest-clover-img" />
              </picture>
            </div>
            <span class="harvest-pill-badge" id="harvest-pill-badge">🍀 CÀNH CỎ 4 LÁ THỨ #1 ĐÃ BỪNG NỞ!</span>
            <h3 class="harvest-main-title">THÔNG ĐIỆP HÔM NAY</h3>
          </div>
          
          <div class="harvest-quote-body" id="harvest-quote-body">
            <!-- Dynamically injected quote card -->
          </div>

          <div class="harvest-modal-actions">
            <button class="btn btn-secondary btn-small" id="btn-copy-harvest-quote">
              <i class="fa-solid fa-copy"></i> Sao chép lời chúc
            </button>
            <button class="btn btn-secondary btn-small" id="btn-view-all-quotes">
              <i class="fa-solid fa-book-bookmark"></i> Xem Giỏ Lời Chúc (<b><span id="harvest-total-quotes-btn">1</span></b>)
            </button>
            <button class="btn btn-primary" id="btn-plant-next-clover">
              <i class="fa-solid fa-seedling"></i> Vun trồng mầm cỏ tiếp theo 🌱
            </button>
          </div>
        </div>
      `;

      modal.querySelector('#btn-close-harvest-modal').addEventListener('click', () => modal.classList.remove('active'));
      modal.querySelector('#btn-plant-next-clover').addEventListener('click', () => modal.classList.remove('active'));
      modal.querySelector('#btn-view-all-quotes').addEventListener('click', () => {
        modal.classList.remove('active');
        this.openBasketModal(1); // Open Tab 2 (Kho thông điệp)
      });
      modal.querySelector('#btn-copy-harvest-quote').addEventListener('click', () => {
        this.copyCurrentHarvestQuote();
      });
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });

      return modal;
    },

    renderGrandHarvestCard(quote, harvestNum) {
      const badge = document.getElementById('harvest-pill-badge');
      const body = document.getElementById('harvest-quote-body');
      const countBtn = document.getElementById('harvest-total-quotes-btn');
      if (badge) badge.textContent = `🍀 CÀNH CỎ 4 LÁ THỨ #${harvestNum} ĐÃ BỪNG NỞ!`;
      if (countBtn) countBtn.textContent = this.state.harvestedQuotes.length;

      if (!body) return;
      const english = quote.english || quote.title || 'Believe you can and you\'re halfway there.';
      const vietnamese = quote.vietnamese || quote.content || 'Hãy tin rằng bạn có thể làm được, và bạn đã đi được nửa chặng đường rồi.';

      body.innerHTML = `
        <div class="harvest-fortune-card">
          <div class="fortune-tag-row">
            <span class="fortune-topic-tag"><i class="fa-solid fa-sparkles"></i> THÔNG ĐIỆP HÔM NAY</span>
            <span class="fortune-date-stamp">${new Date().toLocaleDateString('vi-VN')}</span>
          </div>
          <div class="harvest-quote-en">"${english}"</div>
          <div class="harvest-quote-vi"><em>"${vietnamese}"</em></div>
          <div class="fortune-signature">
            <span class="daily-quote-signature">From Miss Nguyet with LOVE <span class="heart-pulse">❤️</span></span>
          </div>
        </div>
      `;
    },

    copyCurrentHarvestQuote() {
      const body = document.getElementById('harvest-quote-body');
      if (!body) return;
      const en = body.querySelector('.harvest-quote-en') ? body.querySelector('.harvest-quote-en').textContent : '';
      const vi = body.querySelector('.harvest-quote-vi') ? body.querySelector('.harvest-quote-vi').textContent : '';
      const full = `THÔNG ĐIỆP HÔM NAY\n${en}\n${vi}\nFrom Miss Nguyet with LOVE ❤️`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(full).then(() => {
          if (typeof showToast === 'function') showToast('📋 Đã sao chép thông điệp hôm nay vào bộ nhớ tạm!');
        }).catch(() => {
          if (typeof showToast === 'function') showToast('🍀 ' + full.slice(0, 50) + '...');
        });
      } else {
        if (typeof showToast === 'function') showToast('📋 Đã ghi nhớ thông điệp hôm nay!');
      }
    },

    // ==========================================
    // 6. MINI-QUIZ ÔN THI & CẨM NANG VSTEP THỰC CHIẾN (EARN WATER DROPS)
    // ==========================================
    quizState: {
      activeTab: 'practice', // 'practice' | 'benefits' | 'speaking' | 'writing'
      selectedCategory: 'all', // 'all' | 'benefit-matrix' | 'speaking-vocab' | 'writing-letter' | 'writing-essay'
      currentQuestion: null
    },

    openQuizModal(targetCategory = null, targetTab = null) {
      let modal = document.getElementById('garden-quiz-modal');
      if (!modal) {
        modal = this.createQuizModalDom();
        document.body.appendChild(modal);
      }
      if (targetTab) {
        this.switchQuizTab(targetTab);
      }
      if (targetCategory) {
        this.setQuizCategory(targetCategory);
      } else if (!this.quizState.currentQuestion) {
        this.loadNextQuizQuestion();
      }
      modal.classList.add('active');
    },

    createQuizModalDom() {
      const modal = document.createElement('div');
      modal.className = 'modal-overlay garden-modal';
      modal.id = 'garden-quiz-modal';
      modal.innerHTML = `
        <div class="modal-card garden-quiz-card vstep-hub-card">
          <div class="modal-header">
            <div>
              <h3>🎯 ĐỐ VUI ÔN THI VSTEP THỰC CHIẾN</h3>
              <p class="modal-subtext mb-0">Học Bảng Lợi Ích, Từ Vựng Speaking và Nhận Dạng Dạng Thư & Luận chuẩn VSTEP B1-B2-C1 (+10💧 Nước Nỗ Lực)!</p>
            </div>
            <button class="modal-close-btn" id="btn-close-quiz-modal">&times;</button>
          </div>

          <!-- Tab Navigation Bar -->
          <div class="quiz-modal-tabs" id="quiz-modal-tabs">
            <button class="quiz-tab-btn active" data-tab="practice">
              <span class="tab-icon">🎯</span> Luyện Đề (+10💧)
            </button>
            <button class="quiz-tab-btn" data-tab="benefits">
              <span class="tab-icon">📊</span> Bảng Lợi Ích (Tra Cứu)
            </button>
            <button class="quiz-tab-btn" data-tab="speaking">
              <span class="tab-icon">🗣️</span> Từ Vựng Speaking (Tra Cứu)
            </button>
            <button class="quiz-tab-btn" data-tab="writing">
              <span class="tab-icon">✍️</span> 7 Dạng Thư & 4 Dạng Luận (Tra Cứu)
            </button>
          </div>

          <!-- Tab Panel 1: Practice Quiz -->
          <div class="quiz-tab-panel active" id="quiz-panel-practice">
            <!-- Category Filter Pills -->
            <div class="quiz-filter-bar" id="quiz-filter-bar">
              <button class="quiz-filter-pill active" data-cat="all">🌟 Tất cả</button>
              <button class="quiz-filter-pill" data-cat="benefit-matrix">📊 Bảng Lợi Ích</button>
              <button class="quiz-filter-pill" data-cat="speaking-vocab">🗣️ Từ Vựng Speaking</button>
              <button class="quiz-filter-pill" data-cat="writing-letter">✉️ 7 Dạng Thư Task 1</button>
              <button class="quiz-filter-pill" data-cat="writing-essay">📝 4 Dạng Luận Task 2</button>
            </div>

            <div class="quiz-container" id="quiz-container">
              <!-- Injected by loadNextQuizQuestion -->
            </div>

            <div class="quiz-footer-actions">
              <div class="quiz-footer-left">
                <button class="btn btn-secondary btn-small" id="btn-quiz-reset-deck" title="Làm mới tiến độ để làm lại từ đầu" style="background:#FFFFFF !important; color:#1E293B !important; border:1.5px solid #CBD5E1 !important; font-weight:700 !important;">
                  <i class="fa-solid fa-rotate-left" style="color:#2563EB !important; margin-right:4px;"></i> Làm lại từ đầu
                </button>
                <button class="btn btn-secondary btn-small" id="btn-quiz-next" style="background:#FFFFFF !important; color:#1E293B !important; border:1.5px solid #CBD5E1 !important; font-weight:700 !important;">
                  <i class="fa-solid fa-arrows-rotate" style="color:#059669 !important; margin-right:4px;"></i> Đổi câu hỏi khác
                </button>
              </div>
              <button class="btn btn-primary btn-small" id="btn-quiz-done" style="background:linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%) !important; color:#FFFFFF !important; font-weight:700 !important;">
                <i class="fa-solid fa-seedling"></i> Về Chậu Cây Cỏ May Mắn
              </button>
            </div>
          </div>

          <!-- Tab Panel 2: Benefits Matrix Reference -->
          <div class="quiz-tab-panel" id="quiz-panel-benefits">
            ${this.renderBenefitsTabHtml()}
          </div>

          <!-- Tab Panel 3: Speaking Vocab & Formulas Reference -->
          <div class="quiz-tab-panel" id="quiz-panel-speaking">
            ${this.renderSpeakingVocabTabHtml()}
          </div>

          <!-- Tab Panel 4: Writing Letters & Essays Identification Reference -->
          <div class="quiz-tab-panel" id="quiz-panel-writing">
            ${this.renderWritingGuideTabHtml()}
          </div>
        </div>
      `;

      // Close handlers
      modal.querySelector('#btn-close-quiz-modal').addEventListener('click', () => modal.classList.remove('active'));
      modal.querySelector('#btn-quiz-done').addEventListener('click', () => modal.classList.remove('active'));
      modal.querySelector('#btn-quiz-next').addEventListener('click', () => this.loadNextQuizQuestion());
      modal.querySelector('#btn-quiz-reset-deck').addEventListener('click', () => {
        this.state.seenQuizIds = [];
        if (typeof root.resetQuizSeenHistory === 'function') root.resetQuizSeenHistory();
        this.saveState();
        if (typeof showToast === 'function') {
          showToast('✨ Đã làm mới danh sách câu hỏi ôn thi (0 câu đã xem)!');
        }
        this.loadNextQuizQuestion();
      });
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });

      // Tab switching handlers
      const tabBtns = modal.querySelectorAll('.quiz-tab-btn');
      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.switchQuizTab(btn.dataset.tab);
        });
      });

      // Filter pills handlers
      const filterPills = modal.querySelectorAll('.quiz-filter-pill');
      filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
          this.setQuizCategory(pill.dataset.cat);
        });
      });

      // Bind in-panel shortcut buttons that jump to practice with specific category
      modal.addEventListener('click', (e) => {
        const jumpBtn = e.target.closest('[data-jump-cat]');
        if (jumpBtn) {
          const targetCat = jumpBtn.dataset.jumpCat;
          this.switchQuizTab('practice');
          this.setQuizCategory(targetCat);
        }
      });

      return modal;
    },

    switchQuizTab(tabId) {
      this.quizState.activeTab = tabId;
      const modal = document.getElementById('garden-quiz-modal');
      if (!modal) return;

      const tabBtns = modal.querySelectorAll('.quiz-tab-btn');
      tabBtns.forEach(btn => {
        if (btn.dataset.tab === tabId) btn.classList.add('active');
        else btn.classList.remove('active');
      });

      const panels = modal.querySelectorAll('.quiz-tab-panel');
      panels.forEach(p => {
        if (p.id === `quiz-panel-${tabId}`) p.classList.add('active');
        else p.classList.remove('active');
      });

      // If switching to practice and no question loaded, load one
      if (tabId === 'practice' && !this.quizState.currentQuestion) {
        this.loadNextQuizQuestion();
      }
    },

    setQuizCategory(cat) {
      this.quizState.selectedCategory = cat || 'all';
      const modal = document.getElementById('garden-quiz-modal');
      if (!modal) return;

      const filterPills = modal.querySelectorAll('.quiz-filter-pill');
      filterPills.forEach(p => {
        if (p.dataset.cat === this.quizState.selectedCategory) p.classList.add('active');
        else p.classList.remove('active');
      });

      this.loadNextQuizQuestion();
    },

    renderBenefitsTabHtml() {
      const groups = root.VSTEP_OFFICIAL_BENEFITS || [];
      return `
        <div class="vstep-guide-wrap">
          <div class="vstep-guide-hero">
            <div class="hero-text">
              <h4>📊 BẢNG LỢI ÍCH CHUẨN CỦA CÔ NGUYỆT (64 CỤM TỪ)</h4>
              <p>Trích xuất từ giáo trình độc quyền <a href="https://englishwithmsnguyet-dev.github.io/vstepspeakingpart1/" target="_blank" style="color:#0284C7; font-weight:700; text-decoration:underline;">vstepspeakingpart1</a>. Phân loại thành 4 nhóm cụm từ vàng giúp trả lời trôi chảy mọi câu hỏi Speaking Part 1 & Part 2.</p>
            </div>
            <button class="btn btn-primary btn-small" data-jump-cat="benefit-matrix">
              <i class="fa-solid fa-play"></i> Luyện Câu Hỏi Bảng Lợi Ích (+10💧)
            </button>
          </div>

          <div class="benefits-official-grid">
            ${groups.map(g => `
              <div class="benefit-official-card" style="border-top: 4px solid ${g.color};">
                <div class="benefit-card-header">
                  <span class="benefit-icon">${g.icon}</span>
                  <div>
                    <h5>${g.title}</h5>
                    <p class="benefit-core">${g.desc}</p>
                    <div class="formula-tip-badge">💡 ${g.formulaTip}</div>
                  </div>
                </div>

                <div class="benefit-items-pill-grid">
                  ${g.items.map(it => `
                    <div class="official-benefit-pill" style="border-left: 3px solid ${g.color};">
                      <strong class="ob-en">${it.en}</strong>
                      <span class="ob-vi">${it.vi}</span>
                    </div>
                  `).join('')}
                </div>

                <div class="benefit-sample-box">
                  <div class="section-label"><i class="fa-solid fa-microphone"></i> Câu trả lời mẫu chuẩn Cô Nguyệt:</div>
                  <div class="example-quote speaking-quote">"${g.sampleSentence}"</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    },

    renderSpeakingVocabTabHtml() {
      const guide = root.VSTEP_SPEAKING_VOCAB_GUIDE || {};
      const p1 = guide.part1 || { formulaSteps: [], collocations: [] };
      const p2 = guide.part2 || { rules: [], formula: [] };
      const p3 = guide.part3 || { formula: [], categories: [] };

      return `
        <div class="vstep-guide-wrap">
          <div class="vstep-guide-hero">
            <div class="hero-text">
              <h4>🗣️ HỆ THỐNG CÔNG THỨC & TỪ VỰNG SPEAKING VSTEP CỦA CÔ NGUYỆT</h4>
              <p>Trích xuất chuẩn từ 3 dự án thực tế của Cô Nguyệt: 
                <a href="https://englishwithmsnguyet-dev.github.io/vstepspeakingpart1/" target="_blank" style="color:#0284C7; font-weight:700; text-decoration:underline;">Speaking Part 1</a> • 
                <a href="https://englishwithmsnguyet-dev.github.io/speaking-part2-b2level/" target="_blank" style="color:#0284C7; font-weight:700; text-decoration:underline;">Speaking Part 2</a> • 
                <a href="https://englishwithmsnguyet-dev.github.io/speaking-part3-b2level/" target="_blank" style="color:#0284C7; font-weight:700; text-decoration:underline;">Speaking Part 3</a>
              </p>
            </div>
            <button class="btn btn-primary btn-small" data-jump-cat="speaking-vocab">
              <i class="fa-solid fa-play"></i> Luyện Câu Hỏi Speaking (+10💧)
            </button>
          </div>

          <!-- Part 1: Social Interaction -->
          <div class="guide-box">
            <div class="guide-box-header">
              <span class="box-badge">Part 1</span>
              <h5>${p1.title}</h5>
            </div>
            <p class="guide-desc">${p1.overview}</p>

            <div class="formula-steps">
              ${(p1.formulaSteps || []).map((fs, idx) => `
                <div class="formula-step-card">
                  <h6><span class="step-num">${idx + 1}</span> ${fs.step}</h6>
                  <ul class="step-phrases">
                    ${fs.phrases.map(p => `<li>${p}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>

            <div class="section-sub-header mt-3"><i class="fa-solid fa-star" style="color:#f59e0b;"></i> Thành ngữ & Collocations ghi điểm tự nhiên:</div>
            <div class="colloc-tags p-3">
              ${(p1.collocations || []).map(c => `
                <span class="colloc-pill" title="${c.vi}">
                  <b>${c.en}</b> <small>(${c.vi})</small>
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Part 2: Solution Discussion (Chuẩn Cô Nguyệt) -->
          <div class="guide-box">
            <div class="guide-box-header" style="background:#EFF6FF; color:#1D4ED8;">
              <span class="box-badge" style="background:#2563EB; color:#fff;">Part 2</span>
              <h5>${p2.title}</h5>
            </div>
            <p class="guide-desc">${p2.overview}</p>

            ${p2.rules && p2.rules.length ? `
              <div class="section-sub-header mt-2"><i class="fa-solid fa-gem" style="color:#D97706;"></i> 4 Quy Tắc Vàng Phòng Thi Cần Nhớ (Cô Nguyệt):</div>
              <div class="rules-grid mb-3" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px;">
                ${p2.rules.map(r => `
                  <div style="background:#F0F9FF; border:1px solid #BAE6FD; border-radius:12px; padding:10px 12px;">
                    <b style="color:#0369A1; font-size:13px;"><i class="fa-solid fa-check-circle" style="color:#0284C7;"></i> ${r.name}</b>
                    <p style="margin:4px 0 0; font-size:12px; color:#334155; line-height:1.4;">${r.desc}</p>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <div class="section-sub-header"><i class="fa-solid fa-diagram-project" style="color:#2563EB;"></i> Dàn Ý & Mẫu Câu Dẫn Dắt 3 Bước Chuẩn B2:</div>
            <div class="formula-steps">
              ${(p2.formula || []).map((f, idx) => `
                <div class="formula-step-card">
                  <h6><span class="step-num">${idx + 1}</span> ${f.step}</h6>
                  <ul class="step-phrases">
                    ${f.phrases.map(p => `<li>${p}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Part 3: Topic Development (Chuẩn Cô Nguyệt) -->
          <div class="guide-box">
            <div class="guide-box-header" style="background:#FDF2F8; color:#BE185D;">
              <span class="box-badge" style="background:#DB2777; color:#fff;">Part 3</span>
              <h5>${p3.title}</h5>
            </div>
            <p class="guide-desc">${p3.overview}</p>

            <div class="section-sub-header"><i class="fa-solid fa-sitemap" style="color:#DB2777;"></i> Dàn Ý & Mẫu Câu Triển Khai Sơ Đồ Tư Duy 3 Bước:</div>
            <div class="formula-steps">
              ${(p3.formula || []).map((f, idx) => `
                <div class="formula-step-card">
                  <h6><span class="step-num">${idx + 1}</span> ${f.step}</h6>
                  <ul class="step-phrases">
                    ${f.phrases.map(p => `<li>${p}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>

            ${p3.categories && p3.categories.length ? `
              <div class="section-sub-header mt-3"><i class="fa-solid fa-layer-group" style="color:#BE185D;"></i> 6 Nhóm Dạng Đề Speaking Part 3 Thường Gặp (Cô Nguyệt):</div>
              <div class="rules-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px;">
                ${p3.categories.map(c => `
                  <div style="background:#FFF1F2; border:1px solid #FECDD3; border-radius:12px; padding:10px 12px;">
                    <b style="color:#9F1239; font-size:13px;">${c.id}. ${c.name}</b>
                    <p style="margin:4px 0 0; font-size:12px; color:#4C0519; line-height:1.4;">${c.desc}</p>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      `;
    },

    renderWritingGuideTabHtml() {
      const letters = root.VSTEP_OFFICIAL_LETTER_TYPES || [];
      const essays = root.VSTEP_OFFICIAL_ESSAY_TYPES || [];

      return `
        <div class="vstep-guide-wrap">
          <div class="vstep-guide-hero">
            <div class="hero-text">
              <h4>✍️ 7 DẠNG THƯ & 4 DẠNG LUẬN VSTEP CHUẨN CÔ NGUYỆT</h4>
              <p>Trích xuất đầy đủ từ hệ thống học liệu <a href="https://englishwithmsnguyet-dev.github.io/vstepwritingtask1b1/" target="_blank" style="color:#0284C7; font-weight:700; text-decoration:underline;">vstepwritingtask1b1</a> và <a href="https://englishwithmsnguyet-dev.github.io/vstepwritingtask2b1/" target="_blank" style="color:#0284C7; font-weight:700; text-decoration:underline;">vstepwritingtask2b1</a>.</p>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="btn btn-secondary btn-small" data-jump-cat="writing-letter">
                <i class="fa-solid fa-envelope"></i> Luyện 7 Dạng Thư (+10💧)
              </button>
              <button class="btn btn-primary btn-small" data-jump-cat="writing-essay">
                <i class="fa-solid fa-file-pen"></i> Luyện 4 Dạng Luận (+10💧)
              </button>
            </div>
          </div>

          <!-- Section 1: Task 1 - 7 Letter Types -->
          <div class="writing-section-card">
            <div class="writing-section-title">
              <span class="section-tag task1-tag">Task 1 (120 từ)</span>
              <h5>🎯 CHINH PHỤC 7 DẠNG THƯ VSTEP TASK 01 CỦA CÔ NGUYỆT</h5>
            </div>
            <p class="guide-desc">Học thuộc dấu hiệu nhận biết và công thức cấu trúc cho từng dạng thư để viết nhanh, chuẩn xác và không bị trừ điểm văn phong.</p>

            <div class="official-letters-grid">
              ${letters.map((lt, idx) => `
                <div class="official-letter-card" style="border-top: 4px solid ${lt.color};">
                  <div class="olc-header">
                    <div style="display:flex; align-items:center; gap:8px;">
                      <span class="olc-idx">${idx + 1}</span>
                      <div>
                        <h6>${lt.titleEn}</h6>
                        <span class="olc-vi">${lt.titleVi}</span>
                      </div>
                    </div>
                    <span class="olc-style-badge">${lt.style}</span>
                  </div>

                  <p class="olc-purpose"><b>Mục đích:</b> ${lt.purpose}</p>

                  <div class="olc-keywords">
                    <i class="fa-solid fa-key" style="color:${lt.color};"></i>
                    <span><b>Từ khóa đề bài:</b> <code>${lt.keywords}</code></span>
                  </div>

                  <div class="olc-structures">
                    <div class="struct-title">Mở bài & Cấu trúc chính:</div>
                    <div class="struct-phrase">↳ <i>${lt.outline.opening}</i></div>
                    <ul class="struct-list">
                      ${lt.outline.structures.map(s => `<li>↳ ${s}</li>`).join('')}
                    </ul>
                  </div>

                  <div class="olc-footer">
                    <span class="olc-salutation"><b>Chào:</b> ${lt.outline.salutation}</span>
                    <span class="olc-signoff"><b>Kết:</b> ${lt.outline.signOff}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Section 2: Task 2 - 4 Essay Types -->
          <div class="writing-section-card mt-3">
            <div class="writing-section-title">
              <span class="section-tag task2-tag">Task 2 (250 từ)</span>
              <h5>🎯 4 DẠNG BÀI LUẬN VSTEP TASK 02 CHUẨN CỦA CÔ NGUYỆT</h5>
            </div>
            <p class="guide-desc">Nhận diện đúng câu lệnh đề bài để xây dựng câu Thesis Statement và phân bổ thân bài hoàn hảo.</p>

            <div class="official-essays-grid">
              ${essays.map((et, idx) => `
                <div class="official-essay-card" style="border-left: 5px solid ${et.color};">
                  <div class="oec-header">
                    <div style="display:flex; align-items:center; gap:8px;">
                      <span class="oec-badge" style="background:${et.color};">Type ${idx + 1}</span>
                      <h6>${et.titleEn}</h6>
                    </div>
                    <span class="oec-vi">${et.titleVi}</span>
                  </div>

                  <div class="oec-clues">
                    <div class="clue-label"><i class="fa-solid fa-magnifying-glass"></i> Dấu hiệu nhận biết câu lệnh:</div>
                    <ul class="clue-list">
                      ${et.clues.map(c => `<li><b>${c}</b></li>`).join('')}
                    </ul>
                  </div>

                  <div class="et-trap">
                    <i class="fa-solid fa-triangle-exclamation" style="color:#DC2626;"></i>
                    <span><b>LƯU Ý BẪY THI CỦA CÔ NGUYỆT:</b> ${et.trapWarning}</span>
                  </div>

                  <div class="oec-structure">
                    <div class="struct-row"><b>Mở bài (Intro):</b> ${et.structure.intro}</div>
                    <div class="struct-row"><b>Thân bài 1 (Body 1):</b> ${et.structure.body1}</div>
                    <div class="struct-row"><b>Thân bài 2 (Body 2):</b> ${et.structure.body2}</div>
                    <div class="struct-row"><b>Kết bài (Conclusion):</b> ${et.structure.conclusion}</div>
                    <div class="struct-row thesis-highlight mt-2">
                      <i class="fa-solid fa-feather"></i> <b>Thesis Statement Mẫu:</b> <i>"${et.thesisSample}"</i>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    loadNextQuizQuestion() {
      const container = document.getElementById('quiz-container');
      if (!container) return;

      const allQuestions = root.EXAM_QUIZ_QUESTIONS || [];
      if (allQuestions.length === 0) return;

      const getNext = root.getNextNonRepeatingQuizQuestion;
      let drawResult = null;
      if (typeof getNext === 'function') {
        drawResult = getNext(this.quizState.selectedCategory, this.state.seenQuizIds);
      }

      let q = null;
      let progressText = '';
      if (drawResult && drawResult.question) {
        q = drawResult.question;
        this.quizState.currentQuestion = q;
        this.state.seenQuizIds = drawResult.updatedSeenIds;
        this.saveState();
        progressText = `Câu ${drawResult.indexInPool} / ${drawResult.totalInPool}`;

        if (drawResult.isNewCycle && typeof showToast === 'function') {
          showToast('🎉 Bạn đã hoàn thành 100% câu hỏi trong danh mục này! Vòng ôn tập mới đã khởi động 🌟');
        }
      } else {
        const filterCat = this.quizState.selectedCategory;
        let pool = allQuestions;
        if (filterCat && filterCat !== 'all') {
          pool = allQuestions.filter(item => item.category === filterCat);
          if (pool.length === 0) pool = allQuestions;
        }
        this.currentQuizIndex = Math.floor(Math.random() * pool.length);
        q = pool[this.currentQuizIndex];
        this.quizState.currentQuestion = q;
        progressText = `Câu 1 / ${pool.length}`;
      }

      const catBadge = q.categoryName ? `<span class="quiz-badge quiz-cat-tag"><i class="fa-solid fa-layer-group"></i> ${q.categoryName}</span>` : '';
      const skillTag = q.skill ? `<span class="quiz-badge quiz-skill-tag skill-${q.skill.toLowerCase()}"><i class="fa-solid fa-graduation-cap"></i> ${q.skill}</span>` : '';
      const levelTag = q.level ? `<span class="quiz-badge quiz-level-tag">Band: ${q.level}</span>` : '';
      const topicTag = q.topic ? `<span class="quiz-badge quiz-topic-tag"><i class="fa-solid fa-bookmark"></i> ${q.topic}</span>` : '';
      const progressBadge = `<span class="quiz-badge quiz-progress-tag" title="Tiến độ làm bài trong danh mục này"><i class="fa-solid fa-list-check"></i> ${progressText}</span>`;
      const noRepeatBadge = `<span class="quiz-badge quiz-norepeat-tag" title="Hệ thống thuật toán đảm bảo không bao giờ trùng lặp câu hỏi"><i class="fa-solid fa-shield-halved"></i> Không trùng lặp ✨</span>`;

      container.innerHTML = `
        <div class="quiz-question-box">
          <div class="quiz-meta-row">
            ${catBadge}
            ${skillTag}
            ${levelTag}
            ${topicTag}
            ${progressBadge}
            ${noRepeatBadge}
          </div>
          <div class="quiz-prompt">${q.question}</div>
          <div class="quiz-options-grid">
            ${q.options.map((opt, idx) => `
              <button class="quiz-option-btn" data-idx="${idx}">
                <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="option-text">${opt}</span>
              </button>
            `).join('')}
          </div>
          <div class="quiz-feedback-box hidden" id="quiz-feedback-box"></div>
        </div>
      `;

      const btns = container.querySelectorAll('.quiz-option-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          const selected = parseInt(btn.dataset.idx, 10);
          this.handleQuizAnswer(q, selected, btns);
        });
      });
    },

    handleQuizAnswer(q, selectedIdx, btns) {
      btns.forEach(b => b.disabled = true);
      const feedback = document.getElementById('quiz-feedback-box');
      if (!feedback) return;

      const isCorrect = selectedIdx === q.answer;
      btns.forEach((b, idx) => {
        if (idx === q.answer) b.classList.add('is-correct');
        else if (idx === selectedIdx && !isCorrect) b.classList.add('is-wrong');
      });

      feedback.classList.remove('hidden');

      const nextBtnHtml = `
        <div class="feedback-action-row" style="margin-top: 14px; display: flex; justify-content: flex-end;">
          <button class="btn btn-primary btn-small pulse-glow" id="btn-feedback-next-q" style="padding: 9px 18px; font-weight: 800; border-radius: 12px; font-size: 13px;">
            <i class="fa-solid fa-arrow-right"></i> Câu tiếp theo (+10💧)
          </button>
        </div>
      `;

      if (isCorrect) {
        this.addWaterDrops(10, 'Ôn thi VSTEP xuất sắc', false);
        this.spawnParticles('✨', 6);
        this.spawnParticles('💧', 6);
        feedback.className = 'quiz-feedback-box feedback-correct';
        feedback.innerHTML = `
          <div class="feedback-title">🎉 CHÍNH XÁC! (+10💧 Nước Nỗ Lực)</div>
          <p class="feedback-explain">${q.explain}</p>
          ${nextBtnHtml}
        `;
      } else {
        this.addWaterDrops(2, 'Tinh thần học tập tích cực', false);
        feedback.className = 'quiz-feedback-box feedback-wrong';
        feedback.innerHTML = `
          <div class="feedback-title">💡 GẦN ĐÚNG RỒI! (+2💧 Khích lệ nỗ lực)</div>
          <p class="feedback-explain">${q.explain}</p>
          ${nextBtnHtml}
        `;
      }

      const btnNextInFeedback = feedback.querySelector('#btn-feedback-next-q');
      if (btnNextInFeedback) {
        btnNextInFeedback.addEventListener('click', () => {
          this.loadNextQuizQuestion();
        });
      }
    },

        // ==========================================
    // 7. EARN WATER GUIDE MODAL
    // ==========================================
    openEarnWaterModal() {
      let modal = document.getElementById('garden-earn-water-modal');
      if (!modal) {
        modal = this.createEarnWaterModalDom();
        document.body.appendChild(modal);
      }
      const countEl = modal.querySelector('#earn-modal-water-count');
      if (countEl) countEl.textContent = this.state.waterDrops;
      modal.classList.add('active');
    },

    createEarnWaterModalDom() {
      const isClassesSite = !!document.getElementById('class-list') || !!document.querySelector('.random-picker-container');

      const methods3and4Html = isClassesSite ? `
            <!-- 3. Random Picker -->
            <div class="earn-method-item" id="earn-action-picker" role="button" tabindex="0" title="Bấm để mở Gọi Tên Trả Bài & Vòng Quay">
              <div class="earn-icon-wrap" style="background:#FFFBEB; color:#D97706;">🎲</div>
              <div class="earn-info">
                <h4>GỌI TÊN TRẢ BÀI & VÒNG QUAY LỚP HỌC</h4>
                <p>Học viên được gọi tên và trả lời tốt / xuất sắc tích lũy <b>+5💧 ~ +10💧</b> Nước Nỗ Lực.</p>
              </div>
              <span class="earn-action-badge"><i class="fa-solid fa-arrow-right"></i> Đến quay</span>
            </div>

            <!-- 4. Class Attendance & Lesson Logging -->
            <div class="earn-method-item" id="earn-action-attendance" role="button" tabindex="0" title="Bấm để chọn lớp điểm danh & ghi nhật ký">
              <div class="earn-icon-wrap" style="background:#FDF2F8; color:#DB2777;">📝</div>
              <div class="earn-info">
                <h4>ĐIỂM DANH & LƯU NHẬT KÝ LỚP HỌC</h4>
                <p>Cô giáo ghi nhận sĩ số điểm danh và lưu bài học nhận ngay <b>+10💧</b> Nước Nỗ Lực.</p>
              </div>
              <span class="earn-action-badge"><i class="fa-solid fa-arrow-right"></i> Vào lớp</span>
            </div>
      ` : `
            <!-- 3. Listening Practice Completion -->
            <div class="earn-method-item" id="earn-action-practice" role="button" tabindex="0" title="Bấm để chuyển tới làm bài luyện nghe VSTEP">
              <div class="earn-icon-wrap" style="background:#EFF6FF; color:#2563EB;">🎧</div>
              <div class="earn-info">
                <h4>LUYỆN TẬP BÀI THI NGHE VSTEP</h4>
                <p>Hoàn thành và nộp bài luyện nghe VSTEP nhận ngay <b>+10💧 ~ +20💧</b> Nước Nỗ Lực.</p>
              </div>
              <span class="earn-action-badge"><i class="fa-solid fa-headphones"></i> Luyện ngay</span>
            </div>

            <!-- 4. High Score & Accuracy Reward -->
            <div class="earn-method-item" id="earn-action-highscore" role="button" tabindex="0" title="Bấm để xem danh sách bài kiểm tra và làm bài">
              <div class="earn-icon-wrap" style="background:#FEF3C7; color:#D97706;">⭐</div>
              <div class="earn-info">
                <h4>LÀM BÀI ĐẠT ĐIỂM SỐ TỐT</h4>
                <p>Mỗi câu trả lời chính xác được tích lũy <b>+2💧 Nước Nỗ Lực</b> giúp cỏ 4 lá mau lớn!</p>
              </div>
              <span class="earn-action-badge"><i class="fa-solid fa-star"></i> Xem bài test</span>
            </div>
      `;

      const modal = document.createElement('div');
      modal.className = 'modal-overlay garden-modal';
      modal.id = 'garden-earn-water-modal';
      modal.innerHTML = `
        <div class="modal-card garden-earn-card">
          <div class="modal-header">
            <h3>💧 TÍCH LUỸ NƯỚC TƯỚI</h3>
            <button class="modal-close-btn" id="btn-close-earn-modal">&times;</button>
          </div>
          
          <div class="earn-water-balance-box">
            <span class="balance-label">Số giọt nước hiện có của bạn:</span>
            <div class="balance-value"><span class="pulse-drop">💧</span> <b id="earn-modal-water-count">30</b> Giọt Nước Nỗ Lực</div>
            <p class="balance-sub">"Mỗi giọt nước tưới cây là một nỗ lực học tập thực sự. Cỏ 4 lá lớn lên nhờ sự chăm chỉ mỗi ngày!"</p>
          </div>

          <div class="earn-methods-list">
            <!-- 1. Daily Login -->
            <div class="earn-method-item" id="earn-action-login" role="button" tabindex="0" title="Bấm để nhận thưởng điểm danh đăng nhập hôm nay">
              <div class="earn-icon-wrap" style="background:#ECFDF5; color:#059669;">☀️</div>
              <div class="earn-info">
                <h4>ĐIỂM DANH ĐĂNG NHẬP HÀNG NGÀY</h4>
                <p>Mở website mỗi ngày nhận <b>+15💧 ~ +25💧</b> (duy trì chuỗi ngày chuyên cần để nhận thêm thưởng streak!)</p>
              </div>
              <span class="earn-action-badge"><i class="fa-solid fa-calendar-check"></i> Điểm danh</span>
            </div>

            <!-- 2. VSTEP Quiz -->
            <div class="earn-method-item" id="earn-action-quiz" role="button" tabindex="0" title="Bấm để mở bộ đề ôn thi VSTEP nhận +10💧 Nước Nỗ Lực">
              <div class="earn-icon-wrap" style="background:#EFF6FF; color:#2563EB;">🎯</div>
              <div class="earn-info">
                <h4>ĐỐ VUI ÔN THI VSTEP (4 KỸ NĂNG)</h4>
                <p>Luyện tập các câu hỏi chuẩn VSTEP B1-B2-C1 nhận ngay <b>+10💧</b> cho mỗi câu trả lời đúng.</p>
              </div>
              <span class="earn-action-badge action-primary"><i class="fa-solid fa-play"></i> Luyện ngay</span>
            </div>

            ${methods3and4Html}
          </div>

          <div class="earn-modal-actions">
            <button class="btn btn-primary w-100" id="btn-earn-start-quiz">
              <i class="fa-solid fa-play"></i> Luyện Đề VSTEP Ngay (+10💧)
            </button>
          </div>
        </div>
      `;

      modal.querySelector('#btn-close-earn-modal').addEventListener('click', () => modal.classList.remove('active'));
      modal.querySelector('#btn-earn-start-quiz').addEventListener('click', () => {
        modal.classList.remove('active');
        this.openQuizModal();
      });

      // Item 1: Click to Claim / Check Daily Login
      modal.querySelector('#earn-action-login').addEventListener('click', () => {
        this.claimOrCheckDailyLogin(modal);
      });

      // Item 2: Click to Open Quiz
      modal.querySelector('#earn-action-quiz').addEventListener('click', () => {
        modal.classList.remove('active');
        this.openQuizModal();
      });

      // Item 3 (Classes): Click to Open Random Picker on Home View
      const itemPicker = modal.querySelector('#earn-action-picker');
      if (itemPicker) {
        itemPicker.addEventListener('click', () => {
          modal.classList.remove('active');
          if (typeof showHomeView === 'function') showHomeView();
          setTimeout(() => {
            const picker = document.querySelector('.random-picker-container');
            if (picker) {
              picker.scrollIntoView({ behavior: 'smooth', block: 'center' });
              picker.classList.remove('pulse-glow');
              void picker.offsetWidth;
              picker.classList.add('pulse-glow');
              setTimeout(() => picker.classList.remove('pulse-glow'), 2000);
            }
          }, 150);
          if (typeof showToast === 'function') {
            showToast('🎲 Đã chuyển tới Gọi Tên Trả Bài! Hãy chọn lớp và quay số để học viên trả lời nhận +5💧 ~ +10💧 Nước Tưới!');
          }
        });
      }

      // Item 4 (Classes): Click to Navigate to Attendance / Class Logging
      const itemAttendance = modal.querySelector('#earn-action-attendance');
      if (itemAttendance) {
        itemAttendance.addEventListener('click', () => {
          modal.classList.remove('active');
          const sidebarList = document.getElementById('class-list');
          if (sidebarList) {
            sidebarList.classList.remove('pulse-glow');
            void sidebarList.offsetWidth;
            sidebarList.classList.add('pulse-glow');
            setTimeout(() => sidebarList.classList.remove('pulse-glow'), 2000);
          }
          if (typeof showToast === 'function') {
            showToast('📝 Hãy chọn một lớp học ở danh sách bên trái để điểm danh và lưu bài học (+10💧 Nước Tưới)!');
          }
        });
      }

      // Item 3 (Practice / Listening sites): Go to practice section
      const itemPractice = modal.querySelector('#earn-action-practice');
      if (itemPractice) {
        itemPractice.addEventListener('click', () => {
          modal.classList.remove('active');
          if (window.app && typeof window.app.switchView === 'function') {
            window.app.switchView('part1');
          } else {
            const target = document.querySelector('#active-day-content, .parts-grid, #view-dashboard, .dashboard-hero, .test-list, main');
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          if (typeof showToast === 'function') {
            showToast('🎧 Hãy hoàn thành bài nghe để nhận +10💧 ~ +20💧 Nước Nỗ Lực nhé!');
          }
        });
      }

      // Item 4 (Practice / Listening sites): View tests for high score
      const itemHighScore = modal.querySelector('#earn-action-highscore');
      if (itemHighScore) {
        itemHighScore.addEventListener('click', () => {
          modal.classList.remove('active');
          if (window.app && typeof window.app.switchView === 'function') {
            window.app.switchView('part1');
          } else {
            const target = document.querySelector('#active-day-content, .parts-grid, #view-dashboard, .dashboard-hero, .test-list, main');
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          if (typeof showToast === 'function') {
            showToast('⭐ Chúc bạn làm bài đạt điểm cao để gặt hái thật nhiều Nước Nỗ Lực!');
          }
        });
      }

      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });

      return modal;
    },

    claimOrCheckDailyLogin(modal) {
      const today = new Date().toISOString().substring(0, 10);
      const isAlreadyClaimedToday = (this.state.lastLoginDate === today && this.state.dailyLoginClaimed);
      const streak = this.state.loginStreak || 1;

      if (isAlreadyClaimedToday) {
        GardenAudio.playSun();
        this.spawnParticles('☀️', 6);
        const bonus = 15 + Math.min(10, (streak - 1) * 2);
        const msg = `☀️ Bạn đã điểm danh hôm nay rồi (+${bonus}💧, chuỗi ${streak} ngày chuyên cần)! Hãy quay lại vào ngày mai nhé 🍀`;
        if (typeof showToast === 'function') showToast(msg);
        this.updateSpeechBubble(msg);
      } else {
        // Claim today's bonus right away
        const bonus = 15 + Math.min(10, (streak - 1) * 2);
        this.state.lastLoginDate = today;
        this.state.dailyLoginClaimed = true;
        this.addWaterDrops(bonus, 'Điểm danh đăng nhập ngày mới');
        this.spawnParticles('🎉', 8);
        this.spawnParticles('💧', 8);
        const msg = `🎉 Điểm danh thành công! +${bonus}💧 Nước Nỗ Lực (Chuỗi ${streak} ngày chuyên cần) 🍀`;
        if (typeof showToast === 'function') showToast(msg);
        this.updateSpeechBubble(`Điểm danh đăng nhập thành công: +${bonus}💧 Nước Nỗ Lực! Chúc ${this.getStudentName()} một ngày học tập tuyệt vời và tràn đầy năng lượng! 🌟`);
        const countEl = modal ? modal.querySelector('#earn-modal-water-count') : null;
        if (countEl) countEl.textContent = this.state.waterDrops;
      }
    },

    // ==========================================
    // 8. LUCKY CLOVER BASKET & WISDOM ARCHIVE
    // ==========================================
    openBasketModal(activeTab = 0) {
      let modal = document.getElementById('garden-basket-modal');
      if (!modal) {
        modal = this.createBasketModalDom();
        document.body.appendChild(modal);
      }
      // Always update dynamic student name in subtext when opened
      const subtext = modal.querySelector('#basket-modal-subtext');
      if (subtext) {
        subtext.innerHTML = `Mỗi cành cỏ 4 lá may mắn được <b>${this.escapeHtml(this.getStudentName())}</b> vun trồng là một niềm tin gửi gắm tới mục tiêu kỳ thi VSTEP:`;
      }
      this.switchBasketTab(activeTab);
      modal.classList.add('active');
    },

    createBasketModalDom() {
      const modal = document.createElement('div');
      modal.className = 'modal-overlay garden-modal';
      modal.id = 'garden-basket-modal';
      modal.innerHTML = `
        <div class="modal-card garden-modal-card garden-basket-modal-card">
          <div class="modal-header">
            <h3>🧺 Bộ Sưu Tập Cỏ 4 Lá & Động Lực Ôn Thi</h3>
            <button class="modal-close-btn" id="btn-close-basket-modal">&times;</button>
          </div>
          
          <div class="basket-tabs-row">
            <button class="basket-tab-btn active" id="tab-btn-basket-stats">
              🍀 Vườn Ươm & Danh Hiệu
            </button>
            <button class="basket-tab-btn" id="tab-btn-basket-quotes">
              📜 Kho Tàng Động Lực Ôn Thi (<span id="basket-quotes-count">0</span>)
            </button>
          </div>

          <div class="basket-tab-content" id="basket-content-stats">
            <div class="garden-title-badge-wrap">
              <span class="gardener-title-badge" id="gardener-title-badge">🌱 Người Gieo Mầm Hạnh Phúc</span>
              <span class="total-harvested-badge">Tổng gặt hái: <b id="basket-total-count">0</b> cành 🍀</span>
            </div>
            <p class="modal-subtext" id="basket-modal-subtext">Mỗi cành cỏ 4 lá may mắn được <b>${this.escapeHtml(this.getStudentName())}</b> vun trồng là một niềm tin gửi gắm tới mục tiêu kỳ thi VSTEP:</p>
            <div class="garden-basket-grid" id="garden-basket-grid"></div>
          </div>

          <div class="basket-tab-content hidden" id="basket-content-quotes">
            <p class="modal-subtext" style="margin-bottom:12px;">Tổng hợp những thông điệp và lời chúc tiếp lửa ôn thi bạn đã gặt hái được qua các mùa hoa cỏ 4 lá:</p>
            <div class="harvested-quotes-archive" id="harvested-quotes-archive"></div>
          </div>
        </div>
      `;

      modal.querySelector('#btn-close-basket-modal').addEventListener('click', () => {
        modal.classList.remove('active');
      });
      modal.querySelector('#tab-btn-basket-stats').addEventListener('click', () => this.switchBasketTab(0));
      modal.querySelector('#tab-btn-basket-quotes').addEventListener('click', () => this.switchBasketTab(1));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });

      return modal;
    },

    switchBasketTab(tabIdx) {
      const btnStats = document.getElementById('tab-btn-basket-stats');
      const btnQuotes = document.getElementById('tab-btn-basket-quotes');
      const contentStats = document.getElementById('basket-content-stats');
      const contentQuotes = document.getElementById('basket-content-quotes');

      if (tabIdx === 1) {
        if (btnStats) btnStats.classList.remove('active');
        if (btnQuotes) btnQuotes.classList.add('active');
        if (contentStats) contentStats.classList.add('hidden');
        if (contentQuotes) contentQuotes.classList.remove('hidden');
        this.renderQuotesArchive();
      } else {
        if (btnStats) btnStats.classList.add('active');
        if (btnQuotes) btnQuotes.classList.remove('active');
        if (contentStats) contentStats.classList.remove('hidden');
        if (contentQuotes) contentQuotes.classList.add('hidden');
        this.renderBasketStats();
      }
    },

    renderBasketStats() {
      const grid = document.getElementById('garden-basket-grid');
      const totalCount = document.getElementById('basket-total-count');
      const titleBadge = document.getElementById('gardener-title-badge');
      const quotesCount = document.getElementById('basket-quotes-count');
      if (!grid) return;

      const total = this.state.harvestCount || 0;
      const quotes = this.state.harvestedQuotes || [];
      if (totalCount) totalCount.textContent = total;
      if (quotesCount) quotesCount.textContent = quotes.length;

      // 1. Calculate Titles & Milestone Progression
      let currentTitle = '🌱 Người Gieo Mầm Hạnh Phúc';
      let nextMilestoneText = '';
      let progressPercent = 0;

      if (total >= 20) {
        currentTitle = '👑 Nàng Tiên Cỏ May Mắn';
        nextMilestoneText = '🌟 Đã đạt cấp bậc cao nhất!';
        progressPercent = 100;
      } else if (total >= 10) {
        currentTitle = '🌟 Bàn Tay Gieo Phép Màu';
        nextMilestoneText = `Cần thêm ${20 - total} cành để đạt "👑 Nàng Tiên Cỏ May Mắn"`;
        progressPercent = Math.round(((total - 10) / 10) * 100);
      } else if (total >= 5) {
        currentTitle = '🍀 Vườn Ươm May Mắn';
        nextMilestoneText = `Cần thêm ${10 - total} cành để đạt "🌟 Bàn Tay Gieo Phép Màu"`;
        progressPercent = Math.round(((total - 5) / 5) * 100);
      } else if (total >= 1) {
        currentTitle = '🌱 Người Gieo Mầm Hạnh Phúc';
        nextMilestoneText = `Cần thêm ${5 - total} cành để đạt "🍀 Vườn Ươm May Mắn"`;
        progressPercent = Math.round((total / 5) * 100);
      } else {
        currentTitle = '🌱 Tập Sự Gieo Mầm';
        nextMilestoneText = 'Thu hoạch cành đầu tiên để đạt "🌱 Người Gieo Mầm Hạnh Phúc"';
        progressPercent = 15;
      }

      if (titleBadge) {
        titleBadge.textContent = currentTitle;
      }

      const studentName = this.getStudentName();

      // 2. Render Full-Width, Balanced, Harmonious Layout
      grid.innerHTML = `
        <!-- A. Hero Showcase Card -->
        <div class="basket-hero-card">
          <div class="basket-hero-icon-wrap">
            <picture class="basket-hero-pic">
              <source type="image/webp" srcset="assets/garden/clover_stage_4.webp">
              <img src="assets/garden/clover_stage_4.png" class="basket-hero-img" alt="Cỏ 4 Lá May Mắn VSTEP">
            </picture>
          </div>
          <div class="basket-hero-content">
            <div class="basket-hero-badge">🍀 BỘ SƯU TẬP VSTEP CHUẨN</div>
            <h4 class="basket-hero-title">Cỏ 4 Lá May Mắn VSTEP</h4>
            <p class="basket-hero-quote">
              "May mắn ngập tràn, niềm tin, hy vọng và tình yêu vĩnh cửu. Món quà diệu kỳ tiếp lửa cho <b>${this.escapeHtml(studentName)}</b> tự tin chinh phục chứng chỉ VSTEP B1-B2-C1!"
            </p>
            <div class="basket-hero-harvest-badge">
              <i class="fa-solid fa-clover" style="color:#059669;"></i> Đã thu hoạch thành công: <b>${total} cành may mắn</b>
            </div>
          </div>
        </div>

        <!-- B. Symmetrical 3-Column Stats Grid -->
        <div class="basket-stats-row">
          <div class="basket-mini-stat stat-clover">
            <div class="mini-stat-icon">🍀</div>
            <div class="mini-stat-info">
              <span class="mini-stat-num">${total} cành</span>
              <span class="mini-stat-label">Đã Thu Hoạch</span>
            </div>
          </div>
          <div class="basket-mini-stat stat-water">
            <div class="mini-stat-icon">💧</div>
            <div class="mini-stat-info">
              <span class="mini-stat-num">${this.state.waterDrops} giọt</span>
              <span class="mini-stat-label">Nước Nỗ Lực</span>
            </div>
          </div>
          <div class="basket-mini-stat stat-streak">
            <div class="mini-stat-icon">🔥</div>
            <div class="mini-stat-info">
              <span class="mini-stat-num">${this.state.loginStreak || 1} ngày</span>
              <span class="mini-stat-label">Ngày Chuyên Cần</span>
            </div>
          </div>
        </div>

        <!-- C. Milestone Progression Box -->
        <div class="basket-milestone-box">
          <div class="milestone-box-head">
            <span class="milestone-head-left"><i class="fa-solid fa-medal" style="color:#F59E0B;"></i> Lộ Trình Nâng Cấp Danh Hiệu</span>
            <span class="milestone-head-right">${nextMilestoneText}</span>
          </div>
          <div class="milestone-track">
            <div class="milestone-fill" style="width: ${progressPercent}%;"></div>
          </div>
          <div class="milestone-tiers">
            <div class="tier-step ${total >= 1 ? 'done' : 'next'}">
              <span class="tier-bullet">${total >= 1 ? '✓' : '1'}</span>
              <span class="tier-name">Gieo Mầm</span>
              <span class="tier-req">1 cành</span>
            </div>
            <div class="tier-step ${total >= 5 ? 'done' : (total >= 1 ? 'next' : '')}">
              <span class="tier-bullet">${total >= 5 ? '✓' : '5'}</span>
              <span class="tier-name">Vườn Ươm</span>
              <span class="tier-req">5 cành</span>
            </div>
            <div class="tier-step ${total >= 10 ? 'done' : (total >= 5 ? 'next' : '')}">
              <span class="tier-bullet">${total >= 10 ? '✓' : '10'}</span>
              <span class="tier-name">Phép Màu</span>
              <span class="tier-req">10 cành</span>
            </div>
            <div class="tier-step ${total >= 20 ? 'done' : (total >= 10 ? 'next' : '')}">
              <span class="tier-bullet">${total >= 20 ? '✓' : '20'}</span>
              <span class="tier-name">Nàng Tiên</span>
              <span class="tier-req">20 cành</span>
            </div>
          </div>
        </div>

        <!-- D. Direct Shortcut to Quotes Archive -->
        <button class="btn btn-primary w-100" id="btn-shortcut-view-quotes" style="padding:11px 16px; font-size:13px; font-weight:700; border-radius:12px; background:linear-gradient(135deg, #059669 0%, #047857 100%) !important; color:#FFFFFF !important; border:none !important; cursor:pointer; box-shadow:0 3px 10px rgba(5,150,105,0.25);">
          <i class="fa-solid fa-scroll"></i> Mở Kho Tàng Động Lực Ôn Thi (${quotes.length} Thông Điệp) &rarr;
        </button>
      `;

      const btnShortcut = grid.querySelector('#btn-shortcut-view-quotes');
      if (btnShortcut) {
        btnShortcut.addEventListener('click', () => {
          this.switchBasketTab(1);
        });
      }
    },

    renderQuotesArchive() {
      const archive = document.getElementById('harvested-quotes-archive');
      const quotesCount = document.getElementById('basket-quotes-count');
      if (!archive) return;

      const quotes = this.state.harvestedQuotes || [];
      if (quotesCount) quotesCount.textContent = quotes.length;

      if (quotes.length === 0) {
        archive.innerHTML = `
          <div class="empty-quotes-notice">
            <span style="font-size:2.4rem;">🌱</span>
            <p>Bạn chưa thu hoạch cành cỏ 4 lá nào!</p>
            <p style="font-size:0.85rem; color:#6B7280;">Hãy tích lũy nước nỗ lực và chăm sóc cây đạt 100% để đón nhận những thông điệp ôn thi đầu tiên nhé!</p>
          </div>
        `;
        return;
      }

      archive.innerHTML = quotes.map((item, idx) => {
        const q = item.quote || {};
        const dateStr = item.timestamp ? new Date(item.timestamp).toLocaleDateString('vi-VN') : '';
        const en = q.english || q.title || 'Believe you can and you\'re halfway there.';
        const vi = q.vietnamese || q.content || 'Hãy tin rằng bạn có thể làm được, và bạn đã đi được nửa chặng đường rồi.';
        return `
          <div class="archive-quote-card">
            <div class="archive-quote-head">
              <span class="archive-badge">🍀 Cành cỏ #${item.harvestNum || (quotes.length - idx)}</span>
              <span class="archive-tag">THÔNG ĐIỆP HÔM NAY</span>
              <span class="archive-date">${dateStr}</span>
            </div>
            <div class="archive-quote-en">"${en}"</div>
            <div class="archive-quote-vi"><em>"${vi}"</em></div>
            <div class="archive-signature">
              <span class="daily-quote-signature">From Miss Nguyet with LOVE <span class="heart-pulse">❤️</span></span>
            </div>
          </div>
        `;
      }).join('');
    },

    // ==========================================
    // VISUAL RENDERING
    // ==========================================
    render() {
      const flower = (root.FLOWER_CATALOG && root.FLOWER_CATALOG.clover) || {
        name: 'Cỏ 4 Lá May Mắn',
        icon: '🍀',
        bgGlow: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, transparent 70%)'
      };
      const p = Math.round(this.state.progress || 0);

      // 0. Update Garden Header with Student's Name
      this.updateTitleWithStudentName();

      // 1. Render Living Clover Pot Artwork
      const potWrapper = document.getElementById('garden-pot-wrapper');
      const targetStage = typeof root.getCloverStage === 'function'
        ? root.getCloverStage(p)
        : (p >= 100 ? 4 : p >= 60 ? 3 : p >= 25 ? 2 : 1);

      if (potWrapper && typeof root.renderFlowerPotSvg === 'function') {
        const prevStage = potWrapper.dataset.cloverStage;
        if (prevStage !== String(targetStage) || !potWrapper.querySelector('.clover-living-stage')) {
          potWrapper.innerHTML = root.renderFlowerPotSvg('clover', p);
          potWrapper.dataset.cloverStage = String(targetStage);
          if (prevStage && prevStage !== String(targetStage)) {
            potWrapper.classList.remove('stage-evolving');
            void potWrapper.offsetWidth;
            potWrapper.classList.add('stage-evolving');
            setTimeout(() => potWrapper.classList.remove('stage-evolving'), 800);
          }
        }
      }

      // 2. Info elements
      const nameEl = document.getElementById('garden-flower-name');
      const stageBadge = document.getElementById('garden-stage-badge');
      const fillBar = document.getElementById('garden-progress-fill');
      const textVal = document.getElementById('garden-progress-text');
      const moistureVal = document.getElementById('garden-moisture-val');
      const sunlightVal = document.getElementById('garden-sunlight-val');
      const harvestVal = document.getElementById('garden-harvest-val');
      const harvestBadge = document.getElementById('garden-harvest-count');
      const waterCountPill = document.getElementById('garden-water-count');
      const waterStatVal = document.getElementById('garden-water-drops-stat');

      if (nameEl) nameEl.innerHTML = `${flower.icon} ${flower.name}`;
      if (fillBar) fillBar.style.width = `${p}%`;
      if (textVal) textVal.textContent = `${p}%`;
      if (moistureVal) moistureVal.textContent = `${Math.round(this.state.moisture)}%`;
      if (sunlightVal) sunlightVal.textContent = `${Math.round(this.state.sunlight)}%`;
      if (harvestVal) harvestVal.textContent = `${this.state.harvestCount} cành`;
      if (harvestBadge) harvestBadge.textContent = this.state.harvestCount;
      if (waterCountPill) waterCountPill.textContent = this.state.waterDrops;
      if (waterStatVal) waterStatVal.textContent = `${this.state.waterDrops}💧`;

      // 3. Stage Badge Text & Styling
      if (stageBadge) {
        if (this.isPlantWilted()) {
          stageBadge.textContent = '🥀 Cỏ Đang Héo Rũ (Cần Nước!)';
          stageBadge.className = 'garden-stage-badge stage-wilted';
        } else if (p >= 100) {
          stageBadge.textContent = '🍀 Bừng Nở 4 Lá May Mắn!';
          stageBadge.className = 'garden-stage-badge stage-blooming';
        } else if (p >= 60) {
          stageBadge.textContent = '☘️ Cỏ 3 Lá Đang Kết Nụ';
          stageBadge.className = 'garden-stage-badge stage-budding';
        } else if (p >= 25) {
          stageBadge.textContent = '🌿 Cây Cỏ Non Xanh Mướt';
          stageBadge.className = 'garden-stage-badge stage-sprouting';
        } else {
          stageBadge.textContent = '🌱 Vừa Gieo Mầm Cỏ';
          stageBadge.className = 'garden-stage-badge stage-seeding';
        }
      }

      // Visual Wilted class on Pot Wrapper
      if (potWrapper) {
        if (this.isPlantWilted()) {
          potWrapper.classList.add('is-wilted');
        } else {
          potWrapper.classList.remove('is-wilted');
        }
      }

      // Dynamic Water Button (Revive vs Normal)
      const btnWater = document.getElementById('btn-water-flower');
      if (btnWater) {
        if (this.isPlantWilted()) {
          btnWater.innerHTML = '<span class="action-icon">💧</span> Cứu cây hồi sinh! <span class="action-cost-tag">10💧</span>';
          btnWater.classList.add('btn-revive-pulse');
          btnWater.title = 'Cây đang bị héo do 1 ngày chưa tưới nước! Mau tưới 10💧 để hồi sinh nhé!';
        } else {
          btnWater.innerHTML = '<span class="action-icon">💧</span> Tưới nước <span class="action-cost-tag">10💧</span>';
          btnWater.classList.remove('btn-revive-pulse');
          btnWater.title = 'Tưới nước cho hoa (-10💧, +25% lớn)';
        }
      }

      // 4. Action buttons: show/hide harvest vs care (prevents button collision)
      const careRow = document.getElementById('garden-care-row');
      const harvestRow = document.getElementById('garden-harvest-row');
      const btnHarvest = document.getElementById('btn-harvest-flower');

      if (p >= 100) {
        if (careRow) careRow.classList.add('hidden');
        if (harvestRow) harvestRow.classList.remove('hidden');
        if (btnHarvest) {
          btnHarvest.classList.remove('hidden');
          btnHarvest.classList.add('pulse-glow');
        }
      } else {
        if (careRow) careRow.classList.remove('hidden');
        if (harvestRow) harvestRow.classList.add('hidden');
        if (btnHarvest) {
          btnHarvest.classList.add('hidden');
          btnHarvest.classList.remove('pulse-glow');
        }
      }

      // 5. Weather Background Glow
      const glow = document.getElementById('garden-weather-glow');
      if (glow) {
        glow.style.background = p >= 100 ? flower.bgGlow : 'radial-gradient(circle, rgba(209, 250, 229, 0.45) 0%, transparent 70%)';
      }
    },

    updateSpeechBubble(msg) {
      const bubble = document.getElementById('garden-subtitle');
      if (bubble) {
        bubble.textContent = msg;
        bubble.classList.remove('pop-anim');
        void bubble.offsetWidth;
        bubble.classList.add('pop-anim');
      }
    },

    // Animations
    triggerWateringAnimation() {
      const can = document.getElementById('garden-watering-can');
      if (can) {
        can.classList.remove('active');
        void can.offsetWidth;
        can.classList.add('active');
        setTimeout(() => can.classList.remove('active'), 1800);
      }
      const pot = document.getElementById('garden-pot-wrapper');
      if (pot) {
        pot.classList.add('is-hydrated');
        setTimeout(() => pot.classList.remove('is-hydrated'), 1800);
      }
    },

    triggerSunAnimation() {
      const sun = document.getElementById('garden-sun-rays');
      if (sun) {
        sun.classList.remove('active');
        void sun.offsetWidth;
        sun.classList.add('active');
        setTimeout(() => sun.classList.remove('active'), 1800);
      }
      const pot = document.getElementById('garden-pot-wrapper');
      if (pot) {
        pot.classList.add('is-sunlit');
        setTimeout(() => pot.classList.remove('is-sunlit'), 1800);
      }
    },

    triggerBloomCelebration() {
      this.updateSpeechBubble(`WOOHOO! 🍀 Cỏ 4 Lá May Mắn đã nở rộ tuyệt đẹp! Chúc ${this.getStudentName()} luôn tự tin, may mắn và đạt kết quả thi thật cao! 🌟💚`);
      this.spawnParticles('🍀', 8);
      this.spawnParticles('✨', 8);
      this.spawnParticles('🌟', 6);
    },

    triggerHarvestCelebration(flower) {
      const symbols = ['🍀', '✨', '🌟', '💚', '🎉', '🌸'];
      for (let i = 0; i < 16; i++) {
        setTimeout(() => {
          this.spawnParticles(symbols[Math.floor(Math.random() * symbols.length)], 2);
        }, i * 50);
      }
      if (typeof confetti === 'function') {
        try {
          confetti({
            particleCount: 160,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#10B981', '#34D399', '#FBBF24', '#F472B6']
          });
        } catch (e) {}
      }
    },

    spawnParticles(symbol, count = 3) {
      const stage = document.getElementById('garden-floating-particles');
      if (!stage || typeof stage.appendChild !== 'function') return;

      for (let i = 0; i < count; i++) {
        const p = document.createElement('span');
        p.className = 'garden-float-particle';
        p.textContent = symbol;
        p.style.left = `${20 + Math.random() * 60}%`;
        p.style.bottom = `${30 + Math.random() * 40}%`;
        p.style.fontSize = `${16 + Math.random() * 14}px`;
        p.style.animationDuration = `${1.2 + Math.random() * 0.8}s`;
        stage.appendChild(p);
        setTimeout(() => {
          if (typeof p.remove === 'function') p.remove();
        }, 2000);
      }
    },

    startAmbientDecay() {
      setInterval(() => {
        if (this.state.progress < 100) {
          this.state.moisture = Math.max(20, this.state.moisture - 0.5);
          this.state.sunlight = Math.max(20, this.state.sunlight - 0.5);
          this.render();
          this.saveState();
        }
      }, 60000);
    },

    closeModal() {
      document.querySelectorAll('.garden-modal').forEach(m => m.classList.remove('active'));
    }
  };

  // Plug-and-play auto initialization on any website
  if (typeof window !== 'undefined') {
    const autoInit = () => {
      if (document.getElementById('garden-container') && !FlowerGarden._initialized) {
        FlowerGarden._initialized = true;
        FlowerGarden.init();
      }
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', autoInit);
    } else {
      setTimeout(autoInit, 50);
    }
  }

  root.FlowerGarden = FlowerGarden;

})(typeof window !== 'undefined' ? window : global);
