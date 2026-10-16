const TOCFL_A1_VOCAB = [
  { word: "先生", pinyin: "xiānsheng", meaning: "Ông, ngài, chồng" },
  { word: "小姐", pinyin: "xiǎojiě", meaning: "Cô, tiểu thư" },
  { word: "太太", pinyin: "tàitai", meaning: "Bà, phu nhân, vợ" },
  { word: "爸爸", pinyin: "bàba", meaning: "Bố, ba" },
  { word: "媽媽", pinyin: "māma", meaning: "Mẹ, má" },
  { word: "哥哥", pinyin: "gēge", meaning: "Anh trai" },
  { word: "姊姊", pinyin: "jiějie", meaning: "Chị gái" },
  { word: "弟弟", pinyin: "dìdi", meaning: "Em trai" },
  { word: "妹妹", pinyin: "mèimei", meaning: "Em gái" },
  { word: "家人", pinyin: "jiārén", meaning: "Người nhà, gia đình" },
  { word: "醫生", pinyin: "yīshēng", meaning: "Bác sĩ" },
  { word: "同伴", pinyin: "tóngbàn", meaning: "Bạn đồng hành" },
  { word: "客人", pinyin: "kèrén", meaning: "Khách, khách mời" },
  { word: "大家", pinyin: "dàjiā", meaning: "Mọi người" },
  { word: "早安", pinyin: "zǎo'ān", meaning: "Chào buổi sáng" },
  { word: "晚安", pinyin: "wǎn'ān", meaning: "Chúc ngủ ngon" },
  { word: "不客氣", pinyin: "bú kèqi", meaning: "Không cần khách sáo" },
  { word: "請進", pinyin: "qǐng jìn", meaning: "Xin mời vào" },
  { word: "請坐", pinyin: "qǐng zuò", meaning: "Xin mời ngồi" },
  { word: "喝水", pinyin: "hēshuǐ", meaning: "Uống nước" },
  { word: "咖啡", pinyin: "kāfēi", meaning: "Cà phê" },
  { word: "牛奶", pinyin: "niúnǎi", meaning: "Sữa bò" },
  { word: "果汁", pinyin: "guǒzhī", meaning: "Nước trái cây" },
  { word: "早餐", pinyin: "zǎocān", meaning: "Bữa sáng" },
  { word: "午餐", pinyin: "wǔcān", meaning: "Bữa trưa" },
  { word: "晚餐", pinyin: "wǎncān", meaning: "Bữa tối" },
  { word: "麵包", pinyin: "miànbāo", meaning: "Bánh mì" },
  { word: "牛肉麵", pinyin: "niúròumiàn", meaning: "Mì bò" },
  { word: "炒飯", pinyin: "chǎofàn", meaning: "Cơm chiên" },
  { word: "水餃", pinyin: "shuǐjiǎo", meaning: "Sủi cảo" },
  { word: "菜單", pinyin: "càidān", meaning: "Thực đơn" },
  { word: "好吃", pinyin: "hǎochī", meaning: "Ngon (ăn ngon)" },
  { word: "好喝", pinyin: "hǎohē", meaning: "Ngon (uống ngon)" },
  { word: "買單", pinyin: "mǎidān", meaning: "Tính tiền, thanh toán" },
  { word: "超商", pinyin: "chāoshāng", meaning: "Cửa hàng tiện lợi" },
  { word: "夜市", pinyin: "yèshì", meaning: "Chợ đêm" },
  { word: "百貨公司", pinyin: "bǎihuò gōngsī", meaning: "Trung tâm thương mại" },
  { word: "市場", pinyin: "shìchǎng", meaning: "Chợ" },
  { word: "現金", pinyin: "xiànjīn", meaning: "Tiền mặt" },
  { word: "信用卡", pinyin: "xìnyòngkǎ", meaning: "Thẻ tín dụng" },
  { word: "發票", pinyin: "fāpiào", meaning: "Hóa đơn (VAT)" },
  { word: "袋子", pinyin: "dàizi", meaning: "Túi, bao đựng" },
  { word: "打折", pinyin: "dǎzhé", meaning: "Giảm giá" },
  { word: "一會兒", pinyin: "yīhuǐr", meaning: "Một lát, một chốc" },
  { word: "昨天", pinyin: "zuótiān", meaning: "Hôm qua" },
  { word: "早上", pinyin: "zǎoshang", meaning: "Buổi sáng" },
  { word: "中午", pinyin: "zhōngwǔ", meaning: "Buổi trưa" },
  { word: "晚上", pinyin: "wǎnshang", meaning: "Buổi tối" },
  { word: "每天", pinyin: "měitiān", meaning: "Mỗi ngày" },
  { word: "去年", pinyin: "qùnián", meaning: "Năm ngoái" },
  { word: "明年", pinyin: "míngnián", meaning: "Năm sau" },
  { word: "幾點", pinyin: "jǐdiǎn", meaning: "Mấy giờ" },
  { word: "半小時", pinyin: "bàn xiǎoshí", meaning: "Nửa tiếng, 30 phút" },
  { word: "房間", pinyin: "fángjiān", meaning: "Phòng" },
  { word: "客廳", pinyin: "kètīng", meaning: "Phòng khách" },
  { word: "廚房", pinyin: "chúfáng", meaning: "Nhà bếp" },
  { word: "洗手間", pinyin: "xǐshǒujiān", meaning: "Nhà vệ sinh" },
  { word: "桌子", pinyin: "zhuōzi", meaning: "Cái bàn" },
  { word: "椅子", pinyin: "yǐzi", meaning: "Cái ghế" },
  { word: "冷氣", pinyin: "lěngqì", meaning: "Máy lạnh, điều hòa" },
  { word: "門口", pinyin: "ménkǒu", meaning: "Cổng, cửa ra vào" },
  { word: "計程車", pinyin: "jìchéngchē", meaning: "Xe taxi" },
  { word: "火車", pinyin: "huǒchē", meaning: "Tàu hỏa" },
  { word: "飛機", pinyin: "fēijī", meaning: "Máy bay" },
  { word: "機場", pinyin: "jīchǎng", meaning: "Sân bay" },
  { word: "悠遊卡", pinyin: "yōuyóukǎ", meaning: "Thẻ EasyCard (Đài Loan)" },
  { word: "走路", pinyin: "zǒulù", meaning: "Đi bộ" },
  { word: "左邊", pinyin: "zuǒbiān", meaning: "Bên trái" },
  { word: "右邊", pinyin: "yòubiān", meaning: "Bên phải" },
  { word: "前面", pinyin: "qiánmiàn", meaning: "Phía trước" },
  { word: "後面", pinyin: "hòumiàn", meaning: "Phía sau" },
  { word: "附近", pinyin: "fùjìn", meaning: "Gần đây, lân cận" },
  { word: "遠", pinyin: "yuǎn", meaning: "Xa" },
  { word: "近", pinyin: "jìn", meaning: "Gần" },
  { word: "鉛筆", pinyin: "qiānbǐ", meaning: "Bút chì" },
  { word: "原子筆", pinyin: "yuánzǐbǐ", meaning: "Bút bi" },
  { word: "作業", pinyin: "zuòyè", meaning: "Bài tập về nhà" },
  { word: "課本", pinyin: "kèběn", meaning: "Sách giáo khoa" },
  { word: "練習", pinyin: "liànxí", meaning: "Luyện tập" },
  { word: "複習", pinyin: "fùxí", meaning: "Ôn tập" },
  { word: "懂", pinyin: "dǒng", meaning: "Hiểu, rõ" },
  { word: "寫字", pinyin: "xiězì", meaning: "Viết chữ" },
  { word: "說話", pinyin: "shuōhuà", meaning: "Nói chuyện" },
  { word: "唱歌", pinyin: "chànggē", meaning: "Hát" },
  { word: "游泳", pinyin: "yóuyǒng", meaning: "Bơi lội" },
  { word: "爬山", pinyin: "páshān", meaning: "Leo núi" },
  { word: "打球", pinyin: "dǎqiú", meaning: "Chơi bóng" },
  { word: "拍照", pinyin: "pāizhào", meaning: "Chụp ảnh" },
  { word: "旅行", pinyin: "lǚxíng", meaning: "Du lịch" },
  { word: "看電影", pinyin: "kàn diànyǐng", meaning: "Xem phim" },
  { word: "天氣", pinyin: "tiānqì", meaning: "Thời tiết" },
  { word: "下雨", pinyin: "xiàyǔ", meaning: "Trời mưa" },
  { word: "晴天", pinyin: "qíngtiān", meaning: "Trời nắng" },
  { word: "冷", pinyin: "lěng", meaning: "Lạnh" },
  { word: "熱", pinyin: "rè", meaning: "Nóng" },
  { word: "生病", pinyin: "shēngbìng", meaning: "Bị ốm, bị bệnh" },
  { word: "看病", pinyin: "kànbìng", meaning: "Khám bệnh" },
  { word: "吃藥", pinyin: "chīyào", meaning: "Uống thuốc" },
  { word: "休息", pinyin: "xiūxi", meaning: "Nghỉ ngơi" },
  { word: "幫忙", pinyin: "bāngmáng", meaning: "Giúp đỡ" },
  { word: "學生", pinyin: "xuéshēng", meaning: "Học sinh, sinh viên" },
  { word: "老師", pinyin: "lǎoshī", meaning: "Thầy/cô giáo" },
  { word: "朋友", pinyin: "péngyǒu", meaning: "Bạn bè" },
  { word: "高興", pinyin: "gāoxìng", meaning: "Vui vẻ, hân hoan" },
  { word: "認識", pinyin: "rènshì", meaning: "Quen biết, nhận biết" },
  { word: "謝謝", pinyin: "xièxie", meaning: "Cảm ơn" },
  { word: "客氣", pinyin: "kèqi", meaning: "Khách sáo" },
  { word: "對不起", pinyin: "duìbuqǐ", meaning: "Xin lỗi" },
  { word: "沒關係", pinyin: "méiguānxi", meaning: "Không sao, không hề gì" },
  { word: "再見", pinyin: "zàijiàn", meaning: "Tạm biệt" },
  { word: "請問", pinyin: "qǐngwèn", meaning: "Xin hỏi" },
  { word: "名字", pinyin: "míngzi", meaning: "Tên" },
  { word: "國家", pinyin: "guójiā", meaning: "Quốc gia, đất nước" },
  { word: "臺灣", pinyin: "Táiwān", meaning: "Đài Loan" },
  { word: "越南", pinyin: "Yuènán", meaning: "Việt Nam" },
  { word: "學校", pinyin: "xuéxiào", meaning: "Trường học" },
  { word: "圖書館", pinyin: "túshūguǎn", meaning: "Thư viện" },
  { word: "宿舍", pinyin: "sùshè", meaning: "Ký túc xá" },
  { word: "教室", pinyin: "jiàoshì", meaning: "Phòng học" },
  { word: "吃飯", pinyin: "chīfàn", meaning: "Ăn cơm, dùng bữa" },
  { word: "喝茶", pinyin: "hēchá", meaning: "Uống trà" },
  { word: "買東西", pinyin: "mǎi dōngxi", meaning: "Mua sắm đồ đạc" },
  { word: "多少錢", pinyin: "duōshǎo qián", meaning: "Bao nhiêu tiền" },
  { word: "太貴了", pinyin: "tài guì le", meaning: "Đắt quá" },
  { word: "便宜", pinyin: "piányí", meaning: "Rẻ" },
  { word: "時間", pinyin: "shíjiān", meaning: "Thời gian" },
  { word: "今天", pinyin: "jīntiān", meaning: "Hôm nay" },
  { word: "明天", pinyin: "míngtiān", meaning: "Ngày mai" },
  { word: "現在", pinyin: "xiànzài", meaning: "Bây giờ, hiện tại" },
  { word: "點鐘", pinyin: "diǎnzhōng", meaning: "Giờ (đồng hồ)" },
  { word: "星期", pinyin: "xīngqí", meaning: "Tuần, thứ" },
  { word: "週末", pinyin: "zhōumò", meaning: "Cuối tuần" },
  { word: "喜歡", pinyin: "xǐhuān", meaning: "Thích" },
  { word: "運動", pinyin: "yùndòng", meaning: "Vận động, thể thao" },
  { word: "跑步", pinyin: "pǎobù", meaning: "Chạy bộ" },
  { word: "騎車", pinyin: "qíchē", meaning: "Đi xe, đạp xe" },
  { word: "看書", pinyin: "kànshū", meaning: "Đọc sách" },
  { word: "聽音樂", pinyin: "tīng yīnyuè", meaning: "Nghe nhạc" },
  { word: "電腦", pinyin: "diànnǎo", meaning: "Máy vi tính" },
  { word: "手機", pinyin: "shǒujī", meaning: "Điện thoại di động" },
  { word: "捷運", pinyin: "jiéyùn", meaning: "Tàu điện ngầm (MRT)" },
  { word: "公車", pinyin: "gōngchē", meaning: "Xe buýt" },
  { word: "車站", pinyin: "chēzhàn", meaning: "Trạm xe, nhà ga" },
  { word: "準備", pinyin: "zhǔnbèi", meaning: "Chuẩn bị" },
  { word: "考試", pinyin: "kǎoshì", meaning: "Kỳ thi, kiểm tra" },
  { word: "問題", pinyin: "wèntí", meaning: "Câu hỏi, vấn đề" },
  { word: "容易", pinyin: "róngyì", meaning: "Dễ dàng" },
  { word: "困難", pinyin: "kùnnán", meaning: "Khó khăn" },
  { word: "開始", pinyin: "kāishǐ", meaning: "Bắt đầu" },
  { word: "結束", pinyin: "jiéshù", meaning: "Kết thúc" }
];

let currentIndex = 0;
let isCollapsed = false;
let isAutoPlay = true;
let currentWidth = 210;
let autoPlayTimer = null;
const AUTO_PLAY_INTERVAL = 15000;
const DEFAULT_WIDTH = 210;
const MIN_WIDTH = 150;
const MAX_WIDTH = 450;

function initializeVocabExtension() {
  if (document.getElementById("tocfl-vocab-strip-host")) return;

  const host = document.createElement("div");
  host.id = "tocfl-vocab-strip-host";

  const shadow = host.attachShadow({ mode: "open" });

  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = chrome.runtime.getURL("sidebar.css");
  shadow.appendChild(styleLink);

  const container = document.createElement("div");
  container.className = "vocab-strip";

  container.innerHTML = `
    <div class="vocab-header" id="drag-handle">
      <span class="vocab-tag">TOCFL A1</span>
      <span class="vocab-counter" id="counter">1/${TOCFL_A1_VOCAB.length}</span>
      <button class="header-btn" id="toggle-btn" title="Thu nhỏ/Mở rộng">−</button>
    </div>
    <div class="vocab-body" id="vocab-body">
      <div class="word-row">
        <span class="word" id="word-text"></span>
        <span class="pinyin" id="pinyin-text"></span>
      </div>
      <div class="meaning" id="meaning-text"></div>
    </div>
    <div class="vocab-footer">
      <button class="action-btn active" id="autoplay-btn" title="Tự động chuyển từ">Auto: Bật</button>
      <div class="nav-buttons">
        <button class="nav-btn" id="prev-btn">‹</button>
        <button class="nav-btn" id="next-btn">›</button>
      </div>
    </div>
    <div class="resize-handle" id="resize-handle" title="Kéo để chỉnh kích thước (Nhấp đúp để về mặc định)"></div>
  `;

  shadow.appendChild(container);
  document.body.appendChild(host);

  const wordEl = container.querySelector("#word-text");
  const pinyinEl = container.querySelector("#pinyin-text");
  const meaningEl = container.querySelector("#meaning-text");
  const counterEl = container.querySelector("#counter");
  const vocabBody = container.querySelector("#vocab-body");
  const toggleBtn = container.querySelector("#toggle-btn");
  const prevBtn = container.querySelector("#prev-btn");
  const nextBtn = container.querySelector("#next-btn");
  const autoPlayBtn = container.querySelector("#autoplay-btn");
  const dragHandle = container.querySelector("#drag-handle");
  const resizeHandle = container.querySelector("#resize-handle");

  // --- CÁC HÀM CẬP NHẬT GIAO DIỆN ---
  function renderVocab(idx) {
    const validIdx = Math.max(0, Math.min(TOCFL_A1_VOCAB.length - 1, idx));
    const item = TOCFL_A1_VOCAB[validIdx];
    wordEl.textContent = item.word;
    pinyinEl.textContent = item.pinyin;
    meaningEl.textContent = item.meaning;
    counterEl.textContent = `${validIdx + 1}/${TOCFL_A1_VOCAB.length}`;
  }

  function applyCollapsedState(collapsed) {
    isCollapsed = collapsed;
    vocabBody.classList.toggle("collapsed", isCollapsed);
    toggleBtn.textContent = isCollapsed ? "+" : "−";
  }

  function applySize(width) {
    if (typeof width !== "number") return;
    const boundedWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, width));
    currentWidth = boundedWidth;
    const scale = (boundedWidth / DEFAULT_WIDTH).toFixed(2);
    container.style.width = `${boundedWidth}px`;
    container.style.setProperty("--scale", scale);
  }

  function applyPosition(pos) {
    if (!pos || typeof pos.left !== "number" || typeof pos.top !== "number") return;
    const boundedLeft = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, pos.left));
    const boundedTop = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, pos.top));
    container.style.left = `${boundedLeft}px`;
    container.style.top = `${boundedTop}px`;
    container.style.right = "auto";
  }

  function applyAutoPlayState(active) {
    isAutoPlay = active;
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }

    if (isAutoPlay) {
      autoPlayBtn.textContent = "Auto: Bật";
      autoPlayBtn.classList.add("active");
      autoPlayTimer = setInterval(() => {
        if (!document.hidden) {
          nextWord();
        }
      }, AUTO_PLAY_INTERVAL);
    } else {
      autoPlayBtn.textContent = "Auto: Tắt";
      autoPlayBtn.classList.remove("active");
    }
  }

  // --- CÁC HÀM XỬ LÝ SỰ KIỆN & LƯU TRỮ ---
  function nextWord() {
    currentIndex = (currentIndex + 1) % TOCFL_A1_VOCAB.length;
    renderVocab(currentIndex);
    chrome.storage.local.set({ currentIndex });
  }

  function prevWord() {
    currentIndex = (currentIndex - 1 + TOCFL_A1_VOCAB.length) % TOCFL_A1_VOCAB.length;
    renderVocab(currentIndex);
    chrome.storage.local.set({ currentIndex });
  }

  nextBtn.addEventListener("click", nextWord);
  prevBtn.addEventListener("click", prevWord);

  toggleBtn.addEventListener("click", () => {
    const newCollapsed = !isCollapsed;
    applyCollapsedState(newCollapsed);
    chrome.storage.local.set({ isCollapsed: newCollapsed });
  });

  autoPlayBtn.addEventListener("click", () => {
    const newAutoPlay = !isAutoPlay;
    applyAutoPlayState(newAutoPlay);
    chrome.storage.local.set({ isAutoPlay: newAutoPlay });
  });

  // --- XỬ LÝ KÉO THẢ VỊ TRÍ ---
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  dragHandle.addEventListener("mousedown", (e) => {
    if (e.target === toggleBtn) return;
    isDragging = true;
    const rect = container.getBoundingClientRect();
    startX = e.clientX - rect.left;
    startY = e.clientY - rect.top;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  function onMouseMove(e) {
    if (!isDragging) return;
    const newLeft = e.clientX - startX;
    const newTop = e.clientY - startY;

    const boundedLeft = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, newLeft));
    const boundedTop = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, newTop));

    container.style.left = `${boundedLeft}px`;
    container.style.top = `${boundedTop}px`;
    container.style.right = "auto";
  }

  function onMouseUp() {
    if (!isDragging) return;
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);

    const rect = container.getBoundingClientRect();
    chrome.storage.local.set({
      position: { left: rect.left, top: rect.top }
    });
  }

  // --- XỬ LÝ KÉO GIÃN / THU NHỎ KÍCH THƯỚC ---
  let isResizing = false;
  let startResizeX = 0;
  let startWidth = DEFAULT_WIDTH;

  resizeHandle.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    isResizing = true;
    startResizeX = e.clientX;
    startWidth = container.offsetWidth;
    document.addEventListener("mousemove", onResizeMove);
    document.addEventListener("mouseup", onResizeUp);
  });

  function onResizeMove(e) {
    if (!isResizing) return;
    const deltaX = e.clientX - startResizeX;
    applySize(startWidth + deltaX);
  }

  function onResizeUp() {
    if (!isResizing) return;
    isResizing = false;
    document.removeEventListener("mousemove", onResizeMove);
    document.removeEventListener("mouseup", onResizeUp);

    chrome.storage.local.set({ width: currentWidth });
  }

  // Nhấp đúp vào góc kéo để reset về kích thước mặc định (210px)
  resizeHandle.addEventListener("dblclick", (e) => {
    e.stopPropagation();
    applySize(DEFAULT_WIDTH);
    chrome.storage.local.set({ width: DEFAULT_WIDTH });
  });

  // --- ĐỌC DỮ LIỆU ĐÃ LƯU KHI MỞ TRANG / RELOAD ---
  chrome.storage.local.get(
    {
      currentIndex: 0,
      isCollapsed: false,
      isAutoPlay: true,
      position: null,
      width: DEFAULT_WIDTH
    },
    (data) => {
      currentIndex = data.currentIndex;
      renderVocab(currentIndex);
      applyCollapsedState(data.isCollapsed);
      applyAutoPlayState(data.isAutoPlay);
      applySize(data.width);
      if (data.position) {
        applyPosition(data.position);
      }
    }
  );

  // --- ĐỒNG BỘ TỨC THỜI GIỮA CÁC TAB ---
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== "local") return;

    if (changes.currentIndex !== undefined) {
      currentIndex = changes.currentIndex.newValue;
      renderVocab(currentIndex);
    }
    if (changes.isCollapsed !== undefined) {
      applyCollapsedState(changes.isCollapsed.newValue);
    }
    if (changes.isAutoPlay !== undefined) {
      applyAutoPlayState(changes.isAutoPlay.newValue);
    }
    if (changes.width !== undefined) {
      applySize(changes.width.newValue);
    }
    if (changes.position !== undefined) {
      applyPosition(changes.position.newValue);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeVocabExtension);
} else {
  initializeVocabExtension();
}