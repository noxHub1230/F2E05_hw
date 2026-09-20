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
        <h1 class="groupTitle mainTitle">個人報名 Individual Registration</h1>
        <form>
            <fieldset class="group">
            <legend class="groupTitle">基本資料 / Basic Information</legend>
                <label for="name">姓名 / Name</label>
                    <input id="name" type="text" name="name" placeholder="請輸入姓名" required/>
                <fieldset>
                    <legend class="subTitle">性別 / Gender</legend>
                    <input id="male" type="radio" name="gender" value="male">
                    <label for="male">男 / Male</label>
                    <input id="female" type="radio" name="gender" value="female">
                    <label for="female">女 / Female</label>
                </fieldset>
                <fieldset>
                    <legend class="subTitle">國籍 / Nationality</legend>
                    <input id="roc" type="radio" name="nationality" value="roc"/>
                    <label for="roc">本國國籍 / ROC Citizens</label>
                    <input id="non" type="radio" name="nationality" value="non"/>
                    <label for="non">外國國籍 / Non-Citizens</label>
                </fieldset>
                <label for="id">身分證號 / ID Number</label>
                    <input id="id" type="text" name="id" placeholder="身分證或護照號碼" required/>
                <fieldset>
                    <legend class="subTitle">出生日期 / Date Of Birth</legend>
                    <select id="year" name="birthYear">
                        <option disabled selected>年 / Year</option>
                        <!--使用JS動態產生opt-->
                    </select>
                    <select id="month" name="birthMonth">
                        <option disabled selected>月 / Month</option>
                        <!--使用JS動態產生opt-->
                    </select>
                    <select id="day" name="birthDay">
                        <option disabled selected>日 / Day</option>
                        <!--使用JS動態產生opt-->
                    </select>
                </fieldset>
                <label for="email">電子信箱 / Email</label>
                    <input id="email" type="email" name="email" placeholder="example@mail.com" required/>
                <fieldset>
                    <legend class="subTitle">聯絡電話 / Contact Number</legend>
                    <label for="mob">手機 / Mobile</label>
                        <input id="mob" type="tel" name="mob" placeholder="0922053012"/>
                    <label for="tel">住家 / Home</label>
                        <input id="tel" type="tel" name="tel" placeholder="0225855659"/>
                    <label for="com">公司 /Office</label>
                        <input id="com" type="tel" name="com"/>
                </fieldset>
                <fieldset>
                    <legend class="subTitle">通訊地址 / Mailing Address</legend>
                    <select id="cty" name="cty">
                        <option value="" disabled selected>請選擇縣市別 County/City</option>
                        <!--使用JS動態產生opt-->
                    </select>    
                    <select id="town" name="town">
                        <option value="" disabled selected>請選擇鄉鎮區別 Township</option>
                        <!--使用JS動態產生opt-->
                    </select>  
                    <input id="mailId" type="text" name="mailId" inputmode="numeric" placeholder="郵遞區號"/>     
                    <input id="location" type="text" name="location" placeholder="例如：昌吉街55號2樓206室"/> 
                </fieldset>
                <fieldset>
                    <label for="emgcyContact">緊急聯絡人姓名 / Name of Emergency Contact</label>
                    <input id="emgcyContact" type="text" name="emgcyContact"/>
                    <label for="ship">關係 / Relationship</label>
                        <input id="ship" type="text" name="ship"/> 
                    <label for="phone">電話 / Phone</label>
                        <input id="phone" type="tel" name="phone"/>     
                </fieldset>            
            </fieldset>
            <fieldset class="group">
            <legend class="groupTitle">競賽項目資料 / Race Category Information</legend>
                <fieldset>
                    <input id="9km" type="checkbox" name="distance" value="9km"/>
                    <label for="9km">9KM (NTD 800)</label>
                    <select id="size9km" name="size9km">
                        <option disabled selected value="">請選擇衣服尺寸</option>
                        <!--使用JS動態產生元素-->
                    </select>
                </fieldset>
                <fieldset>
                    <input id="3km" type="checkbox" name="distance" value="3km"/>
                    <label for="3km">3KM (NTD 650)</label>
                    <select id="size3km" name="size3km">
                        <option disabled selected value="">請選擇衣服尺寸</option>
                        <!--使用JS動態產生元素-->
                    </select>
                </fieldset>
            </fieldset>
            <fieldset class="group">
                <legend class="groupTitle">報到方式(二擇一) / Check-in Method</legend>
                <label>郵寄代理報到 / Postal delivery check-in</label>
                <input id="Y" type="radio" name="posDelivery" value="Y"/>
                    <label for="Y">是 / Y (需額外付費，限台灣本島)</label>
                <input id="N" type="radio" name="posDelivery" value="N"/>
                    <label for="N">否 / N </label>
                <fieldset>
                    <input id="tpe1" type="radio" name="checkinPlace" value="tpe1"/>
                    <span>地點：花博爭豔館 (臺北市中山區玉門街1號)</span>
                    <span>時間：</span>
                    <input id="beginDate" type="date" name="beginDate"/>
                    <input id="endDate" type="date" name="endDate"/>
                </fieldset>
            </fieldset>
            <fieldset class="group">
                <legend class="groupTitle">其他 / Others</legend>
                <div class="container">
                    <label for="website">個人網站 / Website (選填)</label>
                    <input id="website" type="url" name="website" placeholder="https://"/>
                </div>
                <div class="container">
                    <label for="note">備註 / Note</label>
                    <textarea id="note" name="note" placeholder="如有特殊需求請於此說明" rows="4" cols="15"></textarea>
                </div>
                <div class="container">
                    <label for="pic">上傳證件照 / Upload Photo</label>
                    <input id="pic" type="file" accept="image/*"/> 
                </div>
            </fieldset>
            <button id="submitBtn" type="submit">送出報名</button>
            <button id="resetBtn" type="reset">清除重填</button>
        </form>
    </div>
    `
 }
];
export {homework};