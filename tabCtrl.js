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
    date:"918",
    html:`
    <div id="sepEighteenth">
        <h1>個人報名 Individual Registration</h1>
        <section>
        <h2>基本資料 / Basic Information</h2>
            <label for="name">姓名 / Name</label>
                <input id="name" type="text" name="name" placeholder="請輸入姓名" required></input>
            <label>性別 / Gender</label>
                <input id="male" type="radio" name="gender" value="male"></input>
                <label for="male">男 /Male</label>
                <input id="female" type="radio" name="gender" value="female"></input>
                <label for="female">女 /Female</label>
            <label>國籍 / Nationality</label>
                <input id="roc" type="radio" name="nationality" value="roc"></input>
                <label for="roc">本國國籍 / ROC Citizens</label>
                <input id="non" type="radio name="nationality" value="non"></input>
                <label for="non">外國國籍 / Non-Citizens</label>
            <label for="id">身分證號 / ID Number</label>
                <input id="id" type="text" name="id" placeholder="身分證或護照號碼" required></input>
            <label for="birthDate">出生日期 / Date Of Birth</label>
                <select id="year">
                    <option disabled selected>年 / Year</option>
                    <!--使用JS動態產生opt-->
                </select>
                <select id="month">
                    <option disabled selected>月 / Month</option>
                    <!--使用JS動態產生opt-->
                </select>
                <select id="day">
                    <option disabled selected>日 / Day</option>
                    <!--使用JS動態產生opt-->
                </select>
            <label for="email" required>電子信箱 / Email</label>
                <input id="email" type="email" name="email" placeholder="examplemail.com"></input>
            <label>聯絡電話 / Contact Number</label>
                <label for="mob">手機 / Mobile</label>
                    <input id="mob" type="number" name="mob" placeholder="0922053012"></input>
                <label for="tel">住家 / Home</label>
                    <input id="tel" type="number" name="tel" placeholder="0225855659"></input>
                <label for="com">公司 /Office</label>
                    <input id="com" type="number" name="tel></input>
            <label for="address">通訊地址 / Mailing Address</label>
                <select id="cty">
                    <option value="" selected>請選擇縣市別 County/City</value>
                    <!--使用JS動態產生opt-->
                </select>    
                <select id="cty">
                    <option value="" selected>請選擇縣市別 County/City</value>
                    <!--使用JS動態產生opt-->
                </select>  
                <input id="mailId" type="number" name="mailId" placeholder="郵遞區號"></input>     
                <input id="location" type="text" name="location" placeholder="例如：昌吉街55號2樓206室"></input> 
            <label for="emgcyContact">緊急聯絡人姓名 / Name of Emergency Contact</label>
                <input id="emgcyContact" type="text" name="emgcyContact"></input>
            <label for="ship">關係 / Relationship</label>
                <input id="ship" type="text" name="ship"></input> 
            <label for="phone">電話 / Phone</label>
                <input id="phone" type="number" name="phone"></input>     
        </section>
        <section>
        <h2>競賽項目資料 / Race Category Information</h2>
        </section>
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