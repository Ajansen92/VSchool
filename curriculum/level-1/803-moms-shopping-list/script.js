document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const itemInput = document.getElementById('itemInput');
    const shoppingList = document.getElementById('shoppingList');

    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText === '') {
            return; // Don't add empty items
        }

        const li = document.createElement('li');

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'x';

        // Create the item text span
        const itemTextElement = document.createElement('span');
        itemTextElement.className = 'item-text';
        itemTextElement.textContent = itemText;

        // Create the edit button
        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';

        // Append all elements to the list item
        li.appendChild(deleteButton);
        li.appendChild(itemTextElement);
        li.appendChild(editButton);

        // Add delete functionality to the button
        deleteButton.addEventListener('click', function() {
            shoppingList.removeChild(li);
        });

        // Add edit functionality to the button
        editButton.addEventListener('click', function() {
            const currentText = itemTextElement.textContent;

            // Create an input box with the current text
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = currentText;
            editInput.className = 'edit-input';

            // Replace the item text with the input box
            itemTextElement.replaceWith(editInput);

            // Change the "Edit" button to "Save"
            editButton.textContent = 'Save';
            editButton.className = 'save';

            // Add save functionality
            editButton.addEventListener('click', function() {
                const newText = editInput.value.trim();
                if (newText !== '') {
                    const newItemTextElement = document.createElement('span');
                    newItemTextElement.className = 'item-text';
                    newItemTextElement.textContent = newText;

                    // Replace the input box with the updated text
                    editInput.replaceWith(newItemTextElement);

                    // Change the "Save" button back to "Edit"
                    editButton.textContent = 'Edit';
                    editButton.className = 'edit';
                }
            }, { once: true }); // Ensure the event listener is added only once
        });

        shoppingList.appendChild(li);
        itemInput.value = ''; // Clear the input box
    }

    addButton.addEventListener('click', addItem);

    // Allow pressing Enter to add items
    itemInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addItem();
        }
    });
});


