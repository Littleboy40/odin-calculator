function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return num1 + num2;
        
        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;
        
        case "/":
            return num1 / num2;
    }
}