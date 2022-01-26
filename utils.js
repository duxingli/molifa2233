

//封装下拉框组件
function pulldownList(input,pulldown){
    // 当鼠标移动进入“选择结果区域”时，在年份下方弹出一个如图的面板，供具体年份选择，并且弹出面板中和选择结果区域值一样的部分加强显示；同时，选择结果区域样式发生改变
   pulldown.onmouseover = input.onmouseover = function(){
       pulldown.style.display = "flex";
       input.style.height = "44px";
       input.style.backgroundColor = "#fff";
       input.style.border = "1px #ccc solid";
       input.style.borderBottom = "none";
       input.style.borderRadius = "8px 8px 0 0";
   }
   //鼠标移动出 “选择结果区域”+“弹出面板” 时，弹出面板消失，选择结果区域样式恢复到默认态
   pulldown.onmouseout = input.onmouseout = function(){
       pulldown.style.display = "none";
       input.style.height = "40px";
       input.style.backgroundColor = "#eee";
       input.style.border = "none";
       input.style.borderRadius = "8px";
   }
}


// 封装表单动态添加元素的组件
function range(start, end,parentElement, sonElement,times){
    let eleArea = document.createDocumentFragment();
    for(let i=start; i <= end;i++){
        let newElement = document.createElement(sonElement);
        if(parentElement == time && sonElement == "span"){
            newElement.innerHTML = i;
        }
        else if (parentElement == provinceUl && sonElement == "li"){
            newElement.innerHTML = provinceData[i];
            newElement.style.textAlign = "center";
        }else if(parentElement == schoolNameUl && sonElement == "li"){
            newElement.innerHTML = school[times][i];
            newElement.style.width = "50%";
            newElement.style.textAlign = "center";
            newElement.className = "li"+`${times}`;
            if(times==0){
                newElement.style.display = "block";
            }else{
                newElement.style.display = "none";
            }
        }
        eleArea.appendChild(newElement);
    }
    parentElement.appendChild(eleArea);
}


// 封装提示组件
function tips(element,display,backgroundColor,innerHTML,time){
    element.style.display = display;
    element.style.backgroundColor = backgroundColor;
    element.children[0].innerHTML = innerHTML;
    setTimeout(function(){
        element.style.display = "none";
    },3000);
}