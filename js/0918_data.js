import { location , sizes } from "./formOptMockData.js";

const year=[];
const month=[];
const day=[];

for (let i=1985;i<2015;i++){
    year.push(i);
}
for (let i=1;i<13;i++){
    month.push(i);
}
for (let i=1;i<32;i++){
    day.push(i);
}

export function generateData(){
    console.log("generateData 開始");
    const yearList=document.querySelector("#year");
    const monthList=document.querySelector("#month");
    const dayList=document.querySelector("#day");
    const ctyList=document.querySelector("#cty");
    const townList=document.querySelector("#town");
    const size9km=document.querySelector("#size9km");
    const size3km=document.querySelector("#size3km");

    year.forEach(element=>{
        const opt=document.createElement("option");
        opt.textContent=element;
        opt.value=element;
        yearList.appendChild(opt);
    });

    month.forEach(element=>{
        const opt=document.createElement("option");
        opt.textContent=element;
        opt.value=element;
        monthList.appendChild(opt);
    });

    yearList.addEventListener("change",()=>{dayJudge(yearList,monthList,dayList)});
    monthList.addEventListener("change",()=>{dayJudge(yearList,monthList,dayList)});

    location.forEach(element=>{
        const opt=document.createElement("option");
        opt.textContent=element.cty;
        opt.value=element.cty;
        ctyList.appendChild(opt);
    });

    ctyList.addEventListener("change",(e)=>{
      townList.innerHTML="<option disabled selected>請選擇鄉鎮區別 Township</option>";
      if(ctyList.value!==""){
          const targetTownList=location.find(item=>ctyList.value===item.cty).town;
          targetTownList.forEach(element=>{
              const opt=document.createElement("option");
              opt.textContent=element;
              opt.value=element;
              townList.appendChild(opt);
          });    
      }
    });

    sizes.forEach(element=>{
        const opt=document.createElement("option");
        opt.textContent=element;
        opt.value=element;
        size9km.appendChild(opt);
        const opt2=document.createElement("option");
        opt2.textContent=element;
        opt2.value=element;
        size3km.appendChild(opt2);
    });
}
function dayJudge(yearList, monthList, dayList) {
    dayList.innerHTML = "<option disabled selected>日 / Day</option>";

    const year = Number(yearList.value);
    const month = monthList.value;
    const isLeapYear =(year % 4 === 0 && year % 100 !== 0) ||year % 400 === 0;

    day.forEach(element => {
        const opt = document.createElement("option");
        opt.textContent = element;
        opt.value = element;

        //2月判斷
        if (month === "2") {
            if (!isLeapYear && element >= 29) {
                return;
            }
            if (isLeapYear && element >= 30) {
                return;
            }
        }

        //4、6、9、11月判斷
        if (
            (month === "4" ||
             month === "6" ||
             month === "9" ||
             month === "11") &&
            element === 31
        ) {
            return;
        }

        dayList.appendChild(opt);
    });
}