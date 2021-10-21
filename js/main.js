const buttonsNum = document.querySelectorAll(".btnNumber");
const buttonsFunc = document.querySelectorAll(".btnFunc");
const textArea = document.querySelector("#calculus");
const btnReset = document.querySelector(".btnReset");
const btnDel = document.querySelector(".btnDel");

let operationToDo = "";
let calculus = "";
let newValue = 0;

window.onload = () => textArea.value = "";

buttonsNum.forEach( x => x.addEventListener("click",function(){textArea.value += this.value; calculus += this.value}) );

btnReset.addEventListener("click",function(){
    textArea.value = "";
    textArea.placeholder = "";
    calculus = "";
});
btnDel.addEventListener("click",function(){
    if (textArea.value.length > -1){
        let str = textArea.value.toString().split("");
        str.pop();
        textArea.value = str.join("");
    }
});
buttonsFunc.forEach( x => x.addEventListener("click",function(){
    textArea.value = "";
    textArea.placeholder = eval(calculus);
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
    }
    let regex = /\d$/;
    regex.test(calculus) ? textArea.value = eval(calculus) : false;
}));