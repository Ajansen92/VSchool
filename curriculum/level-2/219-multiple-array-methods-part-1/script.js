let peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];

function getAdultsHtmlList(arr) {
    return arr
        .filter(person => person.age > 18)  // Filter to include only those older than 18
        .sort((a, b) => a.lastName.localeCompare(b.lastName))  // Sort alphabetically by last name
        .map(person => `<li>${person.firstName} ${person.lastName}, Age: ${person.age}</li>`);  // Convert to <li> elements
}

console.log(getAdultsHtmlList(peopleArray));
