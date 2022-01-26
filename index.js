//第一步 静态页面完成
       
//第二步  课程 tab
let span = document.querySelectorAll(".tab span");
let ul = document.querySelector(".course");
let allList = document.querySelectorAll(".container span");
let htmlList = document.querySelectorAll(".container .html");
let cssList = document.querySelectorAll(".container .css");
let jsList = document.querySelectorAll(".container .js");
let obj = {
    0:allList,
    1:htmlList,
    2:cssList,
    3:jsList
}
//默认 全部的html和样式
span[0].style.fontWeight = "bold";
span[0].style.borderBottom = "2px solid #000";
span[0].style.color = "#000"
for(let i=0,len=span.length;i<len;i++){
    span[i].onclick = function(){
        //清除所有样式
        for(let j=0; j < len;j++){
            span[j].setAttribute("class","");
            span[j].style.fontWeight = "400";
            span[j].style.borderBottom = "2px solid #ccc";
            span[j].style.color = "#ccc"
        }
        //清除所有 li
        ul.innerHTML = "";
        // 添加选择样式
        if(!span[i].getAttribute("class")){
            span[i].setAttribute("class","active")
            span[i].style.fontWeight = "bold";
            span[i].style.borderBottom = "2px solid #000";
            span[i].style.color = "#000"
        }
        // 添加选择 li
        for(let j=0,len=obj[i].length; j<len;j++){
            console.log(j);
            let newLi = obj[i][j].parentNode.parentNode;
            ul.appendChild(newLi);
        }  
    }
}     

//第三步 选择入学年份

let selectYear = document.querySelector(".selectYear");
let time = document.querySelector(".time");
pulldownList(selectYear,time)
// 设置变量进行配置 年份可选择的范围
let start = 2010,end = 2021;
range(start,end,time,"span");



// 获取动态添加的结点并进行点击的样式处理
let spans = document.querySelectorAll(".time span");
let pre=0;
for(let i=0,len=spans.length; i < len;i++){
    spans[i].onclick = function(){
        selectYear.value = spans[i].innerHTML;
        time.style.display = "none";
        spans[i].style.fontWeight = "bold";
        if(selectYear.value == "" || selectYear.value != spans[pre].innerHTML){
            spans[pre].style.fontWeight = "normal";
            pre = i;
        }
    }
}



// 第四步 选择大学

// 示例14个省份
let provinceUl = document.querySelector(".province"); 
let schoolNameUl = document.querySelector(".schoolName");
let school = [
    ["北京大学","清华大学","中国人民大学","北京航空航天大学","北京师范大学","北京理工大学","中国农业大学","北京科技大学","北京交通大学","北京邮电大学","北京工业大学耿丹学院","北京邮电大学世纪学院","首都师范大学科德学院","北京工商大学嘉华学院","北京第二外国语学院中瑞酒店管理学院","北京城市学院","北京吉利学院"],["中国科学技术大学","合肥工业大学","安徽大学","安徽师范大学","安徽农业大学","安徽建筑大学","安徽理工大学","安徽财经大学","合肥学院","安徽建筑大学城市建设学院","安徽大学江淮学院","安徽师范大学院江学院","安徽财经大学商学院","阜阳师范大学信息工程学院","安徽农业大学经济技术学院","安徽医科大学临床医学院","淮北师范大学信息学院","安徽新华学院","安徽三联学院","皖江工学院","安徽信息工程学院","安徽文达信息工程学院","安徽外国语学院","马鞍山学院"],[ "厦门大学","福州大学","福建农林大学","福建师范大学","华侨大学","集美大学","福建工程学院","闽南师范大学","闽江学院","厦门理工学院","厦门大学嘉庚学院","集美大学诚毅学院","福建师范大学协和学院","福州大学至诚学院福建农林大学金山学院","福州外语外贸学院","阳光学院","仰恩大学","闽南理工学院","厦门工学院","福州工商学院","闽南科技学院","福州理工学院","泉州信息工程学院","厦门华厦学院"],[ "贵州大学","贵州师范大学","贵州民族大学","贵州财经大学","道义师范学院","贵州师范学院","贵阳学院","凯里学院","黔南民族师范学院","铜仁学院","贵州大学明德学院","贵州大学科技学院","贵州陵范大学求是学院","贵州中医药大学时珍学院","贵州财经大学商务学院","贵州民族大学人文科技学院","贵州医科大学神奇民族医药学院","遵义医科大学医学与科技学院"],["燕山大学","河北大学机","河北工业大学","河北农业大学","河北师范大学","石家庄铁道大学","河北科技大学","河北经贸大学","河北工程大学","华北理工大学","燕山大学里仁学院","河北工业大学城市学院","河北大学工商学院","华北理工大学轻工学院","北京中医药大学东方学院","北京交通大学海滨学院","湖北农业大学现代科技学院","河北经贸大学经济管理学院","河北科技大学理工学院","河北医科大学临床学院","河北化媒学院","河北科技学院","燕京理工学院","保定理工学院","河北工程技术学院","河北美术学院","河北外国语学院","河北东方学院"],["郑州大学","河南大学","河南科技大学","河南师范大学","河南农业大学","河南理工大学","河南工业大学","河南财经政法大学","郑州轻工业大学","华北水利水电大学","河南师范大学新联学院","河南大学民生学院","中原工学院信息商务学院","新乡医学院三全学院","河南科技学院新科学院","郑州工商学院","黄河科技学院","商丘学院","安阳学院","郑州西亚斯学院","郑州工业应用技术学院","郑州科技学院","郑州开达经贸管理学院","郑州商学院"],["哈尔滨工业大学","哈尔滨工程大学","东北林业大学","黑龙江大学","东北农业大学","哈尔滨理工大学","哈尔滨师范大学","东北石油大学","哈尔滨商业大学","齐齐哈尔大学","黑龙江工程学院昆仑旅游学院","黑龙江财经学院国","黑龙江外国语学院","哈尔滨华德学院","黑龙江东方学院","哈尔滨石油学院","齐齐哈尔工程学院","哈尔滨剑桥学院","黑龙江工商学院","哈尔滨广厦学院","哈尔滨远东理工学院"],["华中科技大学","武汉大学","华中农业大学","华中师范大学","武汉理工大学","中南财经政法大学","中国地质大学(武汉)","武汉科技大学","中南民族大学","湖北大学","武汉科技大学城市学院","湖北精范大学文理学院","湖北经济学院法商学院","长江大学工程技术学院","湖北大学知行学院","三峡大学科技学院","湖北工业大学工程技术学院","江汉大学文理学院","武汉工程大学邮电与信息工程学院","长江大学文理学院","武昌首义学院","文华学院","武汉学院","汉口学院","武汉工商学院","武汉华夏理工学院","湖北商贸学院","武昌理工学院","武汉东湖学院","武汉晴川学院"],["中南大学","湖南大学","湖南师范大学","湘潭大学","湖南农业大学","长沙理工大学","湖南科技大学","中南林业科技大学","湖南工商大学","南华大学","湘潭大学兴湘学院","湖南工商大学北津学院","长沙理工大学城南学院","中南林业科技大学涉外学院","湖南农业大学东方科技学院","湖南师范大学树达学院","南华大学船山学院","湖南科技大学潇湘学院","湖南工业大学科技学院","吉首大学张家界学院","湖南涉外经济学院","长沙医学院","湖南信息学院","湖南应用技术学院","湖南交通工程学院"],["吉林大学","东北师范大学","长春理工大学","东北电力大学","吉林农业大学","延边大学","北华大学","长春工业大学","吉林财经大学","吉林师范大学","长春理工大学光电信息学院","东北顺范大学人文学院","长春工业大学人文信息学院","长春大学旅游学院","吉林师范大学博达学院","吉林外国语大学","长春财程学院","长春光华学院","吉林建筑科技学院","长春建筑学院","吉林动酒学院","长春科技学院"],["南京大学","东南大学","河海大学","南京农业大学","南京理工大学","南京航空航天大学","苏州大学","南京师范大学","中国矿业大学","江南大学","南京理工大学泰州科技学院","东南大学成贤学院","南京大学金陵学院","南京航空航天大学金城学院","中国传媒大学南广学院","南京师范大学泰州学院","苏州科技大学天平学院","南京邮电大学通达学院","苏州大学文正学院","南京理工大学紫金学院","三江学院","无锡太湖学院","宿迁学院","南通理工学院"],["南昌大学","江西师范大学","江西财经大学","江西理工大学","江西农业大学","南昌航空大学","华东交通大学","景德镇陶瓷大学","东华理工大学","赣南师范大学","南昌大学科学技术学院","华东交通大学理工学院","江西师范大学科学技术学院","江西财经大学现代化经济管理学院","南昌大学共青学院","江西理工大学应用科学学院","东华理工大学长江学院","南昌航空大学科技学院","江西农业大学南昌商学院","江西中医药大学科技学院","江西科技学院","南昌理工学院","南昌工学院","江西服装学院","江西工程学院","江西应用科技学院"],["东北大学","大连理工大学","辽宁大学","东北财经大学","大连海事大学","沈阳农业大学","辽宁工程技术大学","大连大学","辽宁师范大学","沈阳工业大学","大连理工大学城市学院","大连医科大学中山学院","辽宁中医药大学吉林学院","大连工业大学艺术与信息工程学院","辽宁师范大学海华学院","锦州医科大学医疗学院","辽宁石油化工大学顺华能源学院","中国医科大学临床医药学院","沈阳工业大学工程学院","沈阳航空航天大学北方科技学院","沈阳城市学院","大连东软信息学院","大连科技学院","辽宁对外经贸学院","沈阳工学院","辽宁财贸学院","大连艺术学院","大连财经学院","沈阳科技学院","辽宁何氏医学院"],["山东大学","中国海洋大学","中国石油大学(华东)","齐鲁工业大学","山东师范大学","山东农业大学","山东科技大学","山东财经大学","青岛大学","济南大学","北京电影学院现代创意媒体学院","中国石油大学胜利学院","山东财经大学燕山学院","青岛理工大学琴岛学院","烟台大学文经学院","山东财经大学东方学院","聊城大学东昌学院","济南大学泉城学院","青岛农业大学海都学院","山东科技大学泰山科技学院","山东英才学院","山东协和学院","齐鲁理工学院","青岛滨海学院","青岛黄海学院","潍坊科技学院","青岛工学院","烟台南山学院","齐鲁医药学院"]]
let provinceData = ["北京市","安徽省","福建省","贵州省","河北省","河南省","黑龙江省","湖北省","湖南省","吉林省","江苏省","江西省","辽宁省","山东省"]
let college = document.querySelector(".college")
let selectSchool = document.querySelector(".selectSchool");
pulldownList(selectSchool,college)
range(0,13,provinceUl,"li");
// college.onblur();
college.onfocus = function(){
    this.style.border = "none";
    this.style.borderStyle = "outset";
}
college.onblur = function(){
    this.style.borderStyle = "inset";
}


for(let i=0,provinceLen=provinceData.length;i<provinceLen;i++){
    let key = provinceData[i]
    let schoolLen = school[i].length;
    range(0,schoolLen-1,schoolNameUl,"li",i);
}
let provinceLi =  document.querySelectorAll(".province li");
let schoolLi = document.querySelectorAll(".schoolName li");
provinceLi[0].style.fontWeight = "bold";   
// 记录点击省份和学校，便于清除上一个的样式
let preData = {
    preI:0,
    preJ:0
}
for(let i=0,provinceLen=provinceData.length;i<provinceLen;i++){
    let currentSchoolLi = document.querySelectorAll(".li"+`${i}`);
    let schoolLen = currentSchoolLi.length;
    //点击省份
    provinceLi[i].onclick = function(){
        provinceLi[i].style.fontWeight = "bold";
        if(i!=preData.preI){
            // 记录前一个省份 便于清除样式
            provinceLi[preData.preI].style.fontWeight = "normal";
            preData.preI = i;  
        }
        // 每次将所有的大学置为不可见
        for(let k=0,len=schoolLi.length;k<len;k++){
            schoolLi[k].style.display = "none";
        }
        // 将所选省份的大学置为可见
        for(let k=0;k<schoolLen;k++){
            currentSchoolLi[k].style.display = "block";
            currentSchoolLi[k].style.fontWeight = "normal";
        }
    }
    for(let j=0;j<schoolLen;j++){
        currentSchoolLi[j].onclick = function(){
            currentSchoolLi[j].style.fontWeight = "bold";
            selectSchool.value = currentSchoolLi[j].innerHTML;
            college.style.display = "none";
            if(currentSchoolLi[j].innerHTML != school[i][preData.preJ]){
                currentSchoolLi[preData.preJ].style.fontWeight = "normal";
                preData.preJ = j;
            }
        }
    }
}



// 第五步 验证信息

let button =  document.querySelector(".btn");
let selectEmail = document.querySelector(".selectEmail");
let regEmail = new RegExp(/^[a-z0-9_\.-]{3,15}@[a-z]{2,5}\.[a-z]{2,6}/)

let table = document.querySelector(".table");
let feedback = document.querySelector(".feedback")
let tip = document.querySelector(".tip");
let signUp = document.querySelector(".signUp");
let complete = document.querySelector(".complete");
let schoolVal;
let yearVal;
let emailVal;

let contentObj = {
    "ok":"恭喜您，来自选中示例大学2020级someemail.com同学，您的报名信息已记录，请关注您的邮件",
    "no":"邮箱地址不符合要求(yourname@host.com),请重新输入"
}
button.onclick = function submit(){
    schoolVal = selectSchool.value;
    yearVal = selectYear.value;
    emailVal = selectEmail.value;
    let emailBool =  regEmail.test(emailVal);
    if(schoolVal !== "" && yearVal !== "" && emailBool){
        table.style.display = "none";
        complete.style.display = "block";
        signUp.style.height = "80px";
        tips(feedback,"block","#a1ff83",contentObj.ok,5000)
    }else{
        tips(feedback,"block","#a1ff83",contentObj.no,3000)
    }
}
let reSignUp = document.querySelector(".reSignUp");
reSignUp.onclick = function(){
    signUp.style.height = "120px";
    table.style.display = "flex";
    complete.style.display = "none";
    feedback.style.display = "none";
    // 修改默认值
    selectSchool.value = schoolVal;
    selectYear.value = yearVal;
    selectEmail.value = emailVal;
}