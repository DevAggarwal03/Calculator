let display = document.getElementById("display");
let lastNum = 0;
let firstNum = 0;
let secondNum = "";
let num1 = [];
let operator;
let count = 1;

function allClear(){
    if(display.textContent == "Display")
        alert("enter a number first")
    display.textContent = "";
}
function back(){
    if(display.textContent == "Display")
        alert("enter a number first")
    num1.pop();
    display.textContent = num1.join("");
}
function percentage(){
    if(display.textContent == "Display")
        alert("enter a number first")
    firstNum = display.textContent;
    display.textContent = "";
    operator = "%";
}
function divide(){
    if(display.textContent == "Display")
        alert("enter a number first");
    firstNum = display.textContent;
    display.textContent = "";
    operator = "/";
}
function multiply(){
    if(display.textContent == "Display")
        alert("enter a number first")
    display.textContent = "";
    firstNum = display.textContent;
    display.textContent = "";
    operator = "*";
}
function minus(){
    if(display.textContent == "Display")
        alert("enter a number first")
    firstNum = display.textContent;
    display.textContent = "";
    operator = "-";
}
function plus(){
    if(display.textContent == "Display")
        alert("enter a number first")
    firstNum = display.textContent;
    display.textContent = "";
    operator = "+";
    num1 = [];
}
function equal(){
    if(display.textContent == "Display")
        alert("enter a number first")

    for(let i = 0; i < num1.length; i++){
        secondNum += num1[i];
    }

    display.textContent = "";
    secondNum = parseInt(secondNum);
    firstNum = parseInt(firstNum);
    console.log(secondNum, typeof secondNum)
    console.log(firstNum, typeof firstNum)
    if(operator == "+"){
        let res = firstNum + secondNum;
        // console.log(firstNum, typeof firstNum)
        // console.log(secondNum, typeof secondNum)
        // console.log(num1);
        // console.log(res, typeof res);
        display.textContent = `${res}`;
    }
    if(operator == "-"){
        let res = firstNum - secondNum;
        display.textContent = `${res}`;
    }
    if(operator == "*"){
        let res = firstNum * secondNum;
        display.textContent = `${res}`;
    }
    if(operator == "/"){
        let res = firstNum / secondNum;
        display.textContent = `${res}`;
    }
    if(operator == "%"){
        let res = (firstNum*secondNum)/100;
        display.textContent = `${res}`;
    }
}
function period(){
    if(display.textContent == "Display")
        alert("enter a number first")
    display.textContent += ".";
}
function zero(){
    if(display.textContent == "Display")
        display.textContent = "";
    display.textContent += "0";
    num1.push("0");
}
function one(){
    if(display.textContent == "Display")
        display.textContent = "";
    display.textContent += "1";
    num1.push("1");
}
function two(){
    if(display.textContent == "Display")
        display.textContent = "";
    display.textContent += "2";   
    num1.push("2");
}
function three(){
    if(display.textContent == "Display")
        display.textContent = "";
    display.textContent += "3";
    num1.push("3");
}
function four(){
    if(display.textContent == "Display")
        display.textContent = "";
    display.textContent += "4";
    num1.push("4");
}
function five(){
    if(display.textContent == "Display")
        display.textContent = "";
    display.textContent += "5";
    num1.push("5");
}
function six(){
    if(display.textContent == "Display")
        display.textContent = "";
    display.textContent += "6";
    num1.push("6");
}
function seven(){
    if(display.textContent == "Display")
        display.textContent = "";
    display.textContent += "7";
    num1.push("7");
}
function eight(){
    if(display.textContent == "Display")
        display.textContent = "";
    display.textContent += "8";
    num1.push("8");
}
function nine(){
    if(display.textContent == "Display")
        display.textContent = "";
    display.textContent += "9";
    num1.push("9");
}