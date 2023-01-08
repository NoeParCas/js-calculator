const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");

let calculation = [];
let acc

function calculate(button) {
    const buttonValue = button.textContent;

    if(buttonValue === "CLEAR") {
        screenDisplay.textContent = ".";
        calculation = [];
        console.log(screenDisplay.innerText)
    } else if(buttonValue === "=") {
        screenDisplay.textContent = eval(acc);
    } else {
        calculation.push(buttonValue);
        acc = calculation.join(" ");
        screenDisplay.textContent = acc;
    } 
}

buttons.forEach(button => {
    button.addEventListener("click", () => calculate(button))
})