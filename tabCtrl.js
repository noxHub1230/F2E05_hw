const homework=[
 {
    date:"909",
    html:`
    <table id="_sepNine">
        <caption>來來小吃店</caption>
        <tbody>
            <tr class="info">
                <td>品項</td>
                <td>單價</td>
                <td>乾</td>
                <td>湯</td>
            </tr>
            <tr>
                <td>陽春麵</td>
                <td>50元</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>餛飩麵</td>
                <td>65元</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>麻醬麵</td>
                <td>55元</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>牛肉麵</td>
                <td>120元</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        <tbody>
            <tr class="info">
                <td>品項</td>
                <td>小碗</td>
                <td>大碗</td>
                <td>數量</td>
            </tr>
            <tr>
                <td>滷肉飯</td>
                <td>35元</td>
                <td>50元</td>
                <td></td>
            </tr>
            <tr>
                <td>雞肉飯</td>
                <td>40元</td>
                <td>55元</td>
                <td></td>
            </tr>
            <tr>
                <td>排骨飯</td>
                <td colspan="2">90元</td>
                <td></td>
            </tr>
        </tbody>
        <tbody>
            <tr class="info">
                <td>品項</td>
                <td>單價</td>
                <td colspan="2">數量</td>
            </tr>
            <tr>
                <td>貢丸湯</td>
                <td>35元</td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td>魚丸湯</td>
                <td>35元</td>
                <td colspan="2"></td>

            </tr>
            <tr>
                <td>餛飩湯</td>
                <td>45元</td>
                <td colspan="2"></td>
            </tr>
        </tbody>
        <tbody>
            <tr class="info">
                <td>品項</td>
                <td>單價</td>
                <td colspan="2">數量</td>
            </tr>
            <tr>
                <td>燙青菜</td>
                <td>40元</td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td>皮蛋豆腐</td>
                <td>40元</td>
                <td colspan="2"></td>

            </tr>
            <tr>
                <td>滷蛋</td>
                <td>15元</td>
                <td colspan="2"></td>
            </tr>
        </tbody>
        <tbody>
            <tr class="info">
                <td rowspan="2">飲料</td>
                <td>紅茶</td>
                <td>奶茶</td>
                <td>豆漿</td>
            </tr>
            <tr>
                <td>25元</td>
                <td>35元</td>
                <td>30元</td>
            </tr>
        </tbody>
    </table>
    `,
 },   
 {
    date:"910",
    html:`
    <div id="sepTen">
    <div>
    `
 }
];
const content = document.querySelector("#content");
const nav = document.querySelector("nav");

let isSwitch = false;

function renderWork(targetWork) {
    //將標籤字元轉換成不會被解析渲染的字元代碼
    const srcCode = `<pre style="color:#000">${targetWork.html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
    }</pre>`;

    content.innerHTML = `
        <div>
            <button class="switchBtn">
                點擊切換渲染結果/原始碼
            </button>
            ${!isSwitch ? targetWork.html : srcCode}
        </div>
    `;//顯示渲染結果或原始碼

    const switchBtn = document.querySelector(".switchBtn");

    switchBtn.addEventListener("click", () => {
        isSwitch = !isSwitch;
        renderWork(targetWork);//使每次點擊都觸發重渲染(瀏覽器會在DOM變動時重渲染)
    });
}

nav.addEventListener("click", event => {
    const selectedBtn = event.target;//被點擊的那一個按鈕
    const activeBtn = document.querySelector("nav button.active");//選取所有帶.active的button
    if (activeBtn) {
        activeBtn.classList.remove("active");
    }//清空所有.active按鈕的.active

    selectedBtn.classList.add("active");//給選中按鈕設成.active樣式
    const targetWork = homework.find(
        item => item.date === selectedBtn.dataset.date
    );//在homeWork裡面找到對應日期的obj並回傳給targetWork(obj)

    if (targetWork) {
        isSwitch = false;
        renderWork(targetWork);
        content.style.background = "#ecc692";
    } else {
        content.innerHTML = "<p>~ 這裡空空如也 ~</p>";
    }
});