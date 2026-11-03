/**
 * LUCKY CLOVER GARDEN DEFINITIONS ("CHẬU CỎ 4 LÁ MAY MẮN CỦA CÔ NGUYỆT")
 * Dedicated exclusively to Cỏ 4 Lá May Mắn (Trifolium repens 🍀).
 * VSTEP Mastery Edition:
 * - Lifelike Painterly Botanical Illustrations (Stage 1..4)
 * - VSTEP 4-Skills Exam Motivation Cards (Listening, Reading, Writing, Speaking)
 * - VSTEP Standard Question Bank (B1 - B2 - C1 theo Khung Năng Lực Ngoại Ngữ 6 Bậc)
 */
(function(root) {
  'use strict';

  const FLOWER_CATALOG = {
    "clover": {
      "id": "clover",
      "name": "Cỏ 4 Lá May Mắn VSTEP",
      "scientific": "Trifolium repens",
      "icon": "🍀",
      "rarity": "Thần kỳ",
      "color": "#10B981",
      "accentColor": "#059669",
      "bgGlow": "radial-gradient(circle at 50% 42%, rgba(254, 240, 138, 0.55) 0%, rgba(52, 211, 153, 0.24) 45%, transparent 76%)",
      "meaning": "May mắn ngập tràn, niềm tin, hy vọng và tình yêu vĩnh cửu. Món quà diệu kỳ tiếp lửa cho học viên chinh phục chứng chỉ VSTEP B1-B2-C1 cùng cô Nguyệt!",
      "quote": "Bé cỏ 4 lá mang đến vạn sự may mắn và mọi điều ước thành hiện thực cho cô Nguyệt! 🍀🌟",
      "growthDifficulty": "Hiếm có"
    }
  };

  /**
   * KHO CÂU TRUYỀN CẢM HỨNG BILINGUAL DÀNH CHO "THÔNG ĐIỆP HÔM NAY"
   * Tiếng Anh + Bản dịch tiếng Việt (in nghiêng) + "From Miss Nguyet with LOVE ❤️"
   */
  const DAILY_INSPIRATION_QUOTES = [
    {
      id: "quote-1",
      english: "The expert in anything was once a beginner.",
      vietnamese: "Người chuyên gia trong bất kỳ lĩnh vực nào cũng từng là một người mới bắt đầu.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-2",
      english: "Small daily improvements over time lead to stunning results.",
      vietnamese: "Những tiến bộ nhỏ mỗi ngày theo thời gian sẽ tạo nên kết quả đáng kinh ngạc.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-3",
      english: "Believe you can and you're halfway there.",
      vietnamese: "Hãy tin rằng bạn có thể làm được, và bạn đã đi được nửa chặng đường rồi.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-4",
      english: "It does not matter how slowly you go as long as you do not stop.",
      vietnamese: "Không quan trọng bạn đi chậm thế nào, miễn là bạn không dừng lại.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-5",
      english: "Your only limit is you. Push yourself, because no one else is going to do it for you.",
      vietnamese: "Giới hạn duy nhất chính là bản thân bạn. Hãy nỗ lực hết mình, vì không ai có thể cố gắng thay bạn.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-6",
      english: "Every accomplishment starts with the decision to try.",
      vietnamese: "Mọi thành tựu vĩ đại đều bắt đầu từ quyết định dám thử sức.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-7",
      english: "Don't watch the clock; do what it does. Keep going.",
      vietnamese: "Đừng nhìn kim đồng hồ; hãy làm như nó đang làm: không ngừng tiến về phía trước.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-8",
      english: "Success is the sum of small efforts, repeated day in and day out.",
      vietnamese: "Thành công là tổng của những nỗ lực nhỏ bé, được lặp đi lặp lại ngày này qua ngày khác.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-9",
      english: "The future belongs to those who believe in the beauty of their dreams.",
      vietnamese: "Tương lai thuộc về những ai vững tin vào vẻ đẹp của ước mơ mình.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-10",
      english: "Mistakes are proof that you are trying and learning.",
      vietnamese: "Những sai sót chính là bằng chứng cho thấy bạn đang nỗ lực và không ngừng học hỏi.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-11",
      english: "You don't have to be great to start, but you have to start to be great.",
      vietnamese: "Bạn không cần phải xuất chúng để bắt đầu, nhưng bạn phải bắt đầu để trở nên xuất chúng.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-12",
      english: "Difficult roads often lead to beautiful destinations.",
      vietnamese: "Những con đường gian nan thường dẫn đến những đích đến tuyệt đẹp.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-13",
      english: "Learning English is a journey of patience, passion, and pride.",
      vietnamese: "Học tiếng Anh là một hành trình của sự kiên nhẫn, niềm đam mê và lòng tự hào.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-14",
      english: "Stay positive, work hard, and make it happen.",
      vietnamese: "Hãy luôn lạc quan, chăm chỉ và biến ước mơ thành hiện thực.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-15",
      english: "One word, one phrase, one sentence a day will change your future.",
      vietnamese: "Mỗi ngày một từ, một cụm từ, một câu nói sẽ thay đổi cả tương lai của bạn.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-16",
      english: "Courage is not the absence of fear, but the triumph over it.",
      vietnamese: "Dũng cảm không phải là không sợ hãi, mà là chiến thắng nỗi sợ ấy.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-17",
      english: "Study hard today so tomorrow you can live the life you dream of.",
      vietnamese: "Hãy miệt mài học tập hôm nay để ngày mai được sống cuộc đời mà bạn hằng mơ ước.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-18",
      english: "Trust the process. Your hard work will never betray you.",
      vietnamese: "Hãy tin tưởng vào hành trình. Sự chăm chỉ của bạn không bao giờ phản bội bạn.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-19",
      english: "Wake up with determination, go to bed with satisfaction.",
      vietnamese: "Thức dậy với lòng quyết tâm, và đi ngủ với niềm mãn nguyện.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-20",
      english: "A winner is a dreamer who never gives up.",
      vietnamese: "Người chiến thắng là một kẻ mộng mơ không bao giờ từ bỏ.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-21",
      english: "Hard work beats talent when talent doesn't work hard.",
      vietnamese: "Sự chăm chỉ sẽ đánh bại tài năng khi tài năng không chịu nỗ lực.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-22",
      english: "Your mind is a powerful thing. When you fill it with positive thoughts, your life will change.",
      vietnamese: "Tâm trí bạn là một sức mạnh phi thường. Khi lấp đầy nó bằng những suy nghĩ tích cực, cuộc sống của bạn sẽ đổi thay.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-23",
      english: "Great things never come from comfort zones.",
      vietnamese: "Những điều tuyệt vời không bao giờ đến từ vùng an toàn.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-24",
      english: "The best way to predict your future is to create it.",
      vietnamese: "Cách tốt nhất để dự đoán tương lai là tự tay kiến tạo nên nó.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-25",
      english: "Be proud of how far you have come, and have faith in how far you can go.",
      vietnamese: "Hãy tự hào về chặng đường bạn đã đi qua, và tin tưởng vào chặng đường bạn có thể vươn tới.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-26",
      english: "Success doesn't come to you, you go to it.",
      vietnamese: "Thành công không tự tìm đến bạn, chính bạn phải bước tới để chinh phục nó.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-27",
      english: "Consistency is what transforms average into excellence.",
      vietnamese: "Sự kiên trì đều đặn chính là điều biến sự bình thường thành phi thường.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-28",
      english: "You are capable of more than you know. Strive to be the best version of yourself.",
      vietnamese: "Bạn có thể làm được nhiều hơn những gì bạn nghĩ. Hãy nỗ lực để trở thành phiên bản tốt nhất của chính mình.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-29",
      english: "Keep your face always toward the sunshine, and shadows will fall behind you.",
      vietnamese: "Hãy luôn hướng về phía ánh mặt trời, và bóng tối sẽ ngả lại phía sau lưng bạn.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-30",
      english: "Doubt kills more dreams than failure ever will.",
      vietnamese: "Sự nghi ngờ giết chết nhiều ước mơ hơn bất kỳ thất bại nào từng làm.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-31",
      english: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
      vietnamese: "Học tập là tấm hộ chiếu cho tương lai, bởi ngày mai thuộc về những ai chuẩn bị cho nó ngay từ hôm nay.",
      signature: "From Miss Nguyet with LOVE ❤️"
    },
    {
      id: "quote-32",
      english: "Every morning is a fresh start to write a brilliant chapter in your learning journey.",
      vietnamese: "Mỗi buổi sáng là một khởi đầu mới mẻ để viết nên một chương rực rỡ trong hành trình học tập của bạn.",
      signature: "From Miss Nguyet with LOVE ❤️"
    }
  ];

  /**
   * Thuật toán lấy ngẫu nhiên KHÔNG TRÙNG LẶP (Non-repeating Shuffle Deck)
   * Sử dụng localStorage để ghi nhớ các câu đã xem, lặp lại chu kỳ mới khi đã xem hết 100%.
   */
  const DAILY_QUOTES_STORAGE_KEY = 'miss_nguyet_daily_quotes_seen_v1';

  function getRandomNonRepeatingQuote() {
    const quotes = DAILY_INSPIRATION_QUOTES;
    if (!quotes || quotes.length === 0) return null;

    let seenIds = [];
    try {
      const saved = localStorage.getItem(DAILY_QUOTES_STORAGE_KEY);
      if (saved) {
        seenIds = JSON.parse(saved);
        if (!Array.isArray(seenIds)) seenIds = [];
      }
    } catch (e) {
      seenIds = [];
    }

    // Lọc các câu chưa xem
    let available = quotes.filter(q => !seenIds.includes(q.id));

    // Nếu đã xem hết toàn bộ, làm mới danh sách nhưng giữ lại câu vừa xem gần nhất để không bị lặp liên tiếp
    if (available.length === 0) {
      const lastSeenId = seenIds[seenIds.length - 1];
      seenIds = lastSeenId ? [lastSeenId] : [];
      available = quotes.filter(q => !seenIds.includes(q.id));
      if (available.length === 0) available = quotes;
    }

    // Chọn ngẫu nhiên từ kho câu chưa xem
    const randomIndex = Math.floor(Math.random() * available.length);
    const chosen = available[randomIndex];

    // Ghi nhớ câu đã xem
    seenIds.push(chosen.id);
    try {
      localStorage.setItem(DAILY_QUOTES_STORAGE_KEY, JSON.stringify(seenIds));
    } catch (e) {}

    return chosen;
  }

  /**
   * Kho thông điệp truyền động lực ôn thi bám sát kỳ thi VSTEP (Listening, Reading, Writing, Speaking)
   */
  const EXAM_MOTIVATION_QUOTES = [
    {
      id: "vstep-q-1",
      tag: "VSTEP Reading (Đọc Hiểu)",
      title: "60 Phút Bền Bỉ — Không Bỏ Sót Từ Khóa",
      content: "4 bài đọc VSTEP với 40 câu hỏi là thử thách lớn về sức bền. Đừng hoảng sợ trước bài đọc dài hay nhiều từ mới chuyên ngành! Hãy áp dụng triệt để kỹ năng Skimming & Scanning, định vị từ khóa và đọc kỹ câu trước/sau câu hỏi.",
      advice: "Mẹo VSTEP: Phân bổ 15 phút cho mỗi bài đọc. Nếu gặp câu hỏi suy luận khó, hãy tạm đánh dấu và quay lại sau khi đã làm hết các câu hỏi chi tiết!"
    },
    {
      id: "vstep-q-2",
      tag: "VSTEP Listening (Kỹ Năng Nghe)",
      title: "Bình Tĩnh Bắt Nhịp — Lỡ Một Câu Không Buông Cả Bài",
      content: "3 phần thi Nghe VSTEP diễn ra liên tục trong khoảng 40 phút. Nếu vô tình lỡ mất một thông tin, hãy dũng cảm chọn đáp án khả dĩ nhất và hướng ngay sự tập trung sang câu kế tiếp. Tuyệt đối không để cảm giác tiếc nuối làm đứt mạch nghe!",
      advice: "Mẹo VSTEP: Luôn tận dụng thời gian nghỉ giữa các phần để đọc trước câu hỏi và gạch chân các từ khóa cốt lõi (keywords)."
    },
    {
      id: "vstep-q-3",
      tag: "VSTEP Writing (Viết Luận & Thư)",
      title: "Bố Cục Rõ Ràng — Cấu Trúc Đa Dạng Ghi Điểm",
      content: "Viết VSTEP gồm Task 1 (Thư 120 từ - 20 phút) và Task 2 (Luận 250 từ - 40 phút). Bố cục 4 đoạn mạch lạc, liên từ chuyển ý mượt mà (Furthermore, On the other hand, Consequently) và 1-2 câu phức hoặc đảo ngữ sẽ giúp em bứt phá điểm số B2/C1!",
      advice: "Mẹo VSTEP: Luôn dành 3 phút lập dàn ý trước khi viết và 3 phút cuối để kiểm tra lỗi chính tả, chia động từ và số ít/số nhiều."
    },
    {
      id: "vstep-q-4",
      tag: "VSTEP Speaking (Kỹ Năng Nói)",
      title: "Tự Tin Trước Microphone — Phát Âm Rõ Ràng",
      content: "Thi Nói VSTEP trên máy tính đòi hỏi em phải làm chủ thời gian: Part 1 tương tác tự nhiên, Part 2 cân nhắc 3 lựa chọn và giải thích rõ vì sao chọn/bỏ, Part 3 phát triển chủ đề mạch lạc. Đừng lo lắng về ngữ điệu bản xứ, quan trọng nhất là phát âm rõ ràng, nói đủ ý và không ngập ngừng quá lâu!",
      advice: "Mẹo VSTEP: Nếu cần 2 giây suy nghĩ, hãy dùng filler tự nhiên: 'That's a thought-provoking question, let me consider...' thay vì im lặng."
    },
    {
      id: "vstep-q-5",
      tag: "Chiến Lược Toàn Diện",
      title: "Mục Tiêu B1, B2 hay C1 Đều Bắt Đầu Từ Hôm Nay",
      content: "Mỗi đề VSTEP em giải quyết hôm nay, mỗi bài tập nghe và viết em hoàn thành đều là một viên gạch vững chắc đưa em đến gần hơn với tấm bằng chứng chỉ mong ước. Cô Nguyệt luôn đồng hành, chấm chữa bài và tiếp thêm dũng khí cho em!",
      advice: "Mẹo VSTEP: Giữ thói quen luyện đề đúng áp lực thời gian thực ít nhất 2 lần/tuần trước ngày thi."
    },
    {
      id: "vstep-q-6",
      tag: "Bản Lĩnh Vượt Khó",
      title: "Áp Lực Tạo Nên Kim Cương",
      content: "Áp lực thi cử là hòn đá mài giũa bản lĩnh. Kỳ thi này không chỉ là một bài kiểm tra kiến thức, mà là cơ hội tuyệt vời để em chứng minh mình đã dũng cảm, kiên cường và trưởng thành đến nhường nào!",
      advice: "Mẹo VSTEP: Khi thấy căng thẳng, hãy hít thở sâu 3 nhịp và nhắc nhở bản thân: 'Mình đã chuẩn bị rất kỹ, mình hoàn toàn làm được!'"
    },
    {
      id: "vstep-q-7",
      tag: "Tâm Lý Phòng Thi",
      title: "Giữ Vững Bình Tĩnh — Tự Tin Tỏa Sáng",
      content: "Khi bước vào phòng thi VSTEP, hãy mỉm cười và tự nhủ: 'Mình đã nỗ lực hết sức suốt thời gian qua'. Sự tự tin và bình tĩnh sẽ giúp não bộ hoạt động tối ưu nhất, giúp em nhớ lại toàn bộ từ vựng và cấu trúc mà cô Nguyệt đã hướng dẫn!",
      advice: "Mẹo VSTEP: Ngủ đủ giấc đêm trước ngày thi, ăn nhẹ và đến phòng thi sớm 30 phút để tâm lý thật thoải mái."
    },
    {
      id: "vstep-q-8",
      tag: "Từ Vựng Học Thuật",
      title: "Mở Rộng Vốn Từ — Chìa Khóa Nâng Band",
      content: "Từ vựng học thuật (Academic Word List) chính là xương sống của cả 4 kỹ năng VSTEP. Nắm chắc collocations và các cặp từ đồng nghĩa/trái nghĩa sẽ giúp em đọc hiểu nhanh gấp đôi và viết luận sâu sắc hơn rất nhiều!",
      advice: "Mẹo VSTEP: Học từ vựng theo cụm (collocations) và ngữ cảnh câu, tránh học từ đơn lẻ."
    }
  ];

  /**
   * BẢNG LỢI ÍCH CHUẨN CỦA CÔ NGUYỆT (VSTEP SPEAKING PART 1)
   * Nguồn trích xuất chuẩn: https://englishwithmsnguyet-dev.github.io/vstepspeakingpart1/
   * Phân loại thành 4 nhóm cụm từ trọng tâm giúp học viên phản xạ nhanh mọi câu hỏi.
   */
  const VSTEP_OFFICIAL_BENEFITS = [
    {
      id: "entertainment",
      title: "1. LỢI ÍCH GIẢI TRÍ (Entertainment & Relaxation)",
      color: "#d946ef",
      icon: "🎉",
      desc: "Dùng để giải thích lý do vì sao thích sở thích, xem phim, nghe nhạc, chơi thể thao, du lịch.",
      formulaTip: "Công thức: I like [hobby] because it helps me + [Cụm lợi ích giải trí].",
      items: [
        { en: "relax after a long day", vi: "thư giãn sau một ngày dài" },
        { en: "relax after a busy day", vi: "thư giãn sau một ngày bận rộn" },
        { en: "reduce stress", vi: "giảm căng thẳng" },
        { en: "clear my mind", vi: "thư giãn đầu óc" },
        { en: "enjoy my free time", vi: "tận hưởng thời gian rảnh" },
        { en: "pass the time", vi: "giết thời gian" },
        { en: "improve my mood", vi: "cải thiện tâm trạng" },
        { en: "have fun", vi: "vui vẻ" },
        { en: "escape from daily stress", vi: "thoát khỏi căng thẳng hằng ngày" },
        { en: "escape from study pressure", vi: "thoát khỏi áp lực học tập" },
        { en: "regain my energy", vi: "nạp lại năng lượng" },
        { en: "take a mental break", vi: "nghỉ ngơi về mặt tinh thần" },
        { en: "forget about my worries", vi: "quên đi những lo lắng" }
      ],
      sampleSentence: "I enjoy listening to acoustic music because it helps me reduce stress and clear my mind after a busy day."
    },
    {
      id: "education",
      title: "2. LỢI ÍCH GIÁO DỤC / PHÁT TRIỂN BẢN THÂN (Education & Growth)",
      color: "#3b82f6",
      icon: "🧠",
      desc: "Dùng cho các câu hỏi về học tập, đọc sách, công nghệ, ngoại ngữ, du lịch trải nghiệm.",
      formulaTip: "Công thức: It provides a great opportunity to + [Cụm lợi ích giáo dục].",
      items: [
        { en: "widen my knowledge", vi: "mở rộng kiến thức" },
        { en: "learn new things", vi: "học những điều mới" },
        { en: "develop useful skills", vi: "phát triển các kỹ năng hữu ích" },
        { en: "broaden my horizons", vi: "mở rộng tầm nhìn và hiểu biết" },
        { en: "enrich practical experience", vi: "làm giàu kinh nghiệm thực tiễn" },
        { en: "sharpen critical thinking", vi: "trau dồi tư duy phản biện" },
        { en: "improve concentration", vi: "nâng cao khả năng tập trung" },
        { en: "stimulate creativity", vi: "kích thích sự sáng tạo" }
      ],
      sampleSentence: "Reading non-fiction books is wonderful because it allows me to widen my knowledge and learn new things."
    },
    {
      id: "health",
      title: "3. LỢI ÍCH SỨC KHỎE (Health & Fitness)",
      color: "#10b981",
      icon: "💪",
      desc: "Dùng cho các chủ đề thể thao, bơi lội, đạp xe, chế độ ăn uống, lối sống lành mạnh.",
      formulaTip: "Công thức: Doing exercise is essential to + [Cụm lợi ích sức khỏe].",
      items: [
        { en: "stay healthy", vi: "duy trì sức khỏe, sống khoẻ mạnh" },
        { en: "stay in good shape", vi: "giữ vóc dáng cân đối" },
        { en: "sleep better", vi: "ngủ ngon hơn" },
        { en: "create a balanced lifestyle", vi: "tạo lối sống cân bằng" },
        { en: "maintain a healthy lifestyle", vi: "duy trì lối sống lành mạnh" },
        { en: "lose weight", vi: "giảm cân" },
        { en: "avoid getting sick", vi: "tránh bị ốm đau" },
        { en: "prevent some health problems", vi: "phòng tránh các vấn đề sức khỏe" },
        { en: "improve my physical health", vi: "cải thiện sức khỏe thể chất" },
        { en: "stay energetic", vi: "luôn tràn đầy năng lượng" }
      ],
      sampleSentence: "I try to jog around the park every morning to stay healthy and stay in good shape."
    },
    {
      id: "softskills",
      title: "4. KỸ NĂNG MỀM CẦN THIẾT (Essential Soft Skills)",
      color: "#f59e0b",
      icon: "🤝",
      desc: "Dùng khi nói về công việc, học đại học, hoạt động nhóm, hoạt động tình nguyện.",
      formulaTip: "Công thức: It assists me in honing my + [Kỹ năng mềm].",
      items: [
        { en: "communication skills", vi: "kỹ năng giao tiếp" },
        { en: "problem-solving skills", vi: "kỹ năng giải quyết vấn đề" },
        { en: "teamwork skills", vi: "kỹ năng làm việc nhóm" },
        { en: "public speaking skills", vi: "kỹ năng nói trước đám đông" },
        { en: "time management skills", vi: "kỹ năng quản lý thời gian" },
        { en: "money management skills", vi: "kỹ năng quản lý tài chính" },
        { en: "digital skills", vi: "kỹ năng công nghệ" },
        { en: "leadership skills", vi: "kỹ năng lãnh đạo" },
        { en: "presentation skills", vi: "kỹ năng thuyết trình" },
        { en: "self-learning skills", vi: "kỹ năng tự học" }
      ],
      sampleSentence: "Participating in group projects helps students sharpen both their communication skills and teamwork skills."
    }
  ];

  /**
   * BẢNG TỪ VỰNG & CÔNG THỨC SPEAKING VSTEP CỦA CÔ NGUYỆT
   * Nguồn: https://englishwithmsnguyet-dev.github.io/vstepspeakingpart1/
   */
  const VSTEP_SPEAKING_VOCAB_GUIDE = {
    part1: {
      title: "Speaking Part 1: Công Thức Phản Xạ Tự Nhiên & Cụm Từ Ăn Điểm",
      overview: "Quy chuẩn phản xạ 3 bước: Trả lời trực tiếp -> Nêu lý do bằng 'because it helps me + Cụm Lợi Ích' -> Mở rộng tần suất hoặc cảm xúc.",
      formulaSteps: [
        {
          step: "Bước 1: Trả lời trực tiếp câu hỏi (Direct Answer)",
          phrases: [
            "Yes, definitely! / Yes, absolutely! (Đồng ý nhiệt tình)",
            "To be honest, I'm really keen on... / I'm a big fan of... (Thích thú)",
            "Not really. / I don't think so. (Từ chối khéo léo)",
            "It really depends on my mood and schedule. (Tùy thuộc)"
          ]
        },
        {
          step: "Bước 2: Nêu lý do gắn liền Bảng Lợi Ích (Because it helps me...)",
          phrases: [
            "...because it helps me reduce stress and relax after a busy day.",
            "...because it enables me to widen my knowledge and learn new things.",
            "...because it is an ideal way to stay healthy and stay in good shape.",
            "...because it creates a balanced lifestyle and improves my mood."
          ]
        },
        {
          step: "Bước 3: Mở rộng tần suất / thời gian (Frequency Extension)",
          phrases: [
            "I usually do this once in a blue moon due to my tight schedule.",
            "I make it a point to do this almost every single day.",
            "Whenever I have spare time, I often hang out with my close friends.",
            "I've been passionate about this since I was a high school student."
          ]
        }
      ],
      collocations: [
        { en: "be a big fan of", vi: "là người rất hâm mộ / cực kỳ yêu thích cái gì" },
        { en: "right up my alley", vi: "hoàn toàn đúng sở thích / gu của tôi" },
        { en: "once in a blue moon", vi: "rất hiếm khi làm điều gì đó" },
        { en: "hit the books", vi: "tập trung cao độ vào việc ôn bài thi" },
        { en: "recharge my batteries", vi: "nạp lại năng lượng cho bản thân" },
        { en: "have a knack for", vi: "có năng khiếu bẩm sinh về điều gì" }
      ]
    },
    part2: {
      title: "Speaking Part 2: Thảo Luận Giải Pháp (Solution Discussion)",
      overview: "Cho 1 tình huống và 3 phương án. Công thức vàng 3 bước: Chốt phương án tốt nhất -> Chứng minh 2 lý do -> Bác bỏ 2 phương án còn lại.",
      formula: [
        {
          step: "Bước 1: Chốt phương án tối ưu",
          phrases: [
            "Weighing all three alternatives, I firmly believe that [Option A] is the most viable solution.",
            "In my perspective, among the three choices presented, [Option A] definitely stands out as the most optimal approach."
          ]
        },
        {
          step: "Bước 2: Chứng minh 2 lý do bằng Bảng Lợi Ích",
          phrases: [
            "First and foremost, it offers great [health / financial / time] benefits because...",
            "In addition, another compelling advantage is that it helps participants develop useful skills."
          ]
        },
        {
          step: "Bước 3: Bác bỏ 2 phương án còn lại (Rebuttal Formula)",
          phrases: [
            "Turning to [Option B], although it seems tempting at first glance, its primary drawback lies in its prohibitive cost.",
            "As for [Option C], I would rule it out immediately because it is far too time-consuming and impractical."
          ]
        }
      ]
    },
    part3: {
      title: "Speaking Part 3: Phát Triển Chủ Đề (Topic Development)",
      overview: "Mở rộng sơ đồ mindmap 3 nhánh bằng giải thích, dẫn chứng và discourse markers liên kết học thuật.",
      discourseMarkers: [
        { marker: "It is widely acknowledged that...", usage: "Khẳng định một chân lý hoặc quan điểm được số đông đồng thuận" },
        { marker: "It serves as a prime catalyst for...", usage: "Nhấn mạnh vai trò là chất xúc tác hàng đầu cho sự phát triển" },
        { marker: "To substantiate this viewpoint,...", usage: "Đưa ra dẫn chứng thực tế hoặc số liệu minh họa cụ thể" },
        { marker: "Another noteworthy dimension to consider is...", usage: "Chuyển sang một nhánh luận điểm mới trong mindmap" }
      ]
    }
  };

  /**
   * 7 DẠNG THƯ VSTEP TASK 01 CỦA CÔ NGUYỆT
   * Nguồn trích xuất chuẩn: https://englishwithmsnguyet-dev.github.io/vstepwritingtask1b1/
   */
  const VSTEP_OFFICIAL_LETTER_TYPES = [
    {
      id: "advice",
      titleEn: "Letter of Advice",
      titleVi: "Thư Cho Lời Khuyên",
      icon: "fa-lightbulb",
      color: "#f59e0b",
      purpose: "Đưa ra lời khuyên, gợi ý hoặc đề xuất để giúp người nhận giải quyết một vấn đề hoặc đưa ra quyết định phù hợp.",
      style: "Chủ yếu là thư thân mật (Informal Letter).",
      keywords: "advice / give me some advice / ask for advice / suggestions / recommendations / what should I do...? / what would you suggest...?",
      outline: {
        salutation: "Dear [Tên người nhận],",
        opening: "Thanks for your letter. I hope you are doing well. I’m writing to give you some advice about your situation.",
        structures: [
          "You should + Vo",
          "It would be a good idea to + Vo",
          "If I were you, I would + Vo",
          "You can try + V-ing",
          "Remember to + Vo / Don't forget to + Vo"
        ],
        connectors: "Firstly, … → Secondly, … → Next, … → Finally, …",
        closing: "I hope my advice will be helpful to you. Please let me know how everything turns out. Write back soon.",
        signOff: "Best wishes,"
      }
    },
    {
      id: "request",
      titleEn: "Letter of Request",
      titleVi: "Thư Yêu Cầu",
      icon: "fa-hand-holding-hand",
      color: "#3b82f6",
      purpose: "Yêu cầu hoặc xin thông tin, sự giúp đỡ, hoặc đề nghị một hành động cụ thể từ người nhận.",
      style: "Có thể là thân mật, bán trang trọng hoặc trang trọng tùy đối tượng người nhận.",
      keywords: "ask for information / request details / could you please tell me / I would like to know / write a letter to ask about... / inquire about...",
      outline: {
        salutation: "Dear [Tên/Họ] HOẶC Dear Sir/Madam,",
        opening: "I am writing to request some information about [thứ cần xin] because [lý do].",
        structures: [
          "Could you provide me with more information about …?",
          "Could you give me more details about …?",
          "I would like to know more about …",
          "I would like to inquire about …",
          "I am also wondering about …"
        ],
        connectors: "First of all, … → In addition, … → Furthermore, …",
        closing: "Thank you for your time and assistance. I look forward to hearing from you soon.",
        signOff: "Yours faithfully, (nếu Dear Sir/Madam) HOẶC Yours sincerely, / Best regards,"
      }
    },
    {
      id: "description",
      titleEn: "Letter of Description",
      titleVi: "Thư Cung Cấp Thông Tin",
      icon: "fa-file-lines",
      color: "#10b981",
      purpose: "Cung cấp thông tin chi tiết, miêu tả một địa điểm, người, sự kiện, khóa học hoặc trải nghiệm theo yêu cầu của người nhận.",
      style: "Thường là thư thân mật hoặc bán trang trọng.",
      keywords: "tell me about / give me information about... / describe your... / describe someone... / could you provide some details on... / let me know what... is like",
      outline: {
        salutation: "Dear [Tên],",
        opening: "I was delighted to receive your letter. I'm writing to tell you all about [sự việc/địa điểm đề bài yêu cầu].",
        structures: [
          "It is located in the heart of the city...",
          "What makes it so special is that...",
          "In terms of atmosphere / facilities, it is really..."
        ],
        connectors: "As for the first point, … → Regarding the second aspect, …",
        closing: "I hope this description gives you a clear picture. Feel free to ask if you need more details.",
        signOff: "Warm regards, / Best wishes,"
      }
    },
    {
      id: "complaint",
      titleEn: "Letter of Complaint",
      titleVi: "Thư Phàn Nàn",
      icon: "fa-triangle-exclamation",
      color: "#ef4444",
      purpose: "Bày tỏ sự không hài lòng về chất lượng sản phẩm, dịch vụ hoặc thái độ phục vụ và yêu cầu phương án bồi thường, đổi trả hoặc xin lỗi.",
      style: "Thư trang trọng (Formal Letter). TUYỆT ĐỐI KHÔNG VIẾT TẮT.",
      keywords: "complain about / express dissatisfaction with... / not satisfied with... / report a problem / poor service / bad quality / ask for a refund / replacement / solution",
      outline: {
        salutation: "Dear Sir or Madam, (hoặc Dear Manager,)",
        opening: "I am writing to express my strong dissatisfaction with the substandard service and damaged items I experienced at your establishment on [date].",
        structures: [
          "To begin with, the staff were completely unhelpful and rude.",
          "Furthermore, the condition of the room was unacceptable.",
          "I insist on receiving a full refund or an appropriate replacement."
        ],
        connectors: "Firstly, … → What is worse, … → Under these circumstances, …",
        closing: "I expect this matter to be resolved promptly. I look forward to your immediate reply.",
        signOff: "Yours faithfully,"
      }
    },
    {
      id: "feedback",
      titleEn: "Letter of Feedback",
      titleVi: "Thư Phản Hồi, Đánh Giá",
      icon: "fa-comment-dots",
      color: "#8b5cf6",
      purpose: "Đưa ra nhận xét, đánh giá hai chiều (cả điểm hài lòng và điểm chưa hài lòng) về một sự kiện, dịch vụ, khóa học hoặc chuyến đi.",
      style: "Thường là bán trang trọng hoặc trang trọng.",
      keywords: "give feedback on / share your opinion about... / write a letter to comment on... / say what you liked or did not like about... / say what you are satisfied or dissatisfied with...",
      outline: {
        salutation: "Dear [Tên người phụ trách],",
        opening: "I am writing to provide feedback on the [sự kiện/khóa học] that I recently attended.",
        structures: [
          "On the positive side, I was thoroughly impressed by...",
          "However, there were a couple of areas that could be improved.",
          "I would suggest extending the session duration in future events."
        ],
        connectors: "Regarding the strengths, … → On the other hand, …",
        closing: "I hope my feedback proves constructive for your upcoming programs. Thank you for organizing such a meaningful event.",
        signOff: "Yours sincerely, / Kind regards,"
      }
    },
    {
      id: "apology",
      titleEn: "Letter of Apology",
      titleVi: "Thư Xin Lỗi",
      icon: "fa-handshake-angle",
      color: "#6366f1",
      purpose: "Bày tỏ sự hối tiếc chân thành, giải thích lý do vì sự cố/vắng mặt/chậm trễ và đề xuất cách khắc phục hoặc bù đắp.",
      style: "Thân mật hoặc trang trọng tùy thuộc vào người nhận (bạn bè hay cấp trên/thầy cô).",
      keywords: "apologize for / say sorry for... / explain why you (missed, were late, forgot, damaged...) / say how you will make up for it / explain the situation and offer a solution",
      outline: {
        salutation: "Dear [Tên/Họ],",
        opening: "Please accept my sincere apologies for failing to attend [sự kiện] yesterday due to an unforeseen emergency.",
        structures: [
          "The main reason was that I had to handle an urgent family matter.",
          "I fully understand the inconvenience this may have caused.",
          "To make up for this, I would like to..."
        ],
        connectors: "Unfortunately, … → As a consequence, … → To compensate for this, …",
        closing: "Once again, I am truly sorry for any trouble caused. I hope you will accept my apology.",
        signOff: "Yours sincerely, (Formal) HOẶC Warmly, / Best wishes, (Informal)"
      }
    },
    {
      id: "application",
      titleEn: "Letter of Application",
      titleVi: "Thư Ứng Tuyển",
      icon: "fa-briefcase",
      color: "#059669",
      purpose: "Bày tỏ nguyện vọng ứng tuyển vào một vị trí công việc, khóa học hoặc chương trình tình nguyện dựa trên năng lực và kinh nghiệm cá nhân.",
      style: "Thư trang trọng (Formal Letter).",
      keywords: "apply for the position / the job of... / write a letter of application / respond to a job advertisement / apply for a part-time / full-time job",
      outline: {
        salutation: "Dear Sir or Madam, (hoặc Dear Hiring Manager,)",
        opening: "I am writing to express my strong interest in applying for the position of [Tên vị trí] as advertised on your website on [Ngày].",
        structures: [
          "With my academic background in English and solid communication skills, I believe I am well suited for this role.",
          "I have acquired valuable experience in customer care through my previous internship.",
          "I am confident that my enthusiasm and dedication would contribute positively to your team."
        ],
        connectors: "As outlined in my resume, … → In addition to this, …",
        closing: "Thank you for considering my application. I would welcome the opportunity for an interview. I look forward to your positive response.",
        signOff: "Yours faithfully,"
      }
    }
  ];

  /**
   * 4 DẠNG LUẬN VSTEP TASK 02 CỦA CÔ NGUYỆT
   * Nguồn trích xuất chuẩn: https://englishwithmsnguyet-dev.github.io/vstepwritingtask2b1/
   */
  const VSTEP_OFFICIAL_ESSAY_TYPES = [
    {
      id: "adv-disadv",
      titleEn: "ADVANTAGES AND DISADVANTAGES",
      titleVi: "Thảo Luận Thuận Lợi & Bất Lợi",
      icon: "fa-scale-balanced",
      color: "#0284c7",
      clues: [
        "What are the advantages and disadvantages of…?",
        "Discuss the benefits and drawbacks of…",
        "What are the positive and negative aspects of…?",
        "Do the advantages outweigh the disadvantages?",
        "Biến thể chỉ hỏi ưu điểm: Discuss the benefits of… / Discuss the importance of…"
      ],
      trapWarning: "Nếu đề hỏi 'outweigh', bạn phải khẳng định dứt khoát mặt nào lớn hơn ở Mở bài, Thân bài và Kết bài. Nếu đề chỉ hỏi 'benefits of...', không được tự ý viết thêm nhược điểm!",
      structure: {
        intro: "Paraphrase đề bài + Câu Thesis Statement khẳng định chủ đề có cả ưu điểm và nhược điểm (hoặc ưu điểm chiếm ưu thế).",
        body1: "Phân tích 2 thuận lợi lớn (Body 1: Advantages) kèm dẫn chứng và mở rộng.",
        body2: "Phân tích 2 bất lợi chính (Body 2: Disadvantages) kèm giải thích.",
        conclusion: "Tóm lược lại cả hai mặt và khẳng định lại kết luận cuối cùng."
      },
      thesisSample: "While there are certain undeniable drawbacks associated with this trend, I firmly believe that its benefits are far more significant."
    },
    {
      id: "cause-effect",
      titleEn: "CAUSES – EFFECTS – SOLUTIONS",
      titleVi: "Nguyên Nhân, Hậu Quả & Giải Pháp",
      icon: "fa-arrows-split-up-and-left",
      color: "#d97706",
      clues: [
        "Biến thể 1 (Nguyên nhân & Hậu quả): What are the causes and effects of this problem?",
        "Biến thể 2 (Nguyên nhân & Giải pháp): What are the causes of this issue and how can it be solved?",
        "Biến thể 3 (Hậu quả & Giải pháp): What problems does this cause and what are the possible solutions?",
        "Biến thể 4 (Chỉ 1 yếu tố): What are the main causes? / What should be done to solve this problem?"
      ],
      trapWarning: "Đọc thật kỹ đề bài để xác định đúng 2 yếu tố được hỏi (Nguyên nhân - Hậu quả / Nguyên nhân - Giải pháp / Hậu quả - Giải pháp). Giải pháp ở Body 2 phải tương ứng để giải quyết trực tiếp nguyên nhân ở Body 1!",
      structure: {
        intro: "Giới thiệu hiện tượng/vấn đề nhức nhối + Nêu định hướng bài viết sẽ phân tích nguyên nhân và giải pháp.",
        body1: "Trình bày 2 nguyên nhân cốt lõi (Root causes) dẫn đến tình trạng này.",
        body2: "Đưa ra 2 giải pháp thiết thực (Viable solutions) từ góc độ chính phủ và cá nhân.",
        conclusion: "Tóm tắt ngắn gọn các nguyên nhân và nhấn mạnh tầm quan trọng của việc hành động sớm."
      },
      thesisSample: "This essay will delve into the primary catalysts behind this troubling phenomenon and put forward viable solutions to address it."
    },
    {
      id: "opinion",
      titleEn: "OPINION",
      titleVi: "Trình Bày Quan Điểm",
      icon: "fa-user-pen",
      color: "#7c3aed",
      clues: [
        "Do you agree or disagree with this opinion?",
        "To what extent do you agree or disagree?",
        "Do you agree that...?",
        "What is your opinion about this?",
        "Do you support or oppose this view? Why?"
      ],
      trapWarning: "Cần chọn lập trường rõ ràng (Đồng ý hoàn toàn / Không đồng ý hoàn toàn) và tuyên bố ngay cuối Mở bài (Thesis Statement). Không được trả lời mơ hồ khiến người đọc không rõ quan điểm của bạn!",
      structure: {
        intro: "Dẫn dắt chủ đề + Paraphrase lại ý kiến đề bài + Khẳng định rõ lập trường của bản thân (I completely agree / disagree).",
        body1: "Luận điểm ủng hộ thứ nhất (First reason) kèm giải thích và ví dụ cụ thể.",
        body2: "Luận điểm ủng hộ thứ hai (Second reason) với bằng chứng thuyết phục.",
        conclusion: "Khẳng định lại lập trường cá nhân bằng cách tóm tắt 2 lý do đã nêu ở thân bài."
      },
      thesisSample: "In my perspective, I completely agree with this viewpoint for several compelling reasons."
    },
    {
      id: "discussion",
      titleEn: "DISCUSSION",
      titleVi: "Thảo Luận 2 Chiều",
      icon: "fa-comments",
      color: "#db2777",
      clues: [
        "Discuss both views and give your opinion.",
        "Discuss both sides and state your own view.",
        "Some people believe that... while others think that...",
        "There are different views about… While some think that…, others feel that…"
      ],
      trapWarning: "BẮT BUỘC phải phân tích CẢ HAI QUAN ĐIỂM (Body 1: Quan điểm 1; Body 2: Quan điểm 2). Lỗi sai chết người là chỉ phân tích quan điểm mình thích và bỏ qua quan điểm còn lại!",
      structure: {
        intro: "Giới thiệu tranh cãi 2 luồng quan điểm + Nêu rõ lập trường cá nhân nghiêng về phía nào.",
        body1: "Phân tích vì sao một nhóm người ủng hộ quan điểm thứ nhất (View 1).",
        body2: "Phân tích quan điểm thứ hai (View 2) và giải thích vì sao tôi đồng tình với quan điểm này.",
        conclusion: "Nhắc lại cả hai góc nhìn và tái khẳng định lựa chọn cá nhân."
      },
      thesisSample: "While there are justifiable reasons to support the former viewpoint, I am personally more inclined toward the latter."
    }
  ];

  /**
   * NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM VSTEP CHUẨN THỰC CHIẾN
   * Phân chia chính xác theo 4 chuyên đề thực tế của Cô Nguyệt.
   */
  const EXAM_QUIZ_QUESTIONS = [
  {
    "id": "bm-off-1",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Bảng Lợi Ích — Nhóm Giải Trí (Entertainment)",
    "question": "Trong Bảng Lợi Ích của Cô Nguyệt, cụm từ nào mang nghĩa 'thư giãn sau một ngày dài' khi nói về sở thích nghe nhạc hoặc xem phim?",
    "options": [
      "relax after a long day",
      "widen my knowledge",
      "stay in good shape",
      "enhance my employability"
    ],
    "answer": 0,
    "explain": "'relax after a long day' thuộc Nhóm Lợi Ích Giải Trí của Cô Nguyệt, dùng để giải thích lý do vì sao thích các hoạt động thư giãn sau giờ học hoặc làm việc căng thẳng."
  },
  {
    "id": "bm-off-2",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Bảng Lợi Ích — Nhóm Giáo Dục (Education)",
    "question": "Cụm từ nào trong Bảng Lợi Ích của Cô Nguyệt có nghĩa là 'mở rộng kiến thức' khi trả lời về việc đọc sách hoặc học ngoại ngữ?",
    "options": [
      "widen my knowledge",
      "pass the time",
      "avoid getting sick",
      "regain my energy"
    ],
    "answer": 0,
    "explain": "'widen my knowledge' thuộc Nhóm Lợi Ích Giáo Dục / Phát Triển Bản Thân của Cô Nguyệt. Rất phù hợp khi trả lời: 'Reading books is great because it helps me widen my knowledge.'"
  },
  {
    "id": "bm-off-3",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Bảng Lợi Ích — Nhóm Sức Khỏe (Health)",
    "question": "Khi được hỏi 'Why do you like playing badminton?', cụm từ nào trong Bảng Lợi Ích Sức Khỏe mang nghĩa 'giữ vóc dáng cân đối'?",
    "options": [
      "stay in good shape",
      "escape from daily stress",
      "digital skills",
      "forget about my worries"
    ],
    "answer": 0,
    "explain": "'stay in good shape' thuộc Nhóm Lợi Ích Sức Khỏe của Cô Nguyệt, dùng để diễn tả việc duy trì vóc dáng đẹp, cân đối khi tập luyện thể thao."
  },
  {
    "id": "bm-off-4",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Bảng Lợi Ích — Kỹ Năng Mềm (Soft Skills)",
    "question": "Trong Bảng Lợi Ích, cụm từ 'teamwork skills' và 'problem-solving skills' thuộc nhóm nào?",
    "options": [
      "Kỹ Năng Mềm Cần Thiết (Soft Skills)",
      "Lợi Ích Giải Trí (Entertainment)",
      "Lợi Ích Sức Khỏe (Health)",
      "Lợi Ích Thời Gian (Time)"
    ],
    "answer": 0,
    "explain": "'teamwork skills' (kỹ năng làm việc nhóm) và 'problem-solving skills' (kỹ năng giải quyết vấn đề) thuộc Nhóm Kỹ Năng Mềm Cần Thiết trong hệ thống giáo trình của Cô Nguyệt."
  },
  {
    "id": "bm-off-5",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Bảng Lợi Ích — Ứng Dụng Công Thức Phản Xạ",
    "question": "Công thức phản xạ chuẩn của Cô Nguyệt khi trả lời câu hỏi Speaking Part 1 về sở thích bằng Bảng Lợi Ích là gì?",
    "options": [
      "Trả lời trực tiếp + because it helps me + [Cụm Lợi Ích] + Mở rộng",
      "Chỉ cần nói Yes hoặc No rồi dừng lại",
      "Đọc lại toàn bộ đề bài và không đưa lý do",
      "Nói một câu tiếng Việt rồi dịch từng chữ sang tiếng Anh"
    ],
    "answer": 0,
    "explain": "Công thức chuẩn của Cô Nguyệt: Trả lời trực tiếp ('Yes, definitely!') -> Dùng 'because it helps me + V-bare' gắn với cụm trong Bảng Lợi Ích -> Mở rộng tần suất hoặc cảm xúc!"
  },
  {
    "id": "bm-off-6",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Bảng Lợi Ích — Nhóm Giải Trí (Entertainment)",
    "question": "Cụm từ nào trong Bảng Lợi Ích Giải Trí có nghĩa là 'giải tỏa tâm trí, làm sạch suy nghĩ' sau những giờ làm việc mệt mỏi?",
    "options": [
      "clear my mind",
      "enrich practical experience",
      "time management skills",
      "avoid getting sick"
    ],
    "answer": 0,
    "explain": "'clear my mind' = làm sạch tâm trí, giải tỏa âu lo. Ví dụ: 'Taking a stroll in the park helps me clear my mind after a hectic day.'"
  },
  {
    "id": "bm-off-7",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1-B2",
    "topic": "Bảng Lợi Ích — Nhóm Sức Khỏe (Health)",
    "question": "Khi nói về việc ăn uống đủ chất hoặc rèn luyện thể thao, cụm từ nào mang nghĩa 'tăng cường hệ miễn dịch'?",
    "options": [
      "boost my immune system",
      "pass the time",
      "sharpen critical thinking",
      "adaptability"
    ],
    "answer": 0,
    "explain": "'boost my immune system' (tăng cường hệ miễn dịch) thuộc Nhóm Lợi Ích Sức Khỏe, giúp bài nói đạt điểm từ vựng band B2."
  },
  {
    "id": "bm-off-8",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1-B2",
    "topic": "Bảng Lợi Ích — Nhóm Giáo Dục (Education)",
    "question": "Trong Bảng Lợi Ích, cụm từ 'broaden my horizons' có nghĩa là gì?",
    "options": [
      "Mở rộng tầm nhìn và hiểu biết về thế giới",
      "Giảm cân và giữ vóc dáng",
      "Ngủ ngon và sâu giấc hơn",
      "Giết thời gian những lúc rảnh rỗi"
    ],
    "answer": 0,
    "explain": "'broaden my horizons' là cụm từ rất hay trong Nhóm Giáo Dục, dùng khi nói về du lịch, học ngoại ngữ, đọc sách: 'Traveling broadens my horizons.'"
  },
  {
    "id": "bm-off-9",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Bảng Lợi Ích — Kỹ Năng Mềm (Soft Skills)",
    "question": "Cụm từ nào trong nhóm Kỹ Năng Mềm của Cô Nguyệt diễn tả khả năng 'thuyết trình tự tin trước đám đông'?",
    "options": [
      "public speaking skills",
      "sleep better",
      "enjoy my free time",
      "maintain a healthy lifestyle"
    ],
    "answer": 0,
    "explain": "'public speaking skills' (kỹ năng nói trước đám đông) là kỹ năng mềm quan trọng, thường dùng khi nói về hoạt động tham gia CLB hoặc thuyết trình tại lớp."
  },
  {
    "id": "sv-off-1",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1-B2",
    "topic": "Speaking Part 1 — Thành Ngữ Tần Suất",
    "question": "Trong Speaking Part 1, thành ngữ nào mang nghĩa 'rất hiếm khi làm điều gì' giúp câu trả lời thêm sinh động và đạt điểm cao?",
    "options": [
      "once in a blue moon",
      "hit the books",
      "a real page-turner",
      "right up my alley"
    ],
    "answer": 0,
    "explain": "'once in a blue moon' = rất hiếm khi. Ví dụ: 'Because of my busy work, I only go swimming once in a blue moon.'"
  },
  {
    "id": "sv-off-2",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1-B2",
    "topic": "Speaking Part 1 — Cụm Từ 'Rất Đúng Sở Thích'",
    "question": "Cụm thành ngữ nào diễn tả 'điều này hoàn toàn đúng với sở thích / gu của tôi'?",
    "options": [
      "It's right up my alley",
      "It's once in a blue moon",
      "It hits the books",
      "It passes the time"
    ],
    "answer": 0,
    "explain": "'It's right up my alley' là thành ngữ chuẩn bản xứ, có nghĩa là việc này rất hợp gu/sở thích của tôi."
  },
  {
    "id": "sv-off-3",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B2",
    "topic": "Speaking Part 2 — Câu Chốt Phương Án Tối Ưu",
    "question": "Trong Speaking Part 2, câu mở màn nào sau đây thể hiện việc cân nhắc kỹ lưỡng và chọn phương án tối ưu chuẩn band B2?",
    "options": [
      "Weighing all three alternatives, I firmly believe that Option A is the most viable solution.",
      "I like Option A because it is good and cheap.",
      "There are 3 options, I choose A.",
      "Option A is my favourite answer."
    ],
    "answer": 0,
    "explain": "'Weighing all three alternatives, I firmly believe that [Option] is the most viable solution' là câu mở đầu học thuật chuẩn mực trong giáo trình của Cô Nguyệt."
  },
  {
    "id": "sv-off-4",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B2",
    "topic": "Speaking Part 2 — Công Thức Bác Bỏ (Rebuttal)",
    "question": "Khi cần bác bỏ phương án B vì quá đắt đỏ trong Speaking Part 2, câu nào thể hiện sự phản biện khéo léo nhất?",
    "options": [
      "Turning to Option B, although it seems tempting at first glance, its primary drawback lies in its prohibitive cost.",
      "Option B is bad and ugly.",
      "Nobody likes Option B because it is stupid.",
      "I hate Option B."
    ],
    "answer": 0,
    "explain": "Công thức nhượng bộ 'Although Option B seems tempting at first glance, its primary drawback lies in its prohibitive cost' vừa thừa nhận ưu điểm vừa chỉ ra lý do cốt lõi để loại bỏ."
  },
  {
    "id": "sv-off-5",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1-B2",
    "topic": "Speaking Part 1 — Khen Sách Cực Hay",
    "question": "Khi giám khảo hỏi về thói quen đọc sách, cụm từ nào mang nghĩa 'một cuốn sách quá lôi cuốn, hấp dẫn khiến người đọc không thể rời mắt'?",
    "options": [
      "a real page-turner",
      "hit the nail on the head",
      "under the weather",
      "beat around the bush"
    ],
    "answer": 0,
    "explain": "'a page-turner' = cuốn sách cực kỳ ly kỳ, lôi cuốn: 'The detective novel was a real page-turner, so I finished it in one sitting.'"
  },
  {
    "id": "sv-off-6",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B2",
    "topic": "Speaking Part 2 — So Sánh Vượt Trội",
    "question": "Trong Speaking Part 2, mẫu câu nào thể hiện lựa chọn tối ưu vượt trội hơn hẳn các lựa chọn còn lại?",
    "options": [
      "Option A stands out as a far superior choice in comparison with the others.",
      "Option A is the same as Option B and C.",
      "All options are bad so I pick randomly.",
      "I cannot decide which one is better."
    ],
    "answer": 0,
    "explain": "'Option A stands out as a far superior choice in comparison with the others' giúp giám khảo thấy rõ khả năng so sánh tương quan vượt trội."
  },
  {
    "id": "sv-off-7",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B2",
    "topic": "Speaking Part 3 — Từ Nối Khởi Đầu Luận Điểm",
    "question": "Trong Speaking Part 3, từ nối (discourse marker) nào trang trọng nhất để mở đầu cho luận điểm cốt lõi đầu tiên?",
    "options": [
      "First and foremost",
      "By the way",
      "Anyway",
      "Like you know"
    ],
    "answer": 0,
    "explain": "'First and foremost' = Trước hết và quan trọng nhất, là từ nối mở bài trang trọng giúp định hình cấu trúc nói mạch lạc."
  },
  {
    "id": "sv-off-8",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Speaking Part 1 — Thành Ngữ Ôn Thi Chăm Chỉ",
    "question": "Cụm thành ngữ nào đồng nghĩa với 'bắt đầu học bài chăm chỉ, vùi đầu vào sách vở' cho kỳ thi VSTEP sắp tới?",
    "options": [
      "hit the books",
      "hit the sack",
      "bite the bullet",
      "spill the beans"
    ],
    "answer": 0,
    "explain": "'hit the books' = vùi đầu vào học: 'I have an exam next week, so it's time to hit the books.'"
  },
  {
    "id": "sv-off-9",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B2",
    "topic": "Speaking Part 3 — Nêu Hệ Quả (Cause & Effect)",
    "question": "Từ nối nào diễn tả mối quan hệ nhân - quả học thuật (hệ quả tất yếu) thích hợp nhất cho Speaking Part 3 và Writing?",
    "options": [
      "Consequently",
      "Maybe",
      "Or else",
      "Kind of"
    ],
    "answer": 0,
    "explain": "'Consequently' (= Do đó, kết quả là) thể hiện tư duy học thuật sắc sảo, nâng điểm tiêu chí Coherence and Fluency."
  },
  {
    "id": "wl-off-1",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Dạng Thư Cho Lời Khuyên (Letter of Advice)",
    "question": "Đề bài có các từ khóa: 'advice, give me some advice, ask for advice, suggestions, recommendations, what should I do...'. Đây là dạng thư nào?",
    "options": [
      "Letter of Advice (Thư Cho Lời Khuyên)",
      "Letter of Complaint (Thư Phàn Nàn)",
      "Letter of Apology (Thư Xin Lỗi)",
      "Letter of Application (Thư Ứng Tuyển)"
    ],
    "answer": 0,
    "explain": "Từ khóa 'advice, suggestions, what should I do' là dấu hiệu đặc trưng của Letter of Advice (Dạng thư 1 trong hệ thống của Cô Nguyệt). Thư thường mang phong cách thân mật (Informal)."
  },
  {
    "id": "wl-off-2",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Dạng Thư Yêu Cầu (Letter of Request)",
    "question": "Đề bài: 'You are planning to take an English course. Write a letter to ask about the tuition fee, teachers, and schedule.' Đây là dạng thư nào?",
    "options": [
      "Letter of Request (Thư Yêu Cầu Thông Tin)",
      "Letter of Feedback (Thư Đánh Giá)",
      "Letter of Apology (Thư Xin Lỗi)",
      "Letter of Advice (Thư Cho Lời Khuyên)"
    ],
    "answer": 0,
    "explain": "Yêu cầu hỏi xin thông tin về học phí, giáo viên và lịch học là dạng Letter of Request (Dạng thư 2). Mẫu câu: 'Could you please provide me with more information about...?'"
  },
  {
    "id": "wl-off-3",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Dạng Thư Phàn Nàn (Letter of Complaint)",
    "question": "Đề bài có các từ khóa: 'complain about, express dissatisfaction with, poor service, bad quality, ask for a refund'. Đây là dạng thư nào?",
    "options": [
      "Letter of Complaint (Thư Phàn Nàn)",
      "Letter of Description (Thư Cung Cấp Thông Tin)",
      "Letter of Application (Thư Ứng Tuyển)",
      "Letter of Advice (Thư Cho Lời Khuyên)"
    ],
    "answer": 0,
    "explain": "Dấu hiệu 'complain about, express dissatisfaction, poor service, ask for a refund' là dạng Letter of Complaint (Dạng thư 4). Phong cách bắt buộc là Formal Letter, tuyệt đối không viết tắt!"
  },
  {
    "id": "wl-off-4",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Dạng Thư Cung Cấp Thông Tin (Letter of Description)",
    "question": "Đề bài: 'Your friend is going to visit your hometown. Write a letter to tell him about the famous places, local food, and the weather.' Đây là dạng thư nào?",
    "options": [
      "Letter of Description (Thư Cung Cấp Thông Tin)",
      "Letter of Complaint (Thư Phàn Nàn)",
      "Letter of Application (Thư Ứng Tuyển)",
      "Letter of Request (Thư Yêu Cầu)"
    ],
    "answer": 0,
    "explain": "Đề bài yêu cầu miêu tả và cung cấp thông tin về quê hương (địa điểm, món ăn, thời tiết) là dạng Letter of Description (Dạng thư 3)."
  },
  {
    "id": "wl-off-5",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Dạng Thư Phản Hồi, Đánh Giá (Letter of Feedback)",
    "question": "Đề bài yêu cầu: 'Write a letter to share what you liked and did not like about the workshop you attended.' Đây là dạng thư nào?",
    "options": [
      "Letter of Feedback (Thư Phản Hồi, Đánh Giá)",
      "Letter of Apology (Thư Xin Lỗi)",
      "Letter of Advice (Thư Cho Lời Khuyên)",
      "Letter of Application (Thư Ứng Tuyển)"
    ],
    "answer": 0,
    "explain": "Nêu nhận xét cả mặt tích cực (liked) và mặt cần cải thiện (did not like) là đặc trưng của Letter of Feedback (Dạng thư 5)."
  },
  {
    "id": "wl-off-6",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Dạng Thư Xin Lỗi (Letter of Apology)",
    "question": "Đề bài: 'You missed your friend's birthday party last night. Write a letter to apologize, explain why you could not come, and suggest another meeting.' Đây là dạng thư nào?",
    "options": [
      "Letter of Apology (Thư Xin Lỗi)",
      "Letter of Complaint (Thư Phàn Nàn)",
      "Letter of Request (Thư Yêu Cầu)",
      "Letter of Description (Thư Cung Cấp Thông Tin)"
    ],
    "answer": 0,
    "explain": "Xin lỗi vì vắng mặt, giải thích lý do và đề xuất hẹn lại là dạng Letter of Apology (Dạng thư 6). Mở đầu: 'Please accept my sincere apologies for...'"
  },
  {
    "id": "wl-off-7",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Dạng Thư Ứng Tuyển (Letter of Application)",
    "question": "Đề bài: 'You saw an advertisement for a part-time receptionist at a hotel. Write a letter to apply for this job.' Đây là dạng thư nào?",
    "options": [
      "Letter of Application (Thư Ứng Tuyển)",
      "Letter of Advice (Thư Cho Lời Khuyên)",
      "Letter of Feedback (Thư Đánh Giá)",
      "Letter of Complaint (Thư Phàn Nàn)"
    ],
    "answer": 0,
    "explain": "Ứng tuyển vào vị trí công việc theo quảng cáo là dạng Letter of Application (Dạng thư 7). Mở bài: 'I am writing to apply for the position of receptionist as advertised...'"
  },
  {
    "id": "wl-off-8",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Quy Tắc Chào Kết Thư Trang Trọng (Formal Letter)",
    "question": "Trong thư trang trọng (Formal Letter), nếu bạn không biết tên người nhận và mở đầu bằng 'Dear Sir/Madam,', thì câu kết thư chuẩn bắt buộc phải là gì?",
    "options": [
      "Yours faithfully,",
      "Yours sincerely,",
      "Love,",
      "See ya,"
    ],
    "answer": 0,
    "explain": "Quy tắc kinh điển của Cô Nguyệt: 'Dear Sir/Madam' đi với 'Yours faithfully,'. Nếu biết tên 'Dear Mr. Smith' thì đi với 'Yours sincerely,'!"
  },
  {
    "id": "wl-off-9",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Mở Bài Thư Phàn Nàn Chuẩn Cô Nguyệt",
    "question": "Câu mở bài nào sau đây chuẩn phong cách trang trọng (Formal) cho Thư Phàn Nàn (Letter of Complaint)?",
    "options": [
      "I am writing this letter to express my strong dissatisfaction with the poor customer service at your store.",
      "Hey guys, your store is so terrible and I am very mad at you.",
      "What's up? Fix my order right now!",
      "I feel sad because your food was bad."
    ],
    "answer": 0,
    "explain": "'I am writing to express my strong dissatisfaction with...' là mẫu câu chuẩn formal, lịch sự nhưng nghiêm túc, được giám khảo VSTEP đánh giá cao."
  },
  {
    "id": "we-off-1",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Dạng Thuận Lợi & Bất Lợi (Advantages and Disadvantages)",
    "question": "Đề bài có câu lệnh: 'What are the advantages and disadvantages of studying abroad?' hoặc 'Do the advantages outweigh the disadvantages?' Đây là dạng bài luận nào?",
    "options": [
      "ADVANTAGES AND DISADVANTAGES (Thảo Luận Thuận Lợi & Bất Lợi)",
      "OPINION (Trình Bày Quan Điểm)",
      "CAUSES – EFFECTS – SOLUTIONS (Nguyên Nhân, Hậu Quả & Giải Pháp)",
      "DISCUSSION (Thảo Luận 2 Chiều)"
    ],
    "answer": 0,
    "explain": "Câu lệnh hỏi về advantages and disadvantages / benefits and drawbacks là Dạng Luận 1 trong giáo trình của Cô Nguyệt. Cần phân tích cả mặt tích cực và tiêu cực."
  },
  {
    "id": "we-off-2",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Dạng Nguyên Nhân & Giải Pháp (Causes - Solutions)",
    "question": "Đề bài: 'Many young people are spending too much time on social media. What are the causes of this issue and suggest some practical solutions.' Đây là dạng bài luận nào?",
    "options": [
      "CAUSES – EFFECTS – SOLUTIONS (Nguyên Nhân, Hậu Quả & Giải Pháp)",
      "DISCUSSION (Thảo Luận 2 Chiều)",
      "OPINION (Trình Bày Quan Điểm)",
      "ADVANTAGES AND DISADVANTAGES (Thuận Lợi & Bất Lợi)"
    ],
    "answer": 0,
    "explain": "Đề bài yêu cầu phân tích nguyên nhân (causes) và giải pháp (solutions) là Dạng Luận 2 trong hệ thống của Cô Nguyệt. Thân bài 1 viết nguyên nhân, Thân bài 2 viết giải pháp tương ứng."
  },
  {
    "id": "we-off-3",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Dạng Luận Quan Điểm (Opinion)",
    "question": "Đề bài kết thúc bằng: 'Do you agree or disagree with this statement?' hoặc 'To what extent do you agree or disagree?' Đây là dạng bài luận nào?",
    "options": [
      "OPINION (Trình Bày Quan Điểm)",
      "DISCUSSION (Thảo Luận 2 Chiều)",
      "CAUSES – EFFECTS – SOLUTIONS (Nguyên Nhân, Hậu Quả & Giải Pháp)",
      "ADVANTAGES AND DISADVANTAGES (Thuận Lợi & Bất Lợi)"
    ],
    "answer": 0,
    "explain": "Câu lệnh 'Do you agree or disagree' là Dạng Luận Opinion (Dạng 3). Thí sinh cần nêu rõ quan điểm cá nhân ngay tại câu Thesis Statement ở Mở bài!"
  },
  {
    "id": "we-off-4",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Dạng Luận Thảo Luận 2 Chiều (Discussion)",
    "question": "Đề bài có câu lệnh: 'Discuss both views and give your own opinion.' Đây là dạng bài luận nào?",
    "options": [
      "DISCUSSION (Thảo Luận 2 Chiều)",
      "CAUSES – EFFECTS – SOLUTIONS (Nguyên Nhân, Hậu Quả & Giải Pháp)",
      "ADVANTAGES AND DISADVANTAGES (Thuận Lợi & Bất Lợi)",
      "LETTER OF ADVICE (Thư Cho Lời Khuyên)"
    ],
    "answer": 0,
    "explain": "Câu lệnh 'Discuss both views and give your opinion' là Dạng Luận Discussion (Dạng 4). Bắt buộc Thân bài 1 bàn góc nhìn thứ nhất, Thân bài 2 bàn góc nhìn thứ hai, rồi chốt quan điểm cá nhân."
  },
  {
    "id": "we-off-5",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B2",
    "topic": "Task 2 — Bẫy Thi Dạng Outweigh Của Cô Nguyệt",
    "question": "Trong đề bài 'Do the advantages outweigh the disadvantages?', lưu ý bẫy thi của Cô Nguyệt là gì?",
    "options": [
      "Phải so sánh tương quan và khẳng định rõ mặt nào lớn hơn, không chỉ liệt kê thuần túy",
      "Chỉ được viết về mặt lợi, bỏ qua hoàn toàn mặt hại",
      "Viết hai đoạn thân bài bằng nhau chằn chặn mà không đưa ra kết luận bên nào nặng hơn",
      "Chỉ cần viết 1 đoạn văn duy nhất"
    ],
    "answer": 0,
    "explain": "Bẫy thi lớn nhất của dạng Outweigh: Nếu chỉ liệt kê lợi và hại mà không so sánh tương quan và chốt mặt nào vượt trội hơn, thí sinh sẽ bị trừ điểm nặng tiêu chí Task Response."
  },
  {
    "id": "we-off-6",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B2",
    "topic": "Task 2 — Phân Biệt Discussion & Opinion",
    "question": "Điểm khác biệt cốt lõi nhất giữa dạng Discussion (Discuss both views) và dạng Opinion (Agree/Disagree) là gì?",
    "options": [
      "Discussion bắt buộc phải phân tích khách quan cả 2 góc nhìn trước khi chốt ý, Opinion có thể bảo vệ 1 chiều hoàn toàn",
      "Discussion chỉ viết 1 đoạn thân bài, Opinion viết 3 đoạn",
      "Opinion không được dùng ngôi 'I', Discussion bắt buộc dùng ngôi 'I'",
      "Hai dạng bài này hoàn toàn giống hệt nhau về cách viết"
    ],
    "answer": 0,
    "explain": "Ở dạng Discussion, bạn PHẢI thảo luận cả 2 mặt của vấn đề một cách công bằng ở 2 đoạn thân bài. Còn Opinion bạn có thể chọn đồng ý 100% và bảo vệ góc nhìn của mình suốt toàn bài."
  },
  {
    "id": "we-off-7",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Thesis Statement Cho Dạng Causes - Solutions",
    "question": "Mẫu câu Thesis Statement nào sau đây chuẩn chỉnh nhất cho Mở bài bài luận Causes & Solutions?",
    "options": [
      "This essay will examine the underlying causes of this phenomenon and propose practical measures to address it.",
      "I think this problem has many reasons and solutions.",
      "In this essay I will talk about good things and bad things.",
      "This is a big problem for everyone."
    ],
    "answer": 0,
    "explain": "'This essay will examine the underlying causes of this phenomenon and propose practical measures to address it' là câu Thesis Statement học thuật chuẩn mực trong giáo trình của Cô Nguyệt."
  },
  {
    "id": "we-off-8",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Quy Tắc Viết Câu Chủ Đề (Topic Sentence)",
    "question": "Theo quy chuẩn chấm thi VSTEP, câu chủ đề (Topic Sentence) ở đầu mỗi đoạn thân bài có vai trò gì?",
    "options": [
      "Nêu bật ý tưởng chính bao quát của cả đoạn, có từ nối chuyển đoạn rõ ràng",
      "Kể một câu chuyện cá nhân dài dòng",
      "Chép lại nguyên văn câu đề bài",
      "Đưa ra kết luận cuối cùng của toàn bài"
    ],
    "answer": 0,
    "explain": "Topic Sentence giúp giám khảo nắm ngay luận điểm của đoạn, quyết định điểm Coherence & Task Response. Ví dụ: 'On the one hand, there are several convincing arguments in favor of...'"
  },
  {
    "id": "we-off-9",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Điều Cấm Kỵ Trong Đoạn Kết Bài (Conclusion)",
    "question": "Khi viết đoạn Kết bài (Conclusion) cho bài luận VSTEP Task 2, điều cấm kỵ nhất là gì?",
    "options": [
      "Tuyệt đối không đưa thêm ý tưởng, thông tin mới chưa từng được phân tích trong thân bài",
      "Khẳng định lại quan điểm cá nhân đã nêu ở mở bài",
      "Tóm tắt ngắn gọn các luận điểm chính",
      "Dùng từ nối 'In conclusion' hoặc 'To sum up'"
    ],
    "answer": 0,
    "explain": "Nguyên tắc vàng của Cô Nguyệt: Kết bài chỉ tóm tắt và khẳng định lại, tuyệt đối KHÔNG đưa ý mới (new ideas) vào Kết bài vì sẽ bị giám khảo trừ điểm cấu trúc bài viết!"
  }
];

  /**
   * Computes growth stage index (1..4) from progress percentage (0..100).
   */
  function getCloverStage(progress) {
    const p = Math.max(0, Math.min(100, progress || 0));
    if (p >= 100) return 4;
    if (p >= 60) return 3;
    if (p >= 25) return 2;
    return 1;
  }

  // Exact mapped dewdrop & sunlight glint coordinates (0..100 viewBox) per stage
  const STAGE_DEW_GLINTS = {
    1: [
      { x: 46.0, y: 48.7, r: 1.5, d: '0s' },
      { x: 52.8, y: 44.5, r: 1.1, d: '1.3s' }
    ],
    2: [
      { x: 44.2, y: 19.8, r: 1.6, d: '0s' },
      { x: 55.6, y: 24.5, r: 1.4, d: '0.9s' },
      { x: 33.7, y: 31.8, r: 1.4, d: '1.7s' },
      { x: 61.8, y: 35.2, r: 1.3, d: '2.4s' }
    ],
    3: [
      { x: 37.6, y: 25.4, r: 1.5, d: '0.2s' },
      { x: 51.0, y: 30.2, r: 1.6, d: '1.1s' },
      { x: 67.0, y: 41.2, r: 1.4, d: '1.9s' },
      { x: 41.5, y: 65.0, r: 1.5, d: '2.6s' }
    ],
    4: [
      { x: 37.3, y: 14.2, r: 1.9, d: '0s' },
      { x: 36.5, y: 25.9, r: 1.7, d: '0.8s' },
      { x: 61.9, y: 26.7, r: 1.8, d: '1.6s' },
      { x: 66.8, y: 41.4, r: 1.6, d: '2.2s' },
      { x: 41.8, y: 65.2, r: 1.5, d: '1.2s' }
    ]
  };

  /**
   * Renders the lifelike painterly potted clover stage with grounded shadow,
   * bottom-anchored organic wind sway, and synchronized morning dewdrop glints.
   */
  function renderFlowerPotSvg(flowerId, progress) {
    const stage = getCloverStage(progress);
    const glints = STAGE_DEW_GLINTS[stage] || STAGE_DEW_GLINTS[1];

    const glintMarkup = glints.map((g) => `
      <g transform="translate(${g.x}, ${g.y})">
        <g class="clover-dew-glint" style="animation-delay: ${g.d};">
          <circle cx="0" cy="0" r="${(g.r * 1.35).toFixed(2)}" fill="#FFFFFF" opacity="0.45"/>
          <path d="M 0 ${(-g.r * 2.1).toFixed(2)} L ${(g.r * 0.45).toFixed(2)} ${(-g.r * 0.45).toFixed(2)} L ${(g.r * 2.1).toFixed(2)} 0 L ${(g.r * 0.45).toFixed(2)} ${(g.r * 0.45).toFixed(2)} L 0 ${(g.r * 2.1).toFixed(2)} L ${(-g.r * 0.45).toFixed(2)} ${(g.r * 0.45).toFixed(2)} L ${(-g.r * 2.1).toFixed(2)} 0 L ${(-g.r * 0.45).toFixed(2)} ${(-g.r * 0.45).toFixed(2)} Z"
                fill="#FFFFFF"/>
        </g>
      </g>
    `).join('');

    // Delicate sunlit fairy butterfly visiting the blooming Stage 4 clover
    const stage4Accents = stage === 4 ? `
      <g transform="translate(76, 17)" class="clover-sun-butterfly-path">
        <g class="clover-bfly-bob">
          <g class="clover-bfly-wing-l">
            <path d="M 0 0 C -3.8 -4.4 -5.8 -0.2 -1.3 2.1 C -4.2 4.6 -1.1 5.8 0 1.6 Z"
                  fill="#FEF3C7" stroke="#B45309" stroke-width="0.35"/>
            <circle cx="-1.9" cy="0.8" r="0.65" fill="#FDE68A" opacity="0.9"/>
          </g>
          <g class="clover-bfly-wing-r">
            <path d="M 0 0 C 3.8 -4.4 5.8 -0.2 1.3 2.1 C 4.2 4.6 1.1 5.8 0 1.6 Z"
                  fill="#FEF3C7" stroke="#B45309" stroke-width="0.35"/>
            <circle cx="1.9" cy="0.8" r="0.65" fill="#FDE68A" opacity="0.9"/>
          </g>
          <ellipse cx="0" cy="0.9" rx="0.45" ry="1.8" fill="#78350F"/>
        </g>
      </g>
    ` : '';

    return `
      <div class="clover-living-stage clover-stage-${stage}" data-stage="${stage}">
        <div class="clover-ground-shadow" aria-hidden="true"></div>
        <div class="clover-aura-halo" aria-hidden="true"></div>
        <div class="clover-breeze-rig">
          <img src="assets/garden/clover_stage_${stage}.png"
               alt="Cỏ 4 Lá May Mắn VSTEP - Giai đoạn ${stage}"
               class="clover-living-art"
               draggable="false" />
          <svg viewBox="0 0 100 100" class="clover-dew-overlay" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            ${glintMarkup}
            ${stage4Accents}
          </svg>
        </div>
      </div>
    `;
  }

  
  /**
   * Thuật toán chọn câu hỏi ôn thi VSTEP KHÔNG TRÙNG LẶP (Non-Repeating Quiz Engine)
   * Đảm bảo:
   * 1. Tuyệt đối không lặp lại câu hỏi đã trả lời trong chu kỳ hiện tại.
   * 2. Hỗ trợ lọc theo danh mục cụ thể hoặc toàn bộ câu hỏi.
   * 3. Khi hoàn thành 100% câu hỏi trong danh mục, tự động khởi động chu kỳ mới
   *    nhưng giữ lại câu vừa làm gần nhất để không bao giờ bị trùng 2 câu liên tiếp!
   */
  const QUIZ_SEEN_STORAGE_KEY = 'miss_nguyet_quiz_seen_ids_v1';

  function getNextNonRepeatingQuizQuestion(selectedCategory = 'all', seenIds = null) {
    const questions = EXAM_QUIZ_QUESTIONS || [];
    if (questions.length === 0) return null;

    // Filter by category
    let pool = questions;
    if (selectedCategory && selectedCategory !== 'all') {
      pool = questions.filter(q => q.category === selectedCategory);
      if (pool.length === 0) pool = questions;
    }

    // Load or normalize seenIds
    let currentSeen = Array.isArray(seenIds) ? [...seenIds] : [];
    if (!seenIds && typeof window !== 'undefined' && window.localStorage) {
      try {
        const saved = localStorage.getItem(QUIZ_SEEN_STORAGE_KEY);
        if (saved) currentSeen = JSON.parse(saved);
        if (!Array.isArray(currentSeen)) currentSeen = [];
      } catch (e) {
        currentSeen = [];
      }
    }

    // Find questions in pool that haven't been seen yet
    let available = pool.filter(q => !currentSeen.includes(q.id));
    let isNewCycle = false;

    // If all questions in pool have been answered, restart cycle
    if (available.length === 0) {
      const lastSeenId = currentSeen[currentSeen.length - 1];
      // Keep last seen id so it never repeats immediately
      currentSeen = lastSeenId ? [lastSeenId] : [];
      available = pool.filter(q => !currentSeen.includes(q.id));
      if (available.length === 0) available = pool;
      isNewCycle = true;
    }

    // Pick random from available
    const randomIndex = Math.floor(Math.random() * available.length);
    const chosen = available[randomIndex];

    // Add to seen list
    currentSeen.push(chosen.id);

    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(QUIZ_SEEN_STORAGE_KEY, JSON.stringify(currentSeen));
      } catch (e) {}
    }

    // Calculate progress in current pool
    const seenInPool = pool.filter(q => currentSeen.includes(q.id)).length;

    return {
      question: chosen,
      indexInPool: seenInPool,
      totalInPool: pool.length,
      isNewCycle: isNewCycle,
      updatedSeenIds: currentSeen
    };
  }

  function resetQuizSeenHistory() {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.removeItem(QUIZ_SEEN_STORAGE_KEY);
      } catch (e) {}
    }
  }

  root.FLOWER_CATALOG = FLOWER_CATALOG;
  root.EXAM_MOTIVATION_QUOTES = EXAM_MOTIVATION_QUOTES;
  root.DAILY_INSPIRATION_QUOTES = DAILY_INSPIRATION_QUOTES;
  root.getRandomNonRepeatingQuote = getRandomNonRepeatingQuote;
  root.VSTEP_OFFICIAL_BENEFITS = VSTEP_OFFICIAL_BENEFITS;
  root.VSTEP_SPEAKING_VOCAB_GUIDE = VSTEP_SPEAKING_VOCAB_GUIDE;
  root.VSTEP_OFFICIAL_LETTER_TYPES = VSTEP_OFFICIAL_LETTER_TYPES;
  root.VSTEP_OFFICIAL_ESSAY_TYPES = VSTEP_OFFICIAL_ESSAY_TYPES;
  root.EXAM_QUIZ_QUESTIONS = EXAM_QUIZ_QUESTIONS;
  root.getNextNonRepeatingQuizQuestion = getNextNonRepeatingQuizQuestion;
  root.resetQuizSeenHistory = resetQuizSeenHistory;
  root.getCloverStage = getCloverStage;
  root.renderFlowerPotSvg = renderFlowerPotSvg;

})(typeof window !== 'undefined' ? window : global);
