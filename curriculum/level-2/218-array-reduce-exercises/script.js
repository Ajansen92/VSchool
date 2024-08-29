//Turn an Array of Numbers into a Total of All the Numbers
function total(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(total([1, 2, 3]));  

//Turn an Array of Numbers into a Long String of All Those Numbers
function stringConcat(arr) {
    return arr.reduce((acc, num) => acc + num, '');
  }
  
  console.log(stringConcat([1, 2, 3]));
  
//Turn an Array of Voter Objects into a Count of How Many People Voted
function totalVotes(arr) {
    return arr.reduce((acc, voter) => voter.voted ? acc + 1 : acc, 0);
  }
  
  var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
  ];
  
  console.log(totalVotes(voters));
  
//Given an Array of Wishlist Items, Calculate the Total Cost
function shoppingSpree(arr) {
    return arr.reduce((acc, item) => acc + item.price, 0);
  }
  
  var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
  ];
  
  console.log(shoppingSpree(wishlist));
  
//Given an Array of Arrays, Flatten Them into a Single Array
function flatten(arr) {
    return arr.reduce((acc, subArr) => acc.concat(subArr), []);
  }
  
  var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
  ];
  
  console.log(flatten(arrays));
  
//Given an Array of Potential Voters, Return an Object Representing the Results
function voterResults(arr) {
    return arr.reduce((results, voter) => {
      const age = voter.age;
      const voted = voter.voted;
      
      if (age >= 18 && age <= 25) {
        results.numYoungPeople += 1;
        if (voted) results.numYoungVotes += 1;
      } else if (age >= 26 && age <= 35) {
        results.numMidsPeople += 1;
        if (voted) results.numMidVotesPeople += 1;
      } else if (age >= 36 && age <= 55) {
        results.numOldsPeople += 1;
        if (voted) results.numOldVotesPeople += 1;
      }
      
      return results;
    }, {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0
    });
  }
  
  var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
  ];
  
  console.log(voterResults(voters));
  