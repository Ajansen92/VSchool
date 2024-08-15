const readline = require("readline-sync");

// Define the four functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'Error: Division by zero';
    }
    return num1 / num2;
}

// Perform the operation based on user input
function performOperation() {
    // Get user input from the form
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    // Perform the calculation based on the operation
    let result;
    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'sub':
            result = subtract(num1, num2);
            break;
        case 'mul':
            result = multiply(num1, num2);
            break;
        case 'div':
            result = divide(num1, num2);
            break;
        default:
            result = 'Error: Invalid operation';
    }

    // Display the result
    document.getElementById('result').textContent = 'The result is: ' + result;
}
