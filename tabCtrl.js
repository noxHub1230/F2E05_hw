const homework=[
 {
    date:909,
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
    date:910,
    html:`
    <div id="sepTen">
    <div>
    `
 }
];
const content=document.querySelector("#content");
const navButtons=document.querySelectorAll("nav button");
let targetdate=null;
let targetwork=null;
navButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const activedBtn=document.querySelector("nav button.active");
        if (activedBtn){
            activedBtn.classList.remove("active");
        }
        btn.classList.add("active");
        switch(btn.dataset.date){
            case "Sep_9":
                targetdate=909;
                break;
            case "Sep_10":
                targetdate=910;
                break;
            default:
                targetdate=null;
        }
        targetwork=homework.find(item=>item.date===targetdate);
        if (targetwork) {
            content.innerHTML = targetwork.html;
            content.style.background = "#ecc692";
        } else {
            content.innerHTML = "<p>~ 這裡空空如也 ~</p>";
        }
    })
});
// const btn_sepNine=document.querySelector("#sepNine");
// let targetwork=null;
// btn_sepNine.addEventListener('click',()=>{
//     targetwork=homework.find(items=>items.date===909);
//     content.innerHTML=targetwork.html;
//     content.style.background="#ecc692";
// });

