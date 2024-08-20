function forception(people, alphabet) {
    let result = [];
    
    // Convert alphabet string to an array
    let alphabetArray = alphabet.toUpperCase().split('');
    
    // Loop through each name in the people array
    for (let i = 0; i < people.length; i++) {
        // Add the name followed by a colon to the result
        result.push(people[i] + ':');
        
        // Add each letter from the alphabet array to the result
        for (let j = 0; j < alphabetArray.length; j++) {
            result.push(alphabetArray[j]);
        }
    }
    
    return result;
}

// Test the function
let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(forception(people, alphabet));
