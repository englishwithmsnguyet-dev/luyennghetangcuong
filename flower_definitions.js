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
      "name": "Cỏ 4 Lá May Mắn",
      "shortName": "Cỏ 4 Lá",
      "scientific": "Trifolium repens",
      "icon": "🍀",
      "rarity": "May Mắn",
      "color": "#10B981",
      "accentColor": "#059669",
      "bgGlow": "radial-gradient(circle at 50% 42%, rgba(254, 240, 138, 0.55) 0%, rgba(52, 211, 153, 0.24) 45%, transparent 76%)",
      "meaning": "May mắn ngập tràn, niềm tin, hy vọng và tình yêu vĩnh cửu. Món quà diệu kỳ tiếp lửa cho học viên tự tin bứt phá mục tiêu điểm số TOEIC (450 - 650 - 800+) & VSTEP (B1 - B2 - C1)!",
      "quote": "Bé cỏ 4 lá mang đến vạn sự may mắn, bình an và kết quả rực rỡ nhất! 🍀🌟",
      "growthDifficulty": "Hiếm có",
      "stages": [
        { "level": 1, "name": "Mầm Hạt Nảy Mầm", "icon": "🌱" },
        { "level": 2, "name": "Mầm Non Xanh Biếc", "icon": "🌿" },
        { "level": 3, "name": "Cây Non Tỏa Lá", "icon": "🪴" },
        { "level": 4, "name": "Bụi Cỏ E Ấp", "icon": "☘️" },
        { "level": 5, "name": "Cỏ 4 Lá Bừng Nở", "icon": "🍀" }
      ]
    },
    "sunflower": {
      "id": "sunflower",
      "name": "Hoa Hướng Dương Rực Rỡ",
      "shortName": "Hoa Hướng Dương",
      "scientific": "Helianthus annuus",
      "icon": "🌻",
      "rarity": "Kiên Định",
      "color": "#F59E0B",
      "accentColor": "#D97706",
      "bgGlow": "radial-gradient(circle at 50% 42%, rgba(254, 240, 138, 0.70) 0%, rgba(245, 158, 11, 0.28) 45%, transparent 76%)",
      "meaning": "Biểu tượng của ý chí kiên định, luôn hướng về phía ánh sáng mặt trời và đỉnh cao tri thức. Tiếp thêm nguồn năng lượng tích cực, sự tự tin và nghị lực bền bỉ vượt qua mọi kỳ thi TOEIC & VSTEP!",
      "quote": "Như đóa hướng dương luôn hướng về vầng thái dương, chúc bạn luôn kiên định, tự tin và tỏa sáng rực rỡ trên mọi chặng đường! 🌻☀️",
      "growthDifficulty": "Yêu nắng",
      "stages": [
        { "level": 1, "name": "Hạt Mầm Nứt Đất", "icon": "🌱" },
        { "level": 2, "name": "Mầm Non Vươn Cao", "icon": "🌿" },
        { "level": 3, "name": "Thân Khỏe Tán Lá", "icon": "🪴" },
        { "level": 4, "name": "Nụ Vàng Chúm Chím", "icon": "🌼" },
        { "level": 5, "name": "Hướng Dương Rực Rỡ", "icon": "🌻" }
      ]
    },
    "tulip": {
      "id": "tulip",
      "name": "Hoa Tulip Kiêu Hãnh",
      "shortName": "Hoa Tulip",
      "scientific": "Tulipa gesneriana",
      "icon": "🌷",
      "rarity": "Thanh Lịch",
      "color": "#F43F5E",
      "accentColor": "#E11D48",
      "bgGlow": "radial-gradient(circle at 50% 42%, rgba(254, 205, 211, 0.70) 0%, rgba(244, 63, 94, 0.28) 45%, transparent 76%)",
      "meaning": "Biểu tượng của lòng nhiệt huyết, sự thanh lịch và niềm kiêu hãnh vươn mình. Thắp sáng ngọn lửa tự tin, tinh thần kỷ luật và bản lĩnh kiên cường để bứt phá band điểm TOEIC & VSTEP mơ ước!",
      "quote": "Như đóa tulip kiêu hãnh đón ngọn gió xuân, chúc bạn luôn thanh lịch, kiên cường và tỏa sáng rực rỡ với ước mơ của mình! 🌷✨",
      "growthDifficulty": "Yêu nước & gió nhẹ",
      "stages": [
        { "level": 1, "name": "Mầm Củ Nhú Xanh", "icon": "🌱" },
        { "level": 2, "name": "Lá Mầm Vươn Dài", "icon": "🌿" },
        { "level": 3, "name": "Thân Thon Cứng Cáp", "icon": "🪴" },
        { "level": 4, "name": "Búp Hoa E Ấp", "icon": "🌸" },
        { "level": 5, "name": "Tulip Nở Kiêu Hãnh", "icon": "🌷" }
      ]
    },
    "cactus": {
      "id": "cactus",
      "name": "Hoa Xương Rồng Kiên Cường",
      "shortName": "Hoa Xương Rồng",
      "scientific": "Cactaceae",
      "icon": "🌵",
      "rarity": "Kiên Cường",
      "color": "#0D9488",
      "accentColor": "#0F766E",
      "bgGlow": "radial-gradient(circle at 50% 42%, rgba(204, 251, 241, 0.70) 0%, rgba(20, 184, 166, 0.28) 45%, transparent 76%)",
      "meaning": "Biểu tượng của ý chí thép kiên cường, sức sống mãnh liệt vượt qua mọi nghịch cảnh và thử thách để bung nở đóa hoa diệu kỳ. Tiếp thêm bản lĩnh vững vàng và nghị lực phi thường để chinh phục đỉnh cao TOEIC & VSTEP!",
      "quote": "Dù giữa sa mạc khô cằn, xương rồng vẫn kiên cường nở hoa rực rỡ. Chúc bạn luôn bền bỉ, kiên định và tỏa sáng ngoạn mục! 🌵✨",
      "growthDifficulty": "Chịu hạn giỏi & bền bỉ",
      "stages": [
        { "level": 1, "name": "Mầm Gai Bé Nhỏ", "icon": "🌱" },
        { "level": 2, "name": "Thân Non Xanh Mướt", "icon": "🌿" },
        { "level": 3, "name": "Thân Mọng Kiên Cường", "icon": "🪴" },
        { "level": 4, "name": "Nụ Hồng Chúm Chím", "icon": "🌸" },
        { "level": 5, "name": "Xương Rồng Nở Hoa", "icon": "🌵" }
      ]
    },
    "rose": {
      "id": "rose",
      "name": "Hoa Hồng Đỏ Khát Vọng",
      "shortName": "Hoa Hồng Đỏ",
      "scientific": "Rosa",
      "icon": "🌹",
      "rarity": "Khát Vọng",
      "color": "#BE123C",
      "accentColor": "#9F1239",
      "bgGlow": "radial-gradient(circle at 50% 42%, rgba(254, 205, 211, 0.75) 0%, rgba(190, 18, 60, 0.28) 45%, transparent 76%)",
      "meaning": "Biểu tượng của ngọn lửa đam mê, lòng nhiệt huyết cháy bỏng và khát khao vươn tới đỉnh cao tri thức. Tiếp thêm sự tự tin để bạn bứt phá, tỏa sáng và gặt hái chứng chỉ TOEIC & VSTEP xuất sắc!",
      "quote": "Như đóa hồng nhung đỏ thắm kiêu sa qua bao ngày chăm bón, chúc bạn luôn giữ trọn ngọn lửa đam mê, tự tin và vững bước tới tương lai tươi sáng! 🌹✨",
      "growthDifficulty": "Yêu nắng ấm & gió nhẹ",
      "stages": [
        { "level": 1, "name": "Mầm Non Đỏ Tía", "icon": "🌱" },
        { "level": 2, "name": "Cành Non Xanh Biếc", "icon": "🌿" },
        { "level": 3, "name": "Cành Lá Sum Suê", "icon": "🪴" },
        { "level": 4, "name": "Búp Hồng E Ấp", "icon": "🌸" },
        { "level": 5, "name": "Hoa Hồng Bung Nở", "icon": "🌹" }
      ]
    },
    "lavender": {
      "id": "lavender",
      "name": "Hoa Oải Hương Tĩnh Tâm",
      "shortName": "Hoa Oải Hương",
      "scientific": "Lavandula angustifolia",
      "icon": "🪻",
      "rarity": "Tĩnh Tâm",
      "color": "#8B5CF6",
      "accentColor": "#7C3AED",
      "bgGlow": "radial-gradient(circle at 50% 42%, rgba(237, 233, 254, 0.75) 0%, rgba(139, 92, 246, 0.28) 45%, transparent 76%)",
      "meaning": "Biểu tượng của sự tĩnh tâm, thanh bình và tập trung cao độ. Hương thơm êm dịu xua tan mọi âu lo, giúp bạn giữ vững sự điềm tĩnh và tự tin trước mọi thử thách.",
      "quote": "Như đóa oải hương thơm ngát trong nắng sớm, chúc bạn luôn giữ tâm trí tĩnh tại, sáng suốt và vững vàng chạm tới ước mơ! 🪻✨",
      "growthDifficulty": "Thư thái & kiên nhẫn",
      "stages": [
        { "level": 1, "name": "Mầm Nhánh Thảo Mộc", "icon": "🌱" },
        { "level": 2, "name": "Mầm Non Xanh Bạc", "icon": "🌿" },
        { "level": 3, "name": "Bụi Thảo Mộc Thơm", "icon": "🪴" },
        { "level": 4, "name": "Cành Nụ Tím Chúm Chím", "icon": "🌸" },
        { "level": 5, "name": "Oải Hương Nở Rộ", "icon": "🪻" }
      ]
    },
    "daisy": {
      "id": "daisy",
      "name": "Hoa Cúc Họa Mi Thuần Khiết",
      "shortName": "Hoa Cúc Họa Mi",
      "scientific": "Bellis perennis",
      "icon": "🌼",
      "rarity": "Thuần Khiết",
      "color": "#EAB308",
      "accentColor": "#CA8A04",
      "bgGlow": "radial-gradient(circle at 50% 42%, rgba(254, 249, 195, 0.75) 0%, rgba(234, 179, 8, 0.28) 45%, transparent 76%)",
      "meaning": "Biểu tượng của sự thuần khiết, năng lượng tươi mới và niềm vui dung dị. Món quà tiếp thêm niềm lạc quan yêu đời và nguồn động lực tích cực mỗi ngày.",
      "quote": "Như cánh cúc họa mi trắng trong đón nắng mai, chúc bạn mỗi ngày mới luôn tràn đầy năng lượng tươi sáng và rạng ngời nụ cười! 🌼☀️",
      "growthDifficulty": "Yêu nắng mai & gió nhẹ",
      "stages": [
        { "level": 1, "name": "Mầm Nhỏ Nhú Đất", "icon": "🌱" },
        { "level": 2, "name": "Lá Mầm Tươi Tốt", "icon": "🌿" },
        { "level": 3, "name": "Khóm Cúc Xanh Mướt", "icon": "🪴" },
        { "level": 4, "name": "Nụ Hoa E Ấp", "icon": "🌸" },
        { "level": 5, "name": "Cúc Họa Mi Bừng Nở", "icon": "🌼" }
      ]
    },
    "succulent": {
      "id": "succulent",
      "name": "Sen Đá Ngọc Bền Bỉ",
      "shortName": "Sen Đá Ngọc",
      "scientific": "Echeveria",
      "icon": "🪷",
      "rarity": "Bền Bỉ",
      "color": "#059669",
      "accentColor": "#047857",
      "bgGlow": "radial-gradient(circle at 50% 42%, rgba(209, 250, 229, 0.75) 0%, rgba(16, 185, 129, 0.28) 45%, transparent 76%)",
      "meaning": "Biểu tượng của sự kiên trì, bền bỉ và sức sống dẻo dai. Từng lớp lá mọng nước gom góp tinh hoa đất trời, nhắc nhở ta kiên định tích lũy tri thức để vững vàng tỏa sắc.",
      "quote": "Như đóa sen đá ngọc kiên trì chắt chiu từng giọt sương, chúc bạn luôn bền chí, kiên định và vững bước trên hành trình vươn tới thành công! 🪷✨",
      "growthDifficulty": "Chịu hạn & bền bỉ",
      "stages": [
        { "level": 1, "name": "Búp Mầm Bụ Bẫm", "icon": "🌱" },
        { "level": 2, "name": "Tầng Lá Mọng Nước", "icon": "🌿" },
        { "level": 3, "name": "Đài Sen Đá Tròn Trịa", "icon": "🪴" },
        { "level": 4, "name": "Nhú Cành Hoa Chuông", "icon": "🌸" },
        { "level": 5, "name": "Sen Đá Bung Nở", "icon": "🪷" }
      ]
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
   * Sử dụng localStorage riêng biệt theo từng tài khoản học viên để ghi nhớ các câu đã xem.
   */
  function getActiveUserStorageSuffix() {
    try {
      if (typeof window !== 'undefined' && window.FlowerGarden && typeof window.FlowerGarden.getAccountId === 'function') {
        const id = window.FlowerGarden.getAccountId();
        if (id) return id;
      }
      if (typeof localStorage !== 'undefined') {
        const sess = localStorage.getItem('vstep_user_session');
        if (sess) {
          const p = JSON.parse(sess);
          if (p && p.name) {
            const s = String(p.name).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
            if (s) return 'user_' + s;
          }
        }
        const sName = localStorage.getItem('vstep_student_name');
        if (sName) {
          const s = String(sName).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
          if (s) return 'user_' + s;
        }
      }
    } catch (e) {}
    return 'default';
  }

  function getDailyQuotesStorageKey() {
    return 'miss_nguyet_daily_quotes_seen_v2_' + getActiveUserStorageSuffix();
  }

  function getRandomNonRepeatingQuote() {
    const quotes = DAILY_INSPIRATION_QUOTES;
    if (!quotes || quotes.length === 0) return null;

    const storageKey = getDailyQuotesStorageKey();
    let seenIds = [];
    try {
      const saved = localStorage.getItem(storageKey);
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

    // Ghi nhớ câu đã xem cho tài khoản hiện tại
    seenIds.push(chosen.id);
    try {
      localStorage.setItem(storageKey, JSON.stringify(seenIds));
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
      title: "Speaking Part 2: Thảo Luận Giải Pháp (Solution Discussion) — Chuẩn B2 Cô Nguyệt",
      overview: "Cho 1 tình huống và 3 phương án lựa chọn. Áp dụng 4 Quy Tắc Vàng phòng thi và Dàn ý dẫn dắt 3 bước chuẩn của Cô Nguyệt (từ dự án speaking-part2-b2level).",
      rules: [
        { name: "1' Chuẩn bị quý giá", desc: "Xác định ngay chủ từ (I / We / He / She) và chọn phương án nào dễ nói & có nhiều từ vựng nhất." },
        { name: "Không có đáp án sai", desc: "Giám khảo chấm khả năng lập luận và độ trôi chảy, không chấm việc bạn chọn đáp án nào." },
        { name: "Bắt buộc nêu lý do loại", desc: "Phải nhắc đến và giải thích lý do loại bỏ 2 phương án còn lại để đạt trọn điểm Task Fulfillment." },
        { name: "Chuẩn xác đại từ", desc: "Đề hỏi 'You and your family/friends' ➔ We/us/our; hỏi bạn bè/người thân ➔ He/She; hỏi riêng bạn ➔ I/me." }
      ],
      formula: [
        {
          step: "Bước 1: Mở Bài (Introduction)",
          phrases: [
            "A. Chọn cho bản thân (Subject = I): 'Well, if I had to choose [tình huống], I would go for [lựa chọn của mình].'",
            "B. Đề xuất cho đối tượng khác / nhóm (Subject = We / He / She): 'Well, if [chủ từ] had to suggest [tình huống], [chủ từ] would recommend [lựa chọn phù hợp].'"
          ]
        },
        {
          step: "Bước 2: Thân Bài (Body - Nêu 2 lý do chọn & 2 lý do loại)",
          phrases: [
            "Lý do chọn 1: 'First of all, [lý do chọn 1].' ➔ Giải thích và mở rộng.",
            "Lý do chọn 2: 'Secondly, [lý do chọn 2].' ➔ Giải thích và mở rộng.",
            "Lý do loại 1: '[Chủ từ] wouldn’t choose / recommend [phương án không chọn 1] because [lý do không chọn 1].'",
            "Lý do loại 2: 'As for [phương án không chọn 2], it’s less suitable because [lý do không chọn 2].'"
          ]
        },
        {
          step: "Bước 3: Kết Bài (Conclusion - Khẳng định lại lựa chọn)",
          phrases: [
            "'In short, I believe [lựa chọn] is the best choice for [đối tượng] in this situation.'"
          ]
        }
      ]
    },
    part3: {
      title: "Speaking Part 3: Phát Triển Chủ Đề (Topic Development) — Chuẩn B2 Cô Nguyệt",
      overview: "Triển khai Sơ Đồ Tư Duy (Mindmap 4 hướng: 3 gợi ý có sẵn + 1 ý tưởng riêng) theo Dàn ý 3 bước và quy tắc trả lời câu hỏi mở rộng (từ dự án speaking-part3-b2level).",
      formula: [
        {
          step: "Bước 1: Bắt Đầu (Giới thiệu lại chủ đề theo cách của mình)",
          phrases: [
            "Mẫu chung: 'There are some [dạng đề] of [chủ đề].' (VD: 'There are some benefits of online learning.')",
            "Ngoại lệ Reasons: 'There are some reasons why [mệnh đề chính S+V].'",
            "Ngoại lệ Ways: 'There are some ways for [đối tượng] to [mục đích].'",
            "Ngoại lệ Factors: 'There are several factors to consider when [tình huống] / in order to [mục đích].'"
          ]
        },
        {
          step: "Bước 2: Phát Triển Các Ý (Triển khai từng gợi ý của đề)",
          phrases: [
            "Khung chuẩn 3 nhánh: 'One major [dạng đề] is that [nhánh 1]...' ➔ 'Another [dạng đề] is that [nhánh 2]...' ➔ 'One more [dạng đề] is that [nhánh 3]...'",
            "Khung rút gọn: 'Firstly, [nhánh 1]...' ➔ 'Secondly, [nhánh 2]...' ➔ 'Finally / Furthermore, [nhánh 3]...'"
          ]
        },
        {
          step: "Bước 3: Kết Thúc (Tóm tắt quan điểm chính)",
          phrases: [
            "'In short, [chủ đề] has several clear [dạng đề].'"
          ]
        },
        {
          step: "Chuyển tiếp câu hỏi mở rộng (Follow-up Questions)",
          phrases: [
            "Câu chuyển ý: 'Now, I will answer some follow-up questions / further questions.'",
            "Trả lời trực tiếp: 'Number 1: [Trả lời thẳng vào câu hỏi 1]...' (Lưu ý của Cô Nguyệt: Không đọc lại nguyên văn câu hỏi đề bài để tiết kiệm thời gian!)."
          ]
        }
      ],
      categories: [
        { id: 1, name: "Lợi ích / Tác động tích cực", desc: "advantages, benefits, positive effects (online learning, reading books, teamwork...)" },
        { id: 2, name: "Bất lợi / Tác động tiêu cực", desc: "disadvantages, drawbacks, negative effects (fast food, social media, big city life...)" },
        { id: 3, name: "Lý do / Nguyên nhân", desc: "reasons, causes (reasons why people travel, reasons for obesity...)" },
        { id: 4, name: "Cách thức / Phương pháp", desc: "ways, methods, solutions (ways to protect environment, improve English...)" },
        { id: 5, name: "Đặc điểm / Phẩm chất", desc: "qualities, characteristics (good leader, great teacher, true friend...)" },
        { id: 6, name: "Yếu tố cần cân nhắc", desc: "factors, criteria (factors when choosing a job, buying a house...)" }
      ]
    }  };

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
  
  /**
   * BẢNG CHIẾN LƯỢC ÔN THI TOEIC THỰC CHIẾN CỦA CÔ NGUYỆT (7 PARTS)
   * Giúp học viên nắm chắc bí quyết làm bài, nhận diện bẫy ETS và quản lý thời gian thi TOEIC tối ưu.
   */
  const TOEIC_OFFICIAL_STRATEGY_GUIDE = [
    {
      part: "Part 1",
      nameEn: "PHOTOGRAPHS (Tranh Ảnh)",
      nameVi: "Mô Tả Hình Ảnh (6 Câu)",
      icon: "fa-camera",
      color: "#3b82f6",
      keyRule: "Quan sát tổng thể trước khi nghe: xác định người/vật, hành động chính và vị trí trong tranh.",
      tips: [
        "Bẫy thì tiếp diễn: Tranh KHÔNG CÓ NGƯỜI mà nghe 'is/are being + V3' (trừ display) -> Loại ngay!",
        "Bẫy hành động vs trạng thái: 'wearing' (đang mặc trên người - trạng thái) vs 'putting on' (đang xỏ tay vào áo - hành động đang diễn ra).",
        "Tập trung vào các danh từ chỉ vị trí: row, stacked, arranged, lined up, hung on the wall."
      ]
    },
    {
      part: "Part 2",
      nameEn: "QUESTION - RESPONSE (Hỏi - Đáp)",
      nameVi: "Hỏi & Đáp Nhanh (25 Câu)",
      icon: "fa-comments",
      color: "#8b5cf6",
      keyRule: "Nắm chắc từ để hỏi (Wh- / How) hoặc trợ động từ (Do / Did / Have / Can) ở 3 từ đầu tiên.",
      tips: [
        "Bẫy từ phát âm na ná (Similar Sounds) hoặc lặp từ: 90% là bẫy sai!",
        "Câu hỏi Wh- (Who, Where, When, Why, What): Tuyệt đối KHÔNG trả lời bằng Yes / No.",
        "Câu trả lời gián tiếp (I don't know, It hasn't been decided yet, Check with Mary): 95% là đáp án ĐÚNG!",
        "Câu hỏi lựa chọn (A or B): KHÔNG trả lời Yes / No, thường chọn một trong hai hoặc 'Either is fine' / 'Neither'."
      ]
    },
    {
      part: "Part 3 & 4",
      nameEn: "CONVERSATIONS & TALKS",
      nameVi: "Hội Thoại & Bài Nói Ngắn",
      icon: "fa-headphones-simple",
      color: "#06b6d4",
      keyRule: "Quy tắc vàng: ĐỌC TRƯỚC 3 CÂU HỎI & CÁC LỰA CHỌN trong lúc máy đọc hướng dẫn hoặc trước khi audio chạy.",
      tips: [
        "Xác định từ khóa chính (Who, Where, What problem, What next action).",
        "Bắt nhịp thứ tự câu hỏi: Thông tin câu 1 thường ở đầu đoạn, câu 2 ở giữa, câu 3 ở cuối.",
        "Câu hỏi có bảng biểu / bản đồ (Graphic Questions): Đối chiếu thông tin nghe được với cột tương ứng trên hình.",
        "Nếu bị lỡ 1 câu: Lập tức đoán nhanh và chuyển sang đọc 3 câu tiếp theo, tuyệt đối không chần chừ."
      ]
    },
    {
      part: "Part 5",
      nameEn: "INCOMPLETE SENTENCES",
      nameVi: "Điền Vào Câu (30 Câu)",
      icon: "fa-pen-to-square",
      color: "#10b981",
      keyRule: "Nhìn 4 phương án trước: Nếu cùng gốc từ -> Câu Ngữ Pháp (nhìn trước & sau chỗ trống). Nếu 4 từ khác nhau -> Câu Từ Vựng (dịch nghĩa theo ngữ cảnh công sở).",
      tips: [
        "Vị trí từ loại: Đứng trước Danh từ là Tính từ (hoặc Noun ghép); Đứng trước Tính từ / Động từ / cuối câu là Trạng từ (-ly).",
        "Phân biệt Cụm Danh Từ (Noun) vs Mệnh Đề (Clause): Due to / Because of / Despite / In spite of + Noun Phrase. Because / Although / While + S + V.",
        "Thời gian làm bài: Tối đa 30 giây/câu, dành 10 - 12 phút cho toàn bộ 30 câu Part 5."
      ]
    },
    {
      part: "Part 6",
      nameEn: "TEXT COMPLETION",
      nameVi: "Điền Đoạn Văn (16 Câu)",
      icon: "fa-file-lines",
      color: "#f59e0b",
      keyRule: "Luyện kỹ năng điền câu hoàn chỉnh (Sentence Insertion): Đọc câu phía trước và phía sau chỗ trống để tìm từ nối logic.",
      tips: [
        "Chú ý thì của toàn đoạn văn (thư báo, thông báo tuyển dụng, hóa đơn).",
        "Các liên từ liên kết đoạn văn hay gặp: However, Therefore, In addition, Consequently, As a result.",
        "Phân bổ thời gian: Khoảng 8 - 10 phút cho 4 đoạn (16 câu)."
      ]
    },
    {
      part: "Part 7",
      nameEn: "READING COMPREHENSION",
      nameVi: "Đọc Hiểu Đoạn Đơn & Đoạn Kép (54 Câu)",
      icon: "fa-book-open-reader",
      color: "#ec4899",
      keyRule: "Kỹ năng Skimming & Scanning: Đọc tiêu đề, người gửi/nhận, chủ đề email trước khi đọc câu hỏi.",
      tips: [
        "Với đoạn kép/ba (Double / Triple Passages): Câu hỏi số 3, 4, 5 thường yêu cầu liên kết thông tin giữa 2 văn bản khác nhau.",
        "Bẫy từ đồng nghĩa (Paraphrasing): Đáp án đúng thường dùng từ đồng nghĩa, ít khi dùng lại nguyên si từ trên bài đọc.",
        "Quản lý thời gian: Dành trọn vẹn 55 phút cho Part 7. Không sa đà quá lâu vào một câu khó."
      ]
    }
  ];

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
  "id": "toeic-q1",
  "category": "toeic-grammar",
  "categoryName": "📝 TOEIC Part 5: Từ Loại",
  "skill": "Reading",
  "level": "TOEIC 500+",
  "topic": "Trạng từ bổ nghĩa Tính từ",
  "question": "The new marketing campaign was _______ successful in boosting online sales across Southeast Asia.",
  "options": [
    "extreme",
    "extremely",
    "extremity",
    "extremist"
  ],
  "answer": 1,
  "explain": "Trước tính từ 'successful', ta cần một TRẠNG TỪ (Adverb) để bổ nghĩa: 'extremely successful' (cực kỳ thành công)."
},
{
  "id": "toeic-q2",
  "category": "toeic-grammar",
  "categoryName": "📝 TOEIC Part 5: Từ Loại",
  "skill": "Reading",
  "level": "TOEIC 500+",
  "topic": "Vị trí Danh từ (Approval)",
  "question": "All employees must obtain written _______ from the department manager before ordering office equipment.",
  "options": [
    "approve",
    "approved",
    "approving",
    "approval"
  ],
  "answer": 3,
  "explain": "Sau tính từ 'written', ta cần một DANH TỪ làm tân ngữ cho động từ 'obtain'. 'Approval' (sự phê duyệt) là danh từ có đuôi -al đặc biệt."
},
{
  "id": "toeic-q3",
  "category": "toeic-grammar",
  "categoryName": "📝 TOEIC Part 5: Liên Từ & Giới Từ",
  "skill": "Reading",
  "level": "TOEIC 600+",
  "topic": "Despite vs Although",
  "question": "_______ the heavy traffic on Highway 101, Ms. Jenkins arrived at the board meeting on schedule.",
  "options": [
    "Although",
    "Despite",
    "Because",
    "Even though"
  ],
  "answer": 1,
  "explain": "'the heavy traffic...' là một Cụm danh từ (Noun Phrase). Ta dùng giới từ 'Despite' (+ Cụm N/V-ing) mang nghĩa 'mặc dù'. ('Although' / 'Even though' phải đi với Mệnh đề S + V)."
},
{
  "id": "toeic-q4",
  "category": "toeic-grammar",
  "categoryName": "📝 TOEIC Part 5: Liên Từ & Giới Từ",
  "skill": "Reading",
  "level": "TOEIC 650+",
  "topic": "During vs While",
  "question": "Please turn off all mobile devices _______ the takeoff and landing of the aircraft.",
  "options": [
    "during",
    "while",
    "as",
    "whereas"
  ],
  "answer": 0,
  "explain": "'the takeoff and landing' là Cụm danh từ. Giới từ 'during' (+ Noun) mang nghĩa 'trong suốt khoảng thời gian diễn ra...'. 'While' phải đi với Mệnh đề (S + V) hoặc V-ing."
},
{
  "id": "toeic-q5",
  "category": "toeic-vocab",
  "categoryName": "💼 TOEIC Business Vocab",
  "skill": "Reading",
  "level": "TOEIC 600+",
  "topic": "Complimentary Breakfast",
  "question": "Hotel guests are entitled to a _______ breakfast buffet at the rooftop lounge every morning.",
  "options": [
    "complimentary",
    "compliment",
    "complaining",
    "complicated"
  ],
  "answer": 0,
  "explain": "'Complimentary' (tính từ) là từ vựng TOEIC rất kinh điển, có nghĩa là 'miễn phí' (bằng với free of charge). Cụm 'complimentary breakfast' = bữa sáng miễn phí."
},
{
  "id": "toeic-q6",
  "category": "toeic-vocab",
  "categoryName": "💼 TOEIC Business Vocab",
  "skill": "Reading",
  "level": "TOEIC 650+",
  "topic": "Accommodate",
  "question": "The newly renovated auditorium is large enough to _______ up to 500 attendees comfortably.",
  "options": [
    "accommodate",
    "negotiate",
    "investigate",
    "participate"
  ],
  "answer": 0,
  "explain": "'Accommodate' trong văn cảnh TOEIC thường mang nghĩa 'có đủ chỗ chứa, đáp ứng không gian cho' (contain or provide space for)."
},
{
  "id": "toeic-q7",
  "category": "toeic-listening",
  "categoryName": "🎧 TOEIC Listening Part 1",
  "skill": "Listening",
  "level": "TOEIC 500+",
  "topic": "Bẫy 'being + V3' trong Tranh Tả Vật",
  "question": "Trong TOEIC Listening Part 1, nếu bức tranh chỉ có VẬT (không hề có NGƯỜI) mà nghe thấy cấu trúc nào sau đây thì 99% là đáp án SAI (bẫy)?",
  "options": [
    "has been placed on the table",
    "is being loaded onto the truck",
    "is arranged in a row",
    "has been displayed on the shelf"
  ],
  "answer": 1,
  "explain": "Cấu trúc 'is/are BEING + V3' mô tả hành động đang có người tác động vào vật ở thời điểm nói. Nếu tranh tĩnh không có người, đáp án có 'being' gần như chắc chắn là bẫy sai!"
},
{
  "id": "toeic-q8",
  "category": "toeic-listening",
  "categoryName": "🎧 TOEIC Listening Part 2",
  "skill": "Listening",
  "level": "TOEIC 600+",
  "topic": "Bẫy Âm Tương Đồng (Similar Sounds)",
  "question": "Khi nghe câu hỏi Part 2 có từ 'coffee' mà một phương án trả lời có từ 'copy', hoặc 'stationery' với 'station', đây là dạng bẫy gì trong TOEIC?",
  "options": [
    "Bẫy đồng nghĩa (Synonym Trap)",
    "Bẫy từ phát âm gần giống nhau (Same/Similar Sound Trap)",
    "Bẫy thì quá khứ",
    "Bẫy câu hỏi đuôi"
  ],
  "answer": 1,
  "explain": "ETS rất hay dùng 'Same sound / Similar sound trap' (từ phát âm giống hoặc na ná từ trên câu hỏi) để đánh lừa thí sinh nghe không rõ. Đáp án có từ na ná âm thường là đáp án SAI!"
},
{
  "id": "toeic-q9",
  "category": "toeic-listening",
  "categoryName": "🎧 TOEIC Listening Part 2",
  "skill": "Listening",
  "level": "TOEIC 650+",
  "topic": "Câu trả lời gián tiếp (Indirect Answers)",
  "question": "Với câu hỏi: 'When will the project report be finalized?', câu trả lời nào sau đây là 'Câu trả lời gián tiếp' thường là đáp án đúng trong đề thi TOEIC?",
  "options": [
    "Yes, I really liked the report.",
    "At 50 dollars per page.",
    "Ask Mr. Tanaka, he is in charge of it.",
    "In the conference room on the second floor."
  ],
  "answer": 2,
  "explain": "Câu hỏi 'When' nhưng đáp án không trả lời trực tiếp mốc thời gian mà trả lời gián tiếp: 'Hãy hỏi anh Tanaka, anh ấy phụ trách việc này'. Đây là xu hướng ra đề rất phổ biến của Part 2 TOEIC hiện đại."
},
{
  "id": "toeic-q10",
  "category": "toeic-grammar",
  "categoryName": "📝 TOEIC Part 5: Cụm Giới Từ",
  "skill": "Reading",
  "level": "TOEIC 600+",
  "topic": "Prior to (= Before)",
  "question": "All attendees are requested to register online _______ to the commencement of the international seminar.",
  "options": [
    "prior",
    "ahead",
    "advance",
    "before"
  ],
  "answer": 0,
  "explain": "Cụm cố định 'prior to' (= before) mang nghĩa 'trước khi'. 'ahead' phải đi với 'of' (ahead of), 'in advance of', còn 'before' là giới từ đứng một mình không kèm 'to'."
},
{
  "id": "toeic-q11",
  "category": "toeic-vocab",
  "categoryName": "💼 TOEIC Business Vocab",
  "skill": "Reading",
  "level": "TOEIC 700+",
  "topic": "Salary Increase",
  "question": "Due to exceptional performance, Ms. Robinson was offered a substantial salary _______ and a promotion to Vice President.",
  "options": [
    "increase",
    "expand",
    "develop",
    "achieve"
  ],
  "answer": 0,
  "explain": "Cụm danh từ 'salary increase' (hoặc pay raise) mang nghĩa 'sự tăng lương'. Các từ còn lại là động từ không đứng sau tính từ 'substantial' để làm cụm danh từ phù hợp."
},
{
  "id": "toeic-q12",
  "category": "toeic-grammar",
  "categoryName": "📝 TOEIC Part 5: Đại Từ Phản Thân",
  "skill": "Reading",
  "level": "TOEIC 550+",
  "topic": "Đại từ phản thân (Herself)",
  "question": "The CEO inspected the new manufacturing facility _______ to ensure strict adherence to international safety standards.",
  "options": [
    "she",
    "her",
    "herself",
    "hers"
  ],
  "answer": 2,
  "explain": "Đại từ phản thân 'herself' đứng cuối mệnh đề để nhấn mạnh chính chủ ngữ tự mình làm hành động đó: 'Đích thân tổng giám đốc đã đi thanh tra cơ sở sản xuất mới'."
  },
  {
    "id": "bm-off-1",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giải Trí (Entertainment)",
    "question": "Trong Bảng Lợi Ích VSTEP, cụm từ nào mang nghĩa \"thư giãn sau một ngày dài\" khi nói về sở thích nghe nhạc hoặc xem phim?",
    "options": [
      "widen my knowledge",
      "relax after a long day",
      "stay in good shape",
      "enhance my employability"
    ],
    "answer": 1,
    "explain": "\"relax after a long day\" thuộc Nhóm Lợi Ích Giải Trí, dùng để giải thích lý do vì sao thích các hoạt động thư giãn sau giờ học hoặc làm việc căng thẳng."
  },
  {
    "id": "bm-off-2",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giáo Dục (Education)",
    "question": "Cụm từ nào trong Bảng Lợi Ích có nghĩa là \"mở rộng kiến thức\" khi trả lời về việc đọc sách hoặc học ngoại ngữ?",
    "options": [
      "pass the time",
      "avoid getting sick",
      "widen my knowledge",
      "regain my energy"
    ],
    "answer": 2,
    "explain": "\"widen my knowledge\" thuộc Nhóm Lợi Ích Giáo Dục / Phát Triển Bản Thân: \"Reading books is great because it helps me widen my knowledge.\""
  },
  {
    "id": "bm-off-3",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Sức Khỏe (Health)",
    "question": "Khi được hỏi \"Why do you like playing badminton?\", cụm từ nào trong Bảng Lợi Ích mang nghĩa \"giữ vóc dáng cân đối\"?",
    "options": [
      "stay in good shape",
      "escape from daily stress",
      "digital skills",
      "forget about my worries"
    ],
    "answer": 0,
    "explain": "\"stay in good shape\" thuộc Nhóm Lợi Ích Sức Khỏe, diễn tả việc duy trì vóc dáng đẹp, cân đối khi tập luyện thể thao."
  },
  {
    "id": "bm-off-4",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Kỹ Năng Mềm (Soft Skills)",
    "question": "Trong Bảng Lợi Ích, cụm từ \"teamwork skills\" và \"problem-solving skills\" thuộc nhóm nào?",
    "options": [
      "Lợi Ích Giải Trí (Entertainment)",
      "Lợi Ích Sức Khỏe (Health)",
      "Lợi Ích Thời Gian (Time)",
      "Kỹ Năng Mềm Cần Thiết (Soft Skills)"
    ],
    "answer": 3,
    "explain": "\"teamwork skills\" (kỹ năng làm việc nhóm) và \"problem-solving skills\" (kỹ năng giải quyết vấn đề) thuộc Nhóm Kỹ Năng Mềm Cần Thiết."
  },
  {
    "id": "bm-off-5",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giải Trí (Entertainment)",
    "question": "Cụm từ nào trong Bảng Lợi Ích Giải Trí có nghĩa là \"giảm căng thẳng\" sau những giờ học tập hoặc làm việc mệt mỏi?",
    "options": [
      "learn new things",
      "reduce stress",
      "teamwork skills",
      "stay in good shape"
    ],
    "answer": 1,
    "explain": "\"reduce stress\" = giảm căng thẳng. Ví dụ: \"Listening to soft music helps me reduce stress after school.\""
  },
  {
    "id": "bm-off-6",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giải Trí (Entertainment)",
    "question": "Cụm từ nào trong Bảng Lợi Ích Giải Trí có nghĩa là \"giải tỏa tâm trí, làm sạch suy nghĩ\"?",
    "options": [
      "clear my mind",
      "enrich practical experience",
      "time management skills",
      "avoid getting sick"
    ],
    "answer": 0,
    "explain": "\"clear my mind\" = làm sạch tâm trí, giải tỏa âu lo: \"Taking a stroll in the park helps me clear my mind.\""
  },
  {
    "id": "bm-off-7",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Sức Khỏe (Health)",
    "question": "Cụm từ nào trong Bảng Lợi Ích Sức Khỏe có nghĩa là \"duy trì sức khỏe tốt, sống khỏe mạnh\"?",
    "options": [
      "clear my mind",
      "public speaking skills",
      "stay healthy",
      "pass the time"
    ],
    "answer": 2,
    "explain": "\"stay healthy\" = duy trì sức khỏe tốt, sống khỏe mạnh. Rất thông dụng trong bài thi B1: \"Jogging every morning helps me stay healthy.\""
  },
  {
    "id": "bm-off-8",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giáo Dục (Education)",
    "question": "Khi nói về lợi ích của việc đọc sách hoặc xem phim tài liệu, cụm từ nào mang nghĩa \"học hỏi những điều mới mẻ\"?",
    "options": [
      "sleep better",
      "avoid getting sick",
      "time management skills",
      "learn new things"
    ],
    "answer": 3,
    "explain": "\"learn new things\" = học những điều mới. Mẫu câu B1 đơn giản: \"I like reading because it helps me learn new things.\""
  },
  {
    "id": "bm-off-9",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Kỹ Năng Mềm (Soft Skills)",
    "question": "Cụm từ nào trong nhóm Kỹ Năng Mềm diễn tả khả năng \"thuyết trình tự tin trước đám đông\"?",
    "options": [
      "sleep better",
      "public speaking skills",
      "enjoy my free time",
      "maintain a healthy lifestyle"
    ],
    "answer": 1,
    "explain": "\"public speaking skills\" (kỹ năng nói trước đám đông) là kỹ năng mềm quan trọng khi nói về hoạt động tham gia CLB hoặc thuyết trình tại lớp."
  },
  {
    "id": "bm-off-10",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Kỹ Năng Mềm (Soft Skills)",
    "question": "Cụm từ nào trong nhóm Kỹ Năng Mềm mang nghĩa \"kỹ năng giao tiếp\"?",
    "options": [
      "communication skills",
      "relax after a long day",
      "stay in good shape",
      "reduce stress"
    ],
    "answer": 0,
    "explain": "\"communication skills\" = kỹ năng giao tiếp. Ví dụ: \"Working in a team helps me improve my communication skills.\""
  },
  {
    "id": "bm-off-11",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giải Trí (Entertainment)",
    "question": "Cụm từ nào trong Bảng Lợi Ích mang nghĩa \"cải thiện tâm trạng\" khi bạn nghe một bản nhạc yêu thích lúc buồn?",
    "options": [
      "improve my mood",
      "lose weight",
      "digital skills",
      "avoid getting sick"
    ],
    "answer": 0,
    "explain": "\"improve my mood\" = cải thiện tâm trạng. Ví dụ: \"Listening to upbeat music helps me improve my mood.\""
  },
  {
    "id": "bm-off-12",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Sức Khỏe (Health)",
    "question": "Khi nói về lý do bạn thường xuyên chạy bộ hoặc tập gym, cụm từ nào mang nghĩa \"giảm cân\"?",
    "options": [
      "have fun",
      "lose weight",
      "communication skills",
      "stimulate creativity"
    ],
    "answer": 1,
    "explain": "\"lose weight\" = giảm cân. Ví dụ: \"I go to the gym three times a week to lose weight.\""
  },
  {
    "id": "bm-off-13",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giải Trí (Entertainment)",
    "question": "Khi phải chờ xe buýt hoặc chờ bạn bè, cụm từ nào mang nghĩa \"giết thời gian\" khi bạn chơi game hoặc lướt mạng xã hội?",
    "options": [
      "stay in good shape",
      "money management skills",
      "pass the time",
      "improve my physical health"
    ],
    "answer": 2,
    "explain": "\"pass the time\" = giết thời gian trong lúc chờ đợi: \"I often read news on my phone to pass the time.\""
  },
  {
    "id": "bm-off-14",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giải Trí (Entertainment)",
    "question": "Cụm từ nào trong Bảng Lợi Ích mang nghĩa \"nạp lại năng lượng\" sau một kỳ thi căng thẳng hoặc một tuần làm việc bận rộn?",
    "options": [
      "prevent some health problems",
      "presentation skills",
      "develop useful skills",
      "regain my energy"
    ],
    "answer": 3,
    "explain": "\"regain my energy\" = nạp lại năng lượng: \"A short weekend trip helps me regain my energy.\""
  },
  {
    "id": "bm-off-15",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Sức Khỏe (Health)",
    "question": "Cụm từ nào trong Bảng Lợi Ích mang nghĩa \"tránh bị ốm đau, bệnh tật\" khi duy trì chế độ ăn uống lành mạnh?",
    "options": [
      "avoid getting sick",
      "have fun",
      "public speaking skills",
      "pass the time"
    ],
    "answer": 0,
    "explain": "\"avoid getting sick\" = tránh bị ốm đau: \"Eating fresh fruits and vegetables helps me avoid getting sick.\""
  },
  {
    "id": "bm-off-16",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giáo Dục (Education)",
    "question": "Khi tham gia các hoạt động như vẽ tranh, chụp ảnh hoặc làm đồ thủ công, cụm từ nào mang nghĩa \"kích thích sự sáng tạo\"?",
    "options": [
      "sleep better",
      "stimulate creativity",
      "escape from study pressure",
      "stay energetic"
    ],
    "answer": 1,
    "explain": "\"stimulate creativity\" = kích thích sự sáng tạo: \"Painting is a great hobby because it stimulates my creativity.\""
  },
  {
    "id": "bm-off-17",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Kỹ Năng Mềm (Soft Skills)",
    "question": "Cụm từ nào trong nhóm Kỹ Năng Mềm có nghĩa là \"kỹ năng quản lý tiền bạc / tài chính\"?",
    "options": [
      "improve concentration",
      "forget about my worries",
      "money management skills",
      "create a balanced lifestyle"
    ],
    "answer": 2,
    "explain": "\"money management skills\" = kỹ năng quản lý tài chính/chi tiêu: \"A part-time job teaches students money management skills.\""
  },
  {
    "id": "bm-off-18",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giải Trí (Entertainment)",
    "question": "Cụm từ nào trong Bảng Lợi Ích có nghĩa là \"quên đi những nỗi lo âu, phiền muộn\" khi bạn đi xem phim hoặc trò chuyện cùng bạn bè?",
    "options": [
      "digital skills",
      "maintain a healthy lifestyle",
      "lose weight",
      "forget about my worries"
    ],
    "answer": 3,
    "explain": "\"forget about my worries\" = quên đi những lo lắng: \"Watching a funny comedy helps me forget about my worries.\""
  },
  {
    "id": "bm-off-19",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Sức Khỏe (Health)",
    "question": "Cụm từ nào trong Bảng Lợi Ích có nghĩa là \"cải thiện sức khỏe thể chất\" khi bạn tập thể dục thường xuyên?",
    "options": [
      "improve my physical health",
      "pass the time",
      "enrich practical experience",
      "enjoy my free time"
    ],
    "answer": 0,
    "explain": "\"improve my physical health\" = cải thiện sức khỏe thể chất: \"Playing badminton regularly helps improve my physical health.\""
  },
  {
    "id": "bm-off-20",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giáo Dục (Education)",
    "question": "Cụm từ nào trong Bảng Lợi Ích mang nghĩa \"phát triển các kỹ năng hữu ích\" khi bạn đi làm thêm hoặc tham gia câu lạc bộ?",
    "options": [
      "clear my mind",
      "develop useful skills",
      "avoid getting sick",
      "have fun"
    ],
    "answer": 1,
    "explain": "\"develop useful skills\" = phát triển các kỹ năng hữu ích: \"Volunteering helps young people develop useful skills.\""
  },
  {
    "id": "bm-off-21",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giải Trí (Entertainment)",
    "question": "Cụm từ nào trong Bảng Lợi Ích mang nghĩa \"thoát khỏi áp lực học tập\" khi học sinh đi du lịch hoặc cắm trại cuối tuần?",
    "options": [
      "lose weight",
      "presentation skills",
      "escape from study pressure",
      "sleep better"
    ],
    "answer": 2,
    "explain": "\"escape from study pressure\" = thoát khỏi áp lực học tập: \"Going on a picnic helps students escape from study pressure.\""
  },
  {
    "id": "bm-off-22",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Sức Khỏe (Health)",
    "question": "Cụm từ nào trong Bảng Lợi Ích mang nghĩa \"duy trì lối sống lành mạnh\" bằng việc ăn ngủ đúng giờ và tập thể thao?",
    "options": [
      "teamwork skills",
      "pass the time",
      "widen my knowledge",
      "maintain a healthy lifestyle"
    ],
    "answer": 3,
    "explain": "\"maintain a healthy lifestyle\" = duy trì lối sống lành mạnh: \"Drinking plenty of water is essential to maintain a healthy lifestyle.\""
  },
  {
    "id": "bm-off-23",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Kỹ Năng Mềm (Soft Skills)",
    "question": "Cụm từ nào trong Bảng Lợi Ích diễn tả \"kỹ năng công nghệ / kỹ năng tin học\" khi bạn học trực tuyến hoặc sử dụng máy tính?",
    "options": [
      "digital skills",
      "regain my energy",
      "stay healthy",
      "improve my mood"
    ],
    "answer": 0,
    "explain": "\"digital skills\" = kỹ năng công nghệ/tin học: \"Using computers daily helps me enhance my digital skills.\""
  },
  {
    "id": "bm-off-24",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giáo Dục (Education)",
    "question": "Khi đọc sách hoặc tập trung làm bài, cụm từ nào mang nghĩa \"nâng cao khả năng tập trung\"?",
    "options": [
      "forget about my worries",
      "improve concentration",
      "public speaking skills",
      "escape from daily stress"
    ],
    "answer": 1,
    "explain": "\"improve concentration\" = nâng cao sự tập trung: \"Listening to instrumental music helps me improve concentration while studying.\""
  },
  {
    "id": "bm-off-25",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Sức Khỏe (Health)",
    "question": "Cụm từ nào trong Bảng Lợi Ích mang nghĩa \"phòng tránh một số vấn đề sức khỏe\" khi bạn thường xuyên vận động?",
    "options": [
      "stimulate creativity",
      "communication skills",
      "prevent some health problems",
      "pass the time"
    ],
    "answer": 2,
    "explain": "\"prevent some health problems\" = phòng ngừa các vấn đề sức khỏe: \"Regular exercise helps prevent some health problems like back pain.\""
  },
  {
    "id": "bm-off-26",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Kỹ Năng Mềm (Soft Skills)",
    "question": "Cụm từ nào trong nhóm Kỹ Năng Mềm mang nghĩa \"kỹ năng tự học\" khi bạn chủ động tra cứu và học từ vựng tại nhà?",
    "options": [
      "clear my mind",
      "lose weight",
      "avoid getting sick",
      "self-learning skills"
    ],
    "answer": 3,
    "explain": "\"self-learning skills\" = kỹ năng tự học: \"Studying online is a great way to practice self-learning skills.\""
  },
  {
    "id": "bm-off-27",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Sức Khỏe (Health)",
    "question": "Cụm từ nào trong Bảng Lợi Ích có nghĩa là \"luôn tràn đầy năng lượng\" sau một giấc ngủ ngon hoặc bữa sáng đầy đủ?",
    "options": [
      "stay energetic",
      "money management skills",
      "develop useful skills",
      "forget about my worries"
    ],
    "answer": 0,
    "explain": "\"stay energetic\" = luôn tràn đầy năng lượng: \"A healthy breakfast helps me stay energetic all morning.\""
  },
  {
    "id": "bm-off-28",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Kỹ Năng Mềm (Soft Skills)",
    "question": "Khi nói về việc chuẩn bị bài thuyết trình trước lớp, cụm từ nào mang nghĩa \"kỹ năng thuyết trình\"?",
    "options": [
      "reduce stress",
      "presentation skills",
      "sleep better",
      "pass the time"
    ],
    "answer": 1,
    "explain": "\"presentation skills\" = kỹ năng thuyết trình trước tập thể: \"Practicing speaking in front of a mirror helps improve presentation skills.\""
  },
  {
    "id": "bm-off-29",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Giải Trí (Entertainment)",
    "question": "Cụm từ nào trong Bảng Lợi Ích có nghĩa là \"tận hưởng thời gian rảnh rỗi\" khi làm những điều mình yêu thích vào cuối tuần?",
    "options": [
      "avoid getting sick",
      "digital skills",
      "enjoy my free time",
      "improve concentration"
    ],
    "answer": 2,
    "explain": "\"enjoy my free time\" = tận hưởng thời gian rảnh rỗi: \"On Sunday, I like to hang out with friends to enjoy my free time.\""
  },
  {
    "id": "bm-off-30",
    "category": "benefit-matrix",
    "categoryName": "📊 Bảng Lợi Ích",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Nhóm Sức Khỏe (Health)",
    "question": "Cụm từ nào trong Bảng Lợi Ích mang nghĩa \"tạo lối sống cân bằng\" giữa việc học tập và nghỉ ngơi?",
    "options": [
      "lose weight",
      "public speaking skills",
      "regain my energy",
      "create a balanced lifestyle"
    ],
    "answer": 3,
    "explain": "\"create a balanced lifestyle\" = tạo dựng lối sống cân bằng: \"Balancing work and recreation helps create a balanced lifestyle.\""
  },
  {
    "id": "sv-off-1",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Speaking Part 1 — Câu Trả Lời Về Sở Thích",
    "question": "Trong Speaking Part 1, khi giám khảo hỏi \"Do you like listening to music?\", cách mở đầu câu trả lời tự nhiên nhất ở trình độ B1 là gì?",
    "options": [
      "No, because I hate it.",
      "Just music.",
      "Yes, I really like listening to music because it helps me relax after a long day.",
      "Music is three words."
    ],
    "answer": 2,
    "explain": "Trả lời trực tiếp (\"Yes, I really like...\") và gắn ngay với cụm trong Bảng Lợi Ích (\"because it helps me relax after a long day\") là phản xạ chuẩn B1."
  },
  {
    "id": "sv-off-2",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Speaking Part 1 — Trạng Từ Chỉ Tần Suất",
    "question": "Khi muốn nói \"Tôi thường xuyên đi bơi vào cuối tuần\", trạng từ chỉ tần suất nào mang nghĩa \"thường xuyên\"?",
    "options": [
      "never",
      "rarely",
      "seldom",
      "usually"
    ],
    "answer": 3,
    "explain": "\"usually\" hoặc \"often\" mang nghĩa thường xuyên, rất phổ biến khi diễn tả thói quen trong Speaking Part 1."
  },
  {
    "id": "sv-off-3",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1-B2",
    "topic": "Speaking Part 2 — Mở Bài Chọn Cho Bản Thân (Subject = I)",
    "question": "Trong Speaking Part 2, khi tình huống hỏi về lựa chọn của chính bản thân mình (Subject = I), mẫu câu mở bài chuẩn là gì?",
    "options": [
      "There are 3 options on the computer screen, I pick Option A.",
      "Well, if I had to choose [tình huống], I would go for [lựa chọn của mình].",
      "I like Option A because it is cheap.",
      "Option A is my answer."
    ],
    "answer": 1,
    "explain": "Mẫu câu điều kiện loại 2: \"Well, if I had to choose [tình huống], I would go for [lựa chọn của mình]\" giúp câu mở đầu tự nhiên và ghi điểm ngữ pháp."
  },
  {
    "id": "sv-off-4",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1-B2",
    "topic": "Speaking Part 2 — Mở Bài Đề Xuất Cho Nhóm / Người Khác",
    "question": "Trong Speaking Part 2, khi đề bài yêu cầu đề xuất cho người khác hoặc nhóm (Subject = We / You / He / She), mẫu câu mở bài chuẩn là gì?",
    "options": [
      "Well, if [chủ từ] had to suggest [tình huống], [chủ từ] would recommend [lựa chọn phù hợp].",
      "I think that they should choose Option A because I like it.",
      "Nobody knows what to choose, so I suggest Option A.",
      "It is mandatory to pick Option A for everyone."
    ],
    "answer": 0,
    "explain": "Công thức chuẩn: \"Well, if [chủ từ] had to suggest [tình huống], [chủ từ] would recommend [lựa chọn]\". Ví dụ: \"Well, if we had to suggest a place to visit, we would recommend Da Nang.\""
  },
  {
    "id": "sv-off-5",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Speaking Part 2 — Lý Do Loại Bỏ Phương Án",
    "question": "Trong Speaking Part 2, khi muốn nêu lý do loại bỏ một phương án vì \"quá đắt đỏ\", câu nói nào tự nhiên và đúng ngữ pháp B1?",
    "options": [
      "It is not expensive at all.",
      "I don't choose this option because it is too expensive.",
      "Money is good for me.",
      "I buy this option with no money."
    ],
    "answer": 1,
    "explain": "\"I don't choose this option because it is too expensive\" là mẫu câu giải thích lý do loại trừ đơn giản, rõ ràng, đạt chuẩn tiêu chí Part 2."
  },
  {
    "id": "sv-off-6",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Speaking Part 2 — Xác Định Chủ Từ",
    "question": "Trong Speaking Part 2, đề bài: \"You and your family are planning a holiday...\". Chủ từ (Subject) cần sử dụng nhất quán trong bài nói là gì?",
    "options": [
      "I (chỉ một mình tôi)",
      "They (họ)",
      "We / My family and I (chúng tôi / gia đình tôi)",
      "She (cô ấy)"
    ],
    "answer": 2,
    "explain": "Đề bài hỏi \"You and your family\" nên chủ từ phải là \"We\" hoặc \"My family and I\". Không dùng \"I\" vì chuyến đi là của cả gia đình."
  },
  {
    "id": "sv-off-7",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Speaking Part 2 — Câu Kết Bài",
    "question": "Trong Speaking Part 2, câu kết bài ngắn gọn và tự nhiên để chốt lại lựa chọn là gì?",
    "options": [
      "Goodbye computer, I am done.",
      "I don't like any option.",
      "I will change my mind to Option B.",
      "For these reasons, I believe this is the best choice for us."
    ],
    "answer": 3,
    "explain": "\"For these reasons, I believe this is the best choice\" là câu chốt ngắn gọn, chuẩn mực, giúp bài nói có kết bài trọn vẹn."
  },
  {
    "id": "sv-off-8",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Speaking Part 3 — Mở Đầu Sơ Đồ Tư Duy",
    "question": "Trong Speaking Part 3, công thức mở đầu triển khai sơ đồ tư duy (Mindmap) ngắn gọn, trực diện nhất là gì?",
    "options": [
      "There are some [benefits / reasons / ways] of [chủ đề].",
      "Today I look at the screen and see 3 circles.",
      "I don't know what to say about this topic.",
      "The mindmap is very hard."
    ],
    "answer": 0,
    "explain": "\"There are some [benefits / reasons / ways] of [chủ đề]\" là cách mở đầu ngắn gọn, chuẩn xác và đi thẳng vào trọng tâm đề thi."
  },
  {
    "id": "sv-off-9",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Speaking Part 3 — Từ Nối Chuyển Ý",
    "question": "Trong Speaking Part 3, khi chuyển sang trình bày ý thứ hai trong sơ đồ tư duy, từ nối nào phù hợp và thông dụng nhất ở trình độ B1?",
    "options": [
      "Suddenly,...",
      "Secondly,... / In addition,...",
      "Because of that,...",
      "However,..."
    ],
    "answer": 1,
    "explain": "Dùng \"Secondly,...\" hoặc \"In addition,...\" để bổ sung luận điểm thứ hai một cách mạch lạc, dễ hiểu."
  },
  {
    "id": "sv-off-10",
    "category": "speaking-vocab",
    "categoryName": "🗣️ Từ Vựng Speaking",
    "skill": "Speaking",
    "level": "B1",
    "topic": "Speaking Part 3 — Câu Hỏi Mở Rộng Follow-up",
    "question": "Khi chuyển sang phần trả lời câu hỏi mở rộng (Follow-up questions) trong Speaking Part 3, quy tắc tiết kiệm thời gian là gì?",
    "options": [
      "Đọc lại nguyên văn toàn bộ câu hỏi trên màn hình",
      "Im lặng 30 giây trước khi trả lời",
      "Trả lời trực tiếp vào nội dung: \"Number 1: [Câu trả lời]...\", không đọc lại đề bài",
      "Chỉ trả lời câu hỏi số 3 và bỏ qua hai câu đầu"
    ],
    "answer": 2,
    "explain": "Tiết kiệm thời gian bằng cách trả lời trực tiếp: \"Number 1: [Nội dung trả lời]...\", tuyệt đối không đọc lại đề bài."
  },
  {
    "id": "wl-off-1",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Diện Thư Cho Lời Khuyên",
    "question": "Đề bài có các từ khóa: \"advice, give me some advice, suggestions, what should I do\". Đây là dạng thư nào?",
    "options": [
      "Letter of Complaint (Thư phàn nàn)",
      "Letter of Application (Thư xin việc)",
      "Letter of Advice (Thư cho lời khuyên)",
      "Letter of Apology (Thư xin lỗi)"
    ],
    "answer": 2,
    "explain": "Các từ khóa \"advice, suggestions, what should I do\" là dấu hiệu đặc trưng của Letter of Advice (Thư cho lời khuyên)."
  },
  {
    "id": "wl-off-2",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Diện Thư Hỏi Thông Tin",
    "question": "Đề bài: \"You are planning to take an English course. Write a letter to ask about course dates, fees, and accommodation.\" Đây là dạng thư nào?",
    "options": [
      "Letter of Inquiry / Request (Thư hỏi thông tin, yêu cầu)",
      "Letter of Apology (Thư xin lỗi)",
      "Letter of Invitation (Thư mời)",
      "Letter of Thanks (Thư cảm ơn)"
    ],
    "answer": 0,
    "explain": "\"ask about course dates, fees...\" là yêu cầu hỏi thông tin dịch vụ, thuộc dạng Letter of Inquiry."
  },
  {
    "id": "wl-off-3",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Diện Thư Phàn Nàn",
    "question": "Đề bài có các từ khóa: \"complain about, express dissatisfaction with, poor service, damaged item\". Đây là dạng thư nào?",
    "options": [
      "Letter of Invitation (Thư mời)",
      "Letter of Complaint (Thư phàn nàn, khiếu nại)",
      "Letter of Thanks (Thư cảm ơn)",
      "Letter of Advice (Thư cho lời khuyên)"
    ],
    "answer": 1,
    "explain": "\"complain about, dissatisfaction, poor service\" là dấu hiệu rõ ràng của Letter of Complaint (Thư phàn nàn)."
  },
  {
    "id": "wl-off-4",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Diện Thư Cung Cấp Thông Tin",
    "question": "Đề bài: \"Your friend is going to visit your hometown. Write a letter to tell him about the weather, places to visit, and local food.\" Đây là dạng thư nào?",
    "options": [
      "Letter of Complaint (Thư phàn nàn)",
      "Letter of Apology (Thư xin lỗi)",
      "Letter of Giving Information (Thư cung cấp thông tin)",
      "Letter of Application (Thư xin việc)"
    ],
    "answer": 2,
    "explain": "\"tell him about...\" mang tính chất chia sẻ, cung cấp thông tin hướng dẫn, thuộc dạng Letter of Giving Information."
  },
  {
    "id": "wl-off-5",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Diện Thư Phản Hồi / Đánh Giá",
    "question": "Đề bài yêu cầu: \"Write a letter to share what you liked and did not like about the event, and suggest improvements.\" Đây là dạng thư nào?",
    "options": [
      "Letter of Apology (Thư xin lỗi)",
      "Letter of Inquiry (Thư hỏi thông tin)",
      "Letter of Invitation (Thư mời)",
      "Letter of Feedback (Thư phản hồi, góp ý)"
    ],
    "answer": 3,
    "explain": "Yêu cầu nêu cảm nhận thích/không thích và đề xuất cải tiến là dạng Letter of Feedback (Thư phản hồi, góp ý)."
  },
  {
    "id": "wl-off-6",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Diện Thư Xin Lỗi",
    "question": "Đề bài: \"You missed your friend's birthday party last night. Write a letter to apologize and explain why.\" Đây là dạng thư nào?",
    "options": [
      "Letter of Apology (Thư xin lỗi)",
      "Letter of Application (Thư xin việc)",
      "Letter of Request (Thư yêu cầu)",
      "Letter of Complaint (Thư khiếu nại)"
    ],
    "answer": 0,
    "explain": "\"apologize and explain why\" là cấu trúc đặc trưng của Letter of Apology (Thư xin lỗi)."
  },
  {
    "id": "wl-off-7",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Nhận Diện Thư Xin Việc",
    "question": "Đề bài: \"You saw an advertisement for a part-time receptionist at a hotel. Write a letter to apply for this job.\" Đây là dạng thư nào?",
    "options": [
      "Letter of Advice (Thư cho lời khuyên)",
      "Letter of Application (Thư xin việc, ứng tuyển)",
      "Letter of Thanks (Thư cảm ơn)",
      "Letter of Complaint (Thư phàn nàn)"
    ],
    "answer": 1,
    "explain": "\"apply for this job\" là mục đích của Letter of Application (Thư xin việc, ứng tuyển)."
  },
  {
    "id": "wl-off-8",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Quy Tắc Kết Thư Trang Trọng",
    "question": "Trong thư trang trọng (Formal Letter), nếu mở đầu bằng \"Dear Sir/Madam\" (chưa biết tên), câu chào kết thư chuẩn là gì?",
    "options": [
      "Love,",
      "Best regards,",
      "Yours faithfully,",
      "Yours sincerely,"
    ],
    "answer": 2,
    "explain": "Quy tắc kinh điển: \"Dear Sir/Madam\" đi với \"Yours faithfully,\". Nếu biết tên \"Dear Mr. Smith\" thì đi với \"Yours sincerely,\"."
  },
  {
    "id": "wl-off-9",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Kết Thư Thân Mật (Informal Letter)",
    "question": "Trong thư thân mật gửi bạn bè (Informal Letter), cách kết thư nào sau đây là phù hợp và tự nhiên nhất?",
    "options": [
      "Yours faithfully,",
      "Yours obediently,",
      "To whom it may concern,",
      "Best wishes,"
    ],
    "answer": 3,
    "explain": "Thư gửi bạn bè thân mật kết thúc bằng \"Best wishes,\" hoặc \"Warm regards,\". Các lựa chọn khác mang tính trang trọng hoặc công vụ."
  },
  {
    "id": "wl-off-10",
    "category": "writing-letter",
    "categoryName": "✉️ 7 Dạng Thư Task 1",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 1 — Mở Bài Thư Cảm Ơn",
    "question": "Câu mở bài nào sau đây phù hợp nhất cho Thư Cảm Ơn (Letter of Thanks) trong bài thi VSTEP Task 1?",
    "options": [
      "I am writing this letter to thank you very much for your wonderful help.",
      "I am writing to complain about your bad behavior.",
      "I want to apply for the position of manager.",
      "Can you give me some advice on how to learn English?"
    ],
    "answer": 0,
    "explain": "\"I am writing this letter to thank you very much for...\" là mẫu mở bài trực diện, lịch sự và đúng chuẩn B1 cho Thư Cảm Ơn."
  },
  {
    "id": "we-off-1",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Dạng Thuận Lợi & Bất Lợi (Advantages and Disadvantages)",
    "question": "Đề bài: \"What are the advantages and disadvantages of studying abroad?\" hoặc \"Do the advantages outweigh the disadvantages?\" Đây là dạng bài luận nào?",
    "options": [
      "Opinion (Trình bày Quan điểm cá nhân)",
      "Advantages and Disadvantages (Thảo luận Thuận lợi & Bất lợi)",
      "Causes – Effects – Solutions (Nguyên nhân, Hậu quả & Giải pháp)",
      "Discussion (Thảo luận 2 chiều)"
    ],
    "answer": 1,
    "explain": "Câu lệnh hỏi về advantages and disadvantages / benefits and drawbacks là Dạng Luận 1. Thí sinh cần phân tích cả mặt tích cực và tiêu cực."
  },
  {
    "id": "we-off-2",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Dạng Nguyên Nhân & Giải Pháp (Causes - Solutions)",
    "question": "Đề bài: \"Many young people are spending too much time on social media. What are the causes of this issue and suggest some practical solutions.\" Đây là dạng bài luận nào?",
    "options": [
      "Discussion (Thảo luận 2 chiều)",
      "Opinion (Trình bày Quan điểm cá nhân)",
      "Causes – Effects – Solutions (Nguyên nhân, Hậu quả & Giải pháp)",
      "Advantages and Disadvantages (Thuận lợi & Bất lợi)"
    ],
    "answer": 2,
    "explain": "Đề bài yêu cầu phân tích nguyên nhân (causes) và giải pháp (solutions) là Dạng Luận 2. Thân bài 1 viết nguyên nhân, Thân bài 2 viết giải pháp tương ứng."
  },
  {
    "id": "we-off-3",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Dạng Luận Quan Điểm (Opinion)",
    "question": "Đề bài kết thúc bằng: \"Do you agree or disagree with this statement?\" hoặc \"To what extent do you agree or disagree?\" Đây là dạng bài luận nào?",
    "options": [
      "Discussion (Thảo luận 2 chiều)",
      "Causes – Effects – Solutions (Nguyên nhân, Hậu quả & Giải pháp)",
      "Advantages and Disadvantages (Thuận lợi & Bất lợi)",
      "Opinion (Trình bày Quan điểm cá nhân)"
    ],
    "answer": 3,
    "explain": "Câu lệnh \"Do you agree or disagree\" là Dạng Luận Opinion (Dạng 3). Thí sinh cần nêu rõ quan điểm cá nhân đồng ý hay phản đối."
  },
  {
    "id": "we-off-4",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Dạng Luận Thảo Luận 2 Chiều (Discussion)",
    "question": "Đề bài có câu lệnh: \"Discuss both views and give your own opinion.\" Đây là dạng bài luận nào?",
    "options": [
      "Discussion (Thảo luận 2 chiều)",
      "Causes – Effects – Solutions (Nguyên nhân, Hậu quả & Giải pháp)",
      "Advantages and Disadvantages (Thuận lợi & Bất lợi)",
      "Letter of Advice (Thư cho lời khuyên)"
    ],
    "answer": 0,
    "explain": "Câu lệnh \"Discuss both views and give your opinion\" là Dạng Luận Discussion (Dạng 4). Bắt buộc Thân bài 1 bàn góc nhìn thứ nhất, Thân bài 2 bàn góc nhìn thứ hai, rồi chốt quan điểm cá nhân."
  },
  {
    "id": "we-off-5",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Dạng Đề Outweigh",
    "question": "Trong đề bài \"Do the advantages outweigh the disadvantages?\", yêu cầu quan trọng nhất của bài luận là gì?",
    "options": [
      "Bỏ qua phần bất lợi, chỉ viết về mặt thuận lợi",
      "Chuyển đề bài sang viết nguyên nhân và giải pháp",
      "Khẳng định hai mặt luôn luôn bằng nhau và không kết luận",
      "Phải so sánh và khẳng định rõ mặt nào chiếm ưu thế vượt trội hơn"
    ],
    "answer": 3,
    "explain": "Từ khóa \"outweigh\" đòi hỏi thí sinh phải so sánh và kết luận rõ ràng mặt lợi có lớn hơn mặt hại hay không."
  },
  {
    "id": "we-off-6",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1-B2",
    "topic": "Task 2 — Phân Biệt Discussion & Opinion",
    "question": "Điểm khác biệt cốt lõi nhất giữa dạng Discussion (\"Discuss both views\") và dạng Opinion (\"Do you agree or disagree\") là gì?",
    "options": [
      "Discussion chỉ viết 1 đoạn thân bài, Opinion viết 4 đoạn",
      "Opinion không cần câu Thesis Statement ở mở bài",
      "Discussion bắt buộc phải phân tích công bằng cả 2 góc nhìn của đề bài trước khi chốt quan điểm cá nhân",
      "Hai dạng này hoàn toàn giống nhau 100%"
    ],
    "answer": 2,
    "explain": "Discussion bắt buộc phải dành 1 đoạn thân bài phân tích quan điểm 1 và 1 đoạn phân tích quan điểm 2, sau đó mới đưa quan điểm cá nhân."
  },
  {
    "id": "we-off-7",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 2 — Từ Nối Đoạn Thân Bài 1",
    "question": "Từ nối nào sau đây thường dùng để mở đầu luận điểm thứ nhất trong đoạn Thân bài 1 của bài luận Task 2?",
    "options": [
      "In conclusion,...",
      "Suddenly,...",
      "However,...",
      "First of all,... / Firstly,..."
    ],
    "answer": 3,
    "explain": "\"First of all,...\" hoặc \"Firstly,...\" là từ nối thông dụng, chuẩn mực để giới thiệu ý chính đầu tiên trong thân bài."
  },
  {
    "id": "we-off-8",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 2 — Từ Nối Bổ Sung Ý Tưởng",
    "question": "Từ nối nào sau đây dùng để bổ sung thêm một ý tưởng mới trong cùng một đoạn thân bài?",
    "options": [
      "Furthermore,... / In addition,...",
      "On the contrary,...",
      "To finish my speech,...",
      "As a result of nothing,..."
    ],
    "answer": 0,
    "explain": "\"Furthermore,...\" hoặc \"In addition,...\" được dùng để nối thêm luận điểm bổ trợ trong đoạn văn."
  },
  {
    "id": "we-off-9",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 2 — Mở Đầu Đoạn Kết Bài",
    "question": "Cụm từ nào sau đây chuẩn mực và phổ biến nhất để bắt đầu đoạn Kết bài (Conclusion) trong bài luận Task 2?",
    "options": [
      "First of all,...",
      "In conclusion,... / To sum up,...",
      "For example,...",
      "Because of that,..."
    ],
    "answer": 1,
    "explain": "\"In conclusion,...\" hoặc \"To sum up,...\" là cụm từ chuyển đoạn chuẩn mực để thông báo bước vào phần kết bài."
  },
  {
    "id": "we-off-10",
    "category": "writing-essay",
    "categoryName": "📝 4 Dạng Luận Task 2",
    "skill": "Writing",
    "level": "B1",
    "topic": "Task 2 — Nhiệm Vụ Đoạn Kết Bài",
    "question": "Khi viết đoạn Kết bài (Conclusion) cho bài luận VSTEP Task 2, nhiệm vụ chính của thí sinh là gì?",
    "options": [
      "Đưa thêm 3 ý tưởng hoàn toàn mới chưa từng xuất hiện ở thân bài",
      "Kể một câu chuyện cá nhân dài dòng",
      "Đặt câu hỏi thách đố người chấm bài",
      "Khẳng định lại quan điểm cá nhân và tóm tắt ngắn gọn các ý chính đã nêu"
    ],
    "answer": 3,
    "explain": "Nhiệm vụ của Kết bài là khẳng định lại quan điểm và tóm tắt ý chính. Tuyệt đối không đưa thêm ý tưởng mới vào kết bài."
  }
];

  /**
   * Computes growth stage index (1..4) from progress percentage (0..100).
   */
  function getCloverStage(progress) {
    const p = Math.max(0, Math.min(100, progress || 0));
    if (p >= 80) return 5;
    if (p >= 60) return 4;
    if (p >= 40) return 3;
    if (p >= 20) return 2;
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

  const SUNFLOWER_DEW_GLINTS = {
    1: [
      { x: 42.5, y: 46.0, r: 1.6, d: '0s' }
    ],
    2: [
      { x: 36.5, y: 44.5, r: 1.5, d: '0s' },
      { x: 63.5, y: 37.0, r: 1.4, d: '1.2s' },
      { x: 63.5, y: 19.0, r: 1.2, d: '2.0s' }
    ],
    3: [
      { x: 35.5, y: 45.5, r: 1.5, d: '0s' },
      { x: 65.5, y: 35.5, r: 1.4, d: '1.2s' },
      { x: 59.5, y: 55.5, r: 1.3, d: '2.0s' }
    ],
    4: [
      { x: 38.5, y: 40.5, r: 1.6, d: '0s' },
      { x: 66.5, y: 28.5, r: 1.5, d: '1.0s' },
      { x: 32.5, y: 54.0, r: 1.4, d: '1.8s' },
      { x: 63.5, y: 60.5, r: 1.3, d: '2.4s' }
    ]
  };

  const TULIP_DEW_GLINTS = {
    1: [
      { x: 44.0, y: 45.0, r: 1.5, d: '0s' },
      { x: 54.5, y: 46.5, r: 1.3, d: '1.2s' }
    ],
    2: [
      { x: 38.0, y: 39.0, r: 1.5, d: '0s' },
      { x: 59.0, y: 35.0, r: 1.4, d: '1.0s' },
      { x: 49.0, y: 28.0, r: 1.3, d: '2.0s' }
    ],
    3: [
      { x: 37.0, y: 41.0, r: 1.5, d: '0s' },
      { x: 58.5, y: 36.5, r: 1.4, d: '1.2s' },
      { x: 48.0, y: 22.0, r: 1.6, d: '1.8s' }
    ],
    4: [
      { x: 38.0, y: 40.0, r: 1.5, d: '0s' },
      { x: 59.0, y: 38.0, r: 1.5, d: '0.8s' },
      { x: 43.5, y: 22.5, r: 1.7, d: '1.5s' },
      { x: 53.0, y: 24.0, r: 1.6, d: '2.2s' }
    ]
  };

  const CACTUS_DEW_GLINTS = {
    1: [
      { x: 48.0, y: 44.0, r: 1.4, d: '0s' },
      { x: 53.0, y: 47.0, r: 1.2, d: '1.2s' }
    ],
    2: [
      { x: 42.0, y: 38.0, r: 1.5, d: '0s' },
      { x: 58.0, y: 36.0, r: 1.4, d: '1.0s' },
      { x: 50.0, y: 28.0, r: 1.3, d: '2.0s' }
    ],
    3: [
      { x: 41.0, y: 38.0, r: 1.5, d: '0s' },
      { x: 58.0, y: 34.0, r: 1.4, d: '1.2s' },
      { x: 49.0, y: 20.0, r: 1.6, d: '1.8s' }
    ],
    4: [
      { x: 42.0, y: 40.0, r: 1.5, d: '0s' },
      { x: 58.0, y: 42.0, r: 1.5, d: '0.8s' },
      { x: 47.0, y: 22.0, r: 1.7, d: '1.5s' },
      { x: 54.0, y: 24.0, r: 1.6, d: '2.2s' }
    ]
  };

  const ROSE_DEW_GLINTS = {
    1: [
      { x: 45.0, y: 43.0, r: 1.4, d: '0s' },
      { x: 54.0, y: 46.0, r: 1.2, d: '1.2s' }
    ],
    2: [
      { x: 40.0, y: 36.0, r: 1.5, d: '0s' },
      { x: 58.0, y: 32.0, r: 1.4, d: '1.0s' },
      { x: 49.0, y: 25.0, r: 1.3, d: '2.0s' }
    ],
    3: [
      { x: 38.0, y: 38.0, r: 1.5, d: '0s' },
      { x: 58.0, y: 33.0, r: 1.4, d: '1.2s' },
      { x: 48.0, y: 19.0, r: 1.6, d: '1.8s' }
    ],
    4: [
      { x: 39.0, y: 38.0, r: 1.5, d: '0s' },
      { x: 58.0, y: 36.0, r: 1.5, d: '0.8s' },
      { x: 46.0, y: 20.0, r: 1.7, d: '1.5s' },
      { x: 54.0, y: 22.0, r: 1.6, d: '2.2s' }
    ]
  };

  /**
   * Renders the lifelike painterly potted flower stage with grounded shadow,
   * bottom-anchored organic wind sway, and synchronized morning dewdrop glints.
   * Supports 'clover', 'sunflower', 'tulip', 'cactus', and 'rose'.
   */
  function renderFlowerPotSvg(flowerId, progress) {
    const validFids = ['clover', 'sunflower', 'tulip', 'cactus', 'rose', 'lavender', 'daisy', 'succulent'];
    const fid = validFids.includes(flowerId) ? flowerId : 'clover';
    const stage = getCloverStage(progress);
    const glintsMap = (fid === 'sunflower')
      ? SUNFLOWER_DEW_GLINTS
      : (fid === 'tulip'
          ? TULIP_DEW_GLINTS
          : (fid === 'cactus'
              ? CACTUS_DEW_GLINTS
              : (fid === 'rose' ? ROSE_DEW_GLINTS : STAGE_DEW_GLINTS)));
    const glints = glintsMap[stage] || glintsMap[4] || glintsMap[1];

    const glintMarkup = glints.map((g) => `
      <g transform="translate(${g.x}, ${g.y})">
        <g class="clover-dew-glint" style="animation-delay: ${g.d};">
          <circle cx="0" cy="0" r="${(g.r * 1.35).toFixed(2)}" fill="#FFFFFF" opacity="0.45"/>
          <path d="M 0 ${(-g.r * 2.1).toFixed(2)} L ${(g.r * 0.45).toFixed(2)} ${(-g.r * 0.45).toFixed(2)} L ${(g.r * 2.1).toFixed(2)} 0 L ${(g.r * 0.45).toFixed(2)} ${(g.r * 0.45).toFixed(2)} L 0 ${(g.r * 2.1).toFixed(2)} L ${(-g.r * 0.45).toFixed(2)} ${(g.r * 0.45).toFixed(2)} L ${(-g.r * 2.1).toFixed(2)} 0 L ${(-g.r * 0.45).toFixed(2)} ${(-g.r * 0.45).toFixed(2)} Z"
                fill="#FFFFFF"/>
        </g>
      </g>
    `).join('');

    // Delicate sunlit fairy butterfly visiting the blooming Stage 5 clover
    const stage5Accents = (fid === 'clover' && stage === 5) ? `
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

    // 5 Growth Stages Asset Resolver
    // Stage 1 (0-19%): Sprout nestled in soil (stage_1.png compact)
    // Stage 2 (20-39%): Seedling rising tall (stage_1.png full)
    // Stage 3 (40-59%): Foliage growth & branching out (stage_2.png)
    // Stage 4 (60-79%): Bushy plant with budding flower (stage_3.png)
    // Stage 5 (80-100%): Full glorious blooming flower (stage_4.png)
    const stageImgMap = {
      1: `assets/garden/${fid}_stage_1.png`,
      2: `assets/garden/${fid}_stage_1.png`,
      3: `assets/garden/${fid}_stage_2.png`,
      4: `assets/garden/${fid}_stage_3.png`,
      5: `assets/garden/${fid}_stage_4.png`
    };
    const stageImgSrc = stageImgMap[stage] || `assets/garden/${fid}_stage_1.png`;

    const flowerNames = {
      sunflower: 'Hoa Hướng Dương Rực Rỡ',
      tulip: 'Hoa Tulip Kiêu Hãnh',
      cactus: 'Hoa Xương Rồng Kiên Cường',
      rose: 'Hoa Hồng Đỏ Khát Vọng',
      lavender: 'Hoa Oải Hương Tĩnh Tâm',
      daisy: 'Hoa Cúc Họa Mi Thuần Khiết',
      succulent: 'Sen Đá Ngọc Bền Bỉ',
      clover: 'Cỏ 4 Lá May Mắn'
    };
    const altText = `${flowerNames[fid] || 'Cây Vườn'} - Giai đoạn ${stage}/5`;

    return `
      <div class="clover-living-stage clover-stage-${stage} flower-type-${fid}" data-stage="${stage}" data-flower="${fid}">
        <div class="clover-ground-shadow" aria-hidden="true"></div>
        <div class="clover-aura-halo" aria-hidden="true"></div>
        <div class="clover-breeze-rig">
          <img src="${stageImgSrc}"
               alt="${altText}"
               class="clover-living-art"
               draggable="false" />
          <svg viewBox="0 0 100 100" class="clover-dew-overlay" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            ${glintMarkup}
            ${stage5Accents}
          </svg>
        </div>
      </div>
    `;
  }

  
  /**
   * Thuật toán chọn câu hỏi ôn thi VSTEP KHÔNG TRÙNG LẶP (Non-Repeating Quiz Engine)
   * Đảm bảo:
   * 1. Phân lập tiến độ câu hỏi theo từng tài khoản học viên (không bị ảnh hưởng bởi người khác).
   * 2. Tuyệt đối không lặp lại câu hỏi đã trả lời trong chu kỳ hiện tại.
   * 3. Hỗ trợ lọc theo danh mục cụ thể hoặc toàn bộ câu hỏi.
   * 4. Khi hoàn thành 100% câu hỏi trong danh mục, tự động khởi động chu kỳ mới
   *    nhưng giữ lại câu vừa làm gần nhất để không bao giờ bị trùng 2 câu liên tiếp!
   */
  function getQuizSeenStorageKey() {
    return 'miss_nguyet_quiz_seen_ids_v2_' + getActiveUserStorageSuffix();
  }

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
    const storageKey = getQuizSeenStorageKey();
    if (!seenIds && typeof window !== 'undefined' && window.localStorage) {
      try {
        const saved = localStorage.getItem(storageKey);
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
        localStorage.setItem(storageKey, JSON.stringify(currentSeen));
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
        const storageKey = getQuizSeenStorageKey();
        localStorage.removeItem(storageKey);
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
  root.TOEIC_OFFICIAL_STRATEGY_GUIDE = typeof TOEIC_OFFICIAL_STRATEGY_GUIDE !== 'undefined' ? TOEIC_OFFICIAL_STRATEGY_GUIDE : [];
  root.EXAM_QUIZ_QUESTIONS = EXAM_QUIZ_QUESTIONS;
  root.getNextNonRepeatingQuizQuestion = getNextNonRepeatingQuizQuestion;
  root.resetQuizSeenHistory = resetQuizSeenHistory;
  root.getCloverStage = getCloverStage;
  root.renderFlowerPotSvg = renderFlowerPotSvg;

})(typeof window !== 'undefined' ? window : global);
