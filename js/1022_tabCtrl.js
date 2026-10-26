const tabItems = document.querySelector(".tab-items");
const tabContent = document.querySelector(".tab-content");

// 「航班」標籤的表單內容
const flightForm = `
<form class="flight-form">
    <div class="form-input has-icon">
        <i class="iconoir-data-transfer-both lead-icon"></i>
        <select id="trip-type" aria-label="行程類型">
            <option>來回</option>
            <option>單程</option>
        </select>
        <i class="iconoir-nav-arrow-down select-arrow"></i>
    </div>

    <div class="form-group route-group">
        <div class="form-input">
            <input id="start-point" type="text" placeholder="出發地">
        </div>
        <button type="button" class="formBtn" aria-label="交換出發地與目的地">
            <i class="iconoir-data-transfer-both"></i>
        </button>
        <div class="form-input">
            <input id="end-point" type="text" placeholder="目的地">
        </div>
    </div>

    <div class="form-group date-group">
        <div class="form-input">
            <label class="form-label" for="depart-date">去程出發日期</label>
            <input id="depart-date" type="date">
        </div>
        <i class="iconoir-arrow-right date-arrow"></i>
        <div class="form-input">
            <label class="form-label" for="return-date">回程出發日期</label>
            <input id="return-date" type="date">
        </div>
    </div>

    <div class="form-input">
        <label class="form-label" for="passengers">旅客人數</label>
        <select id="passengers">
            <option>1成人 0兒童 0嬰兒</option>
            <option>2成人 0兒童 0嬰兒</option>
            <option>2成人 1兒童 0嬰兒</option>
        </select>
        <i class="iconoir-nav-arrow-down select-arrow"></i>
    </div>

    <div class="form-bottom">
        <a class="promo-link" href="#"><i class="iconoir-percentage-circle"></i>加入促銷代碼</a>
        <button type="submit" class="search-btn">搜尋</button>
    </div>
</form>`;

// 標籤資料：要新增標籤，只要多加一個物件即可
// mobileOnly: true 代表只在手機版顯示
const tabData = [
    { name: "航班",   icon: "iconoir-airplane",    mobileOnly: false, content: flightForm },
    { name: "樂虎卡", icon: "iconoir-credit-card", mobileOnly: true,  content: `<p class="tab-empty">樂虎卡內容建置中</p>` },
    { name: "虎加酒", icon: "iconoir-building",    mobileOnly: false, content: `<p class="tab-empty">虎加酒內容建置中</p>` },
    { name: "虎里轉", icon: "iconoir-map-pin",     mobileOnly: false, content: `<p class="tab-empty">虎里轉內容建置中</p>` }
];

// 依照 tabData 產生標籤
tabData.forEach((tab, index) => {
    const li = document.createElement("li");
    li.className = "tab-item";
    if (tab.mobileOnly) {
        li.classList.add("mobile-only");
    }
    li.dataset.index = index;
    li.innerHTML = `<i class="${tab.icon}"></i>${tab.name}`;
    tabItems.appendChild(li);
});

// 點擊標籤：切換 .tab_active 與對應內容
tabItems.addEventListener("click", (event) => {
    const clickedTab = event.target.closest(".tab-item");
    if (!clickedTab) return;

    const oldActive = tabItems.querySelector(".tab_active");
    if (oldActive) {
        oldActive.classList.remove("tab_active");
    }
    clickedTab.classList.add("tab_active");

    tabContent.innerHTML = tabData[clickedTab.dataset.index].content;
});

// 預設顯示第一個標籤
tabItems.firstElementChild.classList.add("tab_active");
tabContent.innerHTML = tabData[0].content;

// 交換出發地與目的地（內容每次會重新產生，所以監聽綁在外層 tabContent）
tabContent.addEventListener("click", (event) => {
    if (!event.target.closest(".formBtn")) return;

    const startInput = document.querySelector("#start-point");
    const endInput = document.querySelector("#end-point");
    const temp = startInput.value;
    startInput.value = endInput.value;
    endInput.value = temp;
});

// 暫時阻止表單送出後頁面重新整理
tabContent.addEventListener("submit", (event) => {
    event.preventDefault();
});