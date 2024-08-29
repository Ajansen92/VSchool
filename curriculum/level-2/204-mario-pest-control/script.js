document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('input', updateTotalPrice);
});

function updateTotalPrice() {
    let totalPrice = 0;

    document.querySelectorAll('.quantity-input').forEach(input => {
        const quantity = parseInt(input.value) || 0;
        const price = parseFloat(input.dataset.price);
        totalPrice += quantity * price;
    });

    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

// Initialize the total price on page load
updateTotalPrice();
