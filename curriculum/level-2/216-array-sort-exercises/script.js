//Sort an Array from Smallest Number to Largest
function leastToGreatest(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));


//Sort an Array from Largest Number to Smallest
function greatestToLeast(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));
  

//Sort an Array from Shortest String to Longest
function lengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }
  
  console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));  

//Sort an Array Alphabetically
function alphabetical(arr) {
    return arr.sort();
  }
  
  console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));
  

//Sort Objects in Array by Age
function byAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
  }
  
  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));
  