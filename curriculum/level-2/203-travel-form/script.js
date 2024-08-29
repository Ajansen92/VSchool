document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const destination = document.querySelector('select[name="destination"]').value;
    const dietaryRestrictions = Array.from(document.querySelectorAll('input[name="dietaryRestrictions"]:checked'))
                                    .map(input => input.value)
                                    .join(', ');

    // Construct alert message
    const message = `
        Booking Confirmation:
        Name: ${firstName} ${lastName}
        Age: ${age}
        Gender: ${gender}
        Destination: ${destination}
        Dietary Restrictions: ${dietaryRestrictions || 'None'}
    `;

    alert(message);
});
