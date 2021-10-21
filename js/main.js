const buttonsNum = document.querySelectorAll(".btnNumber");
const buttonsFunc = document.querySelectorAll(".btnFunc");
const textArea = document.querySelector("#calculus");
const btnReset = document.querySelector(".btnReset");
const btnDel = document.querySelector(".btnDel");
const btnResult = document.querySelector(".btnResult");

let operationToDo = "";
let previousvalue = 0;
let newValue = 0;

window.onload = () => textArea.value = "";

buttonsNum.forEach( x => x.addEventListener("click",function(){textArea.value += this.value}) );

btnReset.addEventListener("click",function(){
    textArea.value = "";
    previousvalue = 0;
    textArea.placeholder = "";
});
btnDel.addEventListener("click",function(){
    if (textArea.value.length > -1){
        let str = textArea.value.toString().split("");
        str.pop();
        textArea.value = parseFloat(str.join(""));
    }
});
buttonsFunc.forEach( x => x.addEventListener("click",function(){
    previousvalue = parseFloat(textArea.value);
    textArea.value = "";
    textArea.placeholder = previousvalue; 
    operationToDo = this.value;
}));

btnResult.addEventListener("click",function(){
    textArea.placeholder = previousvalue; 
    switch (operationToDo){
        case "Add" :
        textArea.value = parseFloat(previousvalue) + parseFloat(textArea.value);
        break;
        case "Minus" :
        textArea.value = parseFloat(previousvalue) - parseFloat(textArea.value);
        break;
        case "Divide" :
        textArea.value = parseFloat(previousvalue) / parseFloat(textArea.value);
        break;
        case "Multiply" :
        textArea.value = parseFloat(previousvalue) * parseFloat(textArea.value);
        break;
    }
});