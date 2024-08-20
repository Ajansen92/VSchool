//Capital and lower case
function capitalizeAndLowercase(str) {
    let upper = str.toUpperCase();
    let lower = str.toLowerCase();
    return upper + lower;
}
console.log(capitalizeAndLowercase("HelLo"));


// Half of String length rounded down
function findMiddleIndex(str) {
    return Math.floor(str.length / 2);
}
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World")); 

//First half
function returnFirstHalf(str) {
    let middleIndex = findMiddleIndex(str);
    return str.slice(0, middleIndex);
}
console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));

//Capitalize First Half and Lowercase Second Half Function
function capitalizeAndLowercase(str) {
    let middleIndex = findMiddleIndex(str);
    let firstHalf = str.slice(0, middleIndex).toUpperCase();
    let secondHalf = str.slice(middleIndex).toLowerCase();
    return firstHalf + secondHalf;
}
console.log(capitalizeAndLowercase("Hello")); 
console.log(capitalizeAndLowercase("Hello World")); 



