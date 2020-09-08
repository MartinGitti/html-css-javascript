// Function below to calculate all inputs on HTML page.
function calculate() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let oper = document.getElementById("operators").value;

    if(oper === "+") {
        document.getElementById("result").value = num1 + num2;
    }
    if(oper === "-") {
        document.getElementById("result").value = num1 - num2;
    }
    if(oper === "*") {
        document.getElementById("result").value = num1 * num2;
    }
    if(oper === "/") {
        document.getElementById("result").value = num1 / num2;
    } 
}