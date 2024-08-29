//Double Numbers
function doubleNumbers(arr) {
  return arr.map(num => num * 2);
}

console.log(doubleNumbers([2, 5, 100]));

//Convert Numbers to Strings
function stringItUp(arr) {
  return arr.map(num => num.toString());
}

console.log(stringItUp([2, 5, 100]));

//Capitalize Names
function capitalizeNames(arr) {
  return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

//Extract Names Only
function namesOnly(arr) {
  return arr.map(person => person.name);
}

console.log(namesOnly([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));

//Strings Indicating Matrix Access
function makeStrings(arr) {
  return arr.map(person => {
    return person.age > 18
      ? `${person.name} can go to The Matrix`
      : `${person.name} is under age!!`;
  });
}

console.log(makeStrings([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));

//Create HTML Strings
function readyToPutInTheDOM(arr) {
  return arr.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`);
}

// Test
console.log(readyToPutInTheDOM([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));











  
  
   