const buttonsNum = document.querySelectorAll(".btnNumber");
const buttonsFunc = document.querySelectorAll(".btnFunc");
const textArea = document.querySelector("#calculus");
const btnDel = document.querySelector(".btnDel");
window.onload = function(){textArea.value = ""; textArea.placeholder = "";};
let operationToDo = "";
let calculus = "";

buttonsNum.forEach( x => x.addEventListener("click",function(){
    textArea.value += this.value; 
    calculus += this.value; 
    buttonsFunc.forEach(x => x.classList.remove("disabled"));
}) );

btnDel.addEventListener("click",function(){
    if (textArea.value.length > -1){
        let str = textArea.value.toString().split("");
        str.pop();
        textArea.value = str.join("");
        textArea.placeholder = str.join("");
    }
});
buttonsFunc.forEach( x => x.addEventListener("click",function(){
    textArea.value = "";
    textArea.placeholder = eval(calculus);
    buttonsFunc.forEach(x => x.value != "Reset" ? x.classList.add("disabled") : false);
    switch (this.value){
        case "Add" :
            calculus += "+";
        break;
        case "Minus" :
            calculus += "-";
        break;
        case "Divide" :
            calculus = eval(calculus) + "/";
        break;
        case "Multiply" :
            calculus = eval(calculus) + "*";
        break;
        case "Result" :
            textArea.value = eval(calculus);
        break;
        case "Reset":
            textArea.value = "";
            textArea.placeholder = "";
            calculus = "";
        break;
    }
    let regex = /\d$/;
    regex.test(calculus) ? textArea.value = eval(calculus) : false;
}));