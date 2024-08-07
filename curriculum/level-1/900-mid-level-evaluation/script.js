function changeTextContent(elementId, newText) {
    // Select the HTML element by its ID
    var element = document.getElementById(elementId);
    
    // Check if the element exists
    if (element) {
        // Set the text content of the element
        element.textContent = newText;
    } else {
        console.error('Element with ID "' + elementId + '" not found.');
    }
}

// Function to be called when the button is clicked
function handleButtonClick() {
    changeTextContent('heading', 'The text has been changed!');
    changeTextContent('paragraph', 'The paragraph text has been changed!');
}

// Add event listener to the button
document.getElementById('changeButton').addEventListener('click', handleButtonClick);

