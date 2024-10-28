// Task 2: Get references to relevant DOM elements
const productSelector = document.getElementById('product-selector'); // Dropdown for product selection
const quantityInput = document.getElementById('quantity'); // Input for quantity selection
const totalPriceElement = document.getElementById('total-price'); // Element to display total price
const placeOrderButton = document.getElementById('place-order'); // Button to place the order
const orderSummary = document.getElementById('order-summary'); // Element to display order summary

// Task 3: Update the total price based on selected product and quantity
function updateTotalPrice() {
    // Get the price of the selected product and convert it to a float
    const productPrice = parseFloat(productSelector.value);
    // Get the quantity input and convert it to an integer
    const quantity = parseInt(quantityInput.value);
    // Calculate the total price
    const totalPrice = productPrice * quantity;

    // Update the total price element with the calculated value, formatted to two decimal places
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Event listeners to update total price when product or quantity changes
productSelector.addEventListener('change', updateTotalPrice); // Listen for product selection change
quantityInput.addEventListener('input', updateTotalPrice); // Listen for quantity input changes

// Task 4: Handle order submission
placeOrderButton.addEventListener('click', function() {
    // Get the name of the selected product
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    // Get the quantity entered by the user
    const quantity = quantityInput.value;
    // Get the calculated total price from the total price element
    const totalPrice = totalPriceElement.textContent;

    // Update the order summary with the selected product, quantity, and total price
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});
