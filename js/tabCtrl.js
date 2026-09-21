import { generateData } from "./0918_data.js";
import { homework } from "./srcCodes.js";

const content = document.querySelector("#content");
const nav = document.querySelector("nav");
const form=document.querySelector("form");

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
    if(targetWork.date==="9月18日"&& !isSwitch){
        generateData();
    }

    const switchBtn = document.querySelector(".switchBtn");

    switchBtn.addEventListener("click", () => {
        isSwitch = !isSwitch;
        renderWork(targetWork);//使每次點擊都觸發重渲染(瀏覽器會在DOM變動時重渲染)
    });
}

homework.forEach(hw=>{
    const btn=document.createElement("button");
    btn.dataset.date=hw.date;
    btn.innerHTML=`<p>${hw.date}<br>${hw.title}</p>`;
    nav.appendChild(btn);
});

nav.addEventListener("click", event => {
    const selectedBtn = event.target.closest("button");//被點擊的那一個按鈕
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

///*監聽「使用者執行提交」這個事件(大約但不完全等於「點擊提交按鈕」)*/
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
// });
