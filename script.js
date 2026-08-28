function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return num1 + num2;
        
        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;
        
        case "/":
            if (num2 === 0) {
                return "NaN";
            }
            let roundingFactor = 100000;
            return Math.round(roundingFactor * num1 / num2) / roundingFactor;
    }
}

let buttons = document.querySelectorAll("button");

let firstNumber = 0;
let secondNumber = -1;
let operator = "";
let display = document.querySelector("#display");


function updateDisplay(event) {
    let operators = "+-*/";
    let press = event.target.textContent;
    let result;

    if (operators.includes(press)) {
        // save numbers in the backend and run operation if needed
        if (secondNumber !== -1) {
            firstNumber = operate(operator, firstNumber, secondNumber);
            secondNumber = -1;
        }
        operator = press;
        result = firstNumber;
    } else if (press === "C") {
        // clear display and variables if clear button is clicked
        clear();
        result = 0;
    } else if (press === "=") {
        if (operator === "") return;
        // adjust variables and display
        result = operate(operator, firstNumber, secondNumber);
        firstNumber = result;
        secondNumber = -1;
        operator = "";
    } else {
        // track input numbers
        if (operator === "") {
            firstNumber = 10 * firstNumber + +press;
            result = firstNumber;
        } else if (secondNumber === -1) {
            secondNumber = +press;
            result = secondNumber;
        } else {
            secondNumber = 10 * secondNumber + press;
            result = secondNumber;
        }
    }

    display.textContent = result;
    if (result === "NaN") {
        clear();
    }
    
    
}

function clear() {
    firstNumber = 0;
    secondNumber = -1;
    operator = "";
    return 0;
}

buttons.forEach(button => {
    button.addEventListener("click", updateDisplay);
})