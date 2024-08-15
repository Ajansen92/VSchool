let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ];

let computerCount = 0;
  
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        computerCount++;
    }
}

console.log("Number of 'computer' items: " + computerCount);


for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    let person = peopleWhoWantToSeeMadMaxFuryRoad[i];
    
    if (person.age >= 18) {
        console.log(person.name + ": old enough");
    } else {
        console.log(person.name + ": not old enough");
    }
}