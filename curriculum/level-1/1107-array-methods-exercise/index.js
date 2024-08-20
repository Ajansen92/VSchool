// Initial arrays
let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Print initial arrays
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// Remove the last item from the vegetables array
vegetables.pop();
console.log("After removing the last item from vegetables: ", vegetables);

// Remove the first item from the fruit array
fruit.shift();
console.log("After removing the first item from fruit: ", fruit);

// Find the index of "orange"
let indexOfOrange = fruit.indexOf("orange");
console.log("Index of 'orange': ", indexOfOrange);

// Add that number to the end of the fruit array
fruit.push(indexOfOrange);
console.log("After adding the index of 'orange' to the end of fruit: ", fruit);

// Use the length property to find the length of the vegetables array
let lengthOfVegetables = vegetables.length;
console.log("Length of vegetables: ", lengthOfVegetables);

// Add that number to the end of the vegetables array
vegetables.push(lengthOfVegetables);
console.log("After adding the length of vegetables to the end of vegetables: ", vegetables);

// Put the two arrays together into one array, fruit first
let food = fruit.concat(vegetables);
console.log("Combined array (fruit first, then vegetables): ", food);

// Remove 2 elements from the new array starting at index 4
food.splice(4, 2);
console.log("After removing 2 elements starting at index 4: ", food);

// Reverse the array
food.reverse();
console.log("After reversing the array: ", food);

// Turn the array into a string and return it
let resultString = food.join(",");
console.log("Final result string: ", resultString);
