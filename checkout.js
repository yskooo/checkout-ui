function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function incrementQuantity() {
    var quantityInput = document.getElementById("quantityInput");
    var quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
}

function decrementQuantity() {
    var quantityInput = document.getElementById("quantityInput");
    var quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantityInput.value = quantity - 1;
    }
}

function updateQuantity() {
    var quantityInput = document.getElementById("quantityInput");
    var quantity = parseInt(quantityInput.value);
    var quantitySpan = document.getElementById("quantity");
    quantitySpan.textContent = quantity;

    var pricePerUnit = 29.90; // Assuming price is $29.90 per unit
    var subtotal = pricePerUnit * quantity;
    var taxes = subtotal * 0.07; // Assuming 7% tax rate
    var total = subtotal + taxes;

    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("taxes").textContent = "$" + taxes.toFixed(2);
    document.getElementById("total").textContent = "$" + total.toFixed(2);

    closeModal(); // Close the modal after updating quantity
}
