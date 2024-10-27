// Function to increment quantity
function incrementQuantity(id) {
    const quantityInput = document.getElementById(`quantity-${id}`);
    let quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
    updateCartTotal();
}

// Function to decrement quantity
function decrementQuantity(id) {
    const quantityInput = document.getElementById(`quantity-${id}`);
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantityInput.value = quantity - 1;
        updateCartTotal();
    }
}

// Function to update cart total
function updateCartTotal() {
    let total = 0;
    const items = document.querySelectorAll('.cart-item');
    items.forEach(item => {
        const price = parseFloat(item.querySelector('.item-details p').textContent.replace('Price: $', ''));
        const quantity = parseInt(item.querySelector('.quantity input').value);
        total += price * quantity;
    });
    document.querySelector('.cart-summary p strong').textContent = `Total: $${total.toFixed(2)}`;
}
