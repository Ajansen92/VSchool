function calculate(operation) {
    let num1, num2, result;

    switch (operation) {
        case 'add':
            num1 = parseFloat(document.getElementById('addNum1').value);
            num2 = parseFloat(document.getElementById('addNum2').value);
            result = num1 + num2;
            document.getElementById('addResult').textContent = `Result: ${result}`;
            break;
        case 'sub':
            num1 = parseFloat(document.getElementById('subNum1').value);
            num2 = parseFloat(document.getElementById('subNum2').value);
            result = num1 - num2;
            document.getElementById('subResult').textContent = `Result: ${result}`;
            break;
        case 'mul':
            num1 = parseFloat(document.getElementById('mulNum1').value);
            num2 = parseFloat(document.getElementById('mulNum2').value);
            result = num1 * num2;
            document.getElementById('mulResult').textContent = `Result: ${result}`;
            break;
    }
}
