//Preliminaries

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 9; i >= 0; i--) {
    console.log(i);
}

const fruits = ["banana", "orange", "apple", "kiwi"];

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Bronze

const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(i);
}
console.log(numbers);

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

const everyOtherFruit = [];
for (let i = 0; i < fruit.length; i += 2) {
    everyOtherFruit.push(fruit[i]);
}
console.log(everyOtherFruit);

//Silver

const peopleArray = [
    { name: "Harrison Ford", occupation: "Actor" },
    { name: "Justin Bieber", occupation: "Singer" },
    { name: "Vladimir Putin", occupation: "Politician" },
    { name: "Oprah", occupation: "Entertainer" }
  ];
  
  for (let i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
  }

  const names = [];
const occupations = [];

for (let i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}

console.log(names);        
console.log(occupations);

const everyOtherName = [];
const everyOtherOccupation = [];

for (let i = 0; i < peopleArray.length; i += 2) {
  everyOtherName.push(peopleArray[i].name);
  everyOtherOccupation.push(peopleArray[i].occupation);
}

console.log(everyOtherName);    
console.log(everyOtherOccupation);

//Gold

const rows = 3;
const cols = 3;
const grid1 = [];

for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
        row.push(0);
    }
    grid1.push(row);
}

console.log(grid1);

const rows = 3;
const cols = 3;
const grid2 = [];

for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
        row.push(i);
    }
    grid2.push(row);
}

console.log(grid2);

const rows = 3;
const cols = 3;
const grid3 = [];

for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
        row.push(j);
    }
    grid3.push(row);
}

console.log(grid3);






