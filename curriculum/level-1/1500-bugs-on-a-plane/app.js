let form = document.getElementById("airline-form");
let submit = document.getElementById("submit");

function formAlert(event) {
    event.preventDefault();

    let firstName = form.elements["first-name"].value;
    let lastName = form.elements["last-name"].value;
    let age = form.elements["age"].value;
    let gender = form.elements["gender"].value;
    let location = form.elements["travel-location"].value;
    
    let diet = [];

    if (form.elements['vegan'].checked) {
        diet.push(form.elements['vegan'].value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(form.elements['gluten'].value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(form.elements['paleo'].value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet.join(', ') + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", formAlert);

