//Numbers 5 or Greater
function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num >= 5);
  }
  
  console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

  //Only Even Numbers
function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  console.log(evensOnly([3, 6, 8, 2]));

//Strings 5 characters or Fewer
function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(str => str.length <= 5);
  }
  
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

//People Who Belong to the Club
function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter(person => person.member);
  }
  
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));

//People Old Enough to See The Matrix
function ofAge(arr) {
    return arr.filter(person => person.age > 18);
  }
  
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));