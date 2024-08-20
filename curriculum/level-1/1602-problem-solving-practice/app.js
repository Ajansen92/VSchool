function largest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function lettersWithStrings(words, char) {
    return words.filter(word => word.includes(char));
}

function isDivisible(num1, num2) {
    return num1 % num2 === 0;
}


