
//sorting an array
function sortNumbers(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}

//example
const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);


//mapping an array
function convertToUppercase(strings) {
    return strings.map(str => str.toUpperCase());
}

// Example usage:
const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']
