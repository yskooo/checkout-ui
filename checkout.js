function closeModal(event) {
    var modal = document.getElementById("myModal");
    if (!event || event.target.id === 'myModal') {
        modal.style.display = "none";
    }
}

function stopPropagation(event) {
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent div
}

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

    var pricePerUnit = 29.90; // Assuming price is €29.90 per unit
    var subtotal = pricePerUnit * quantity;

    // Calculate taxes with 19% VAT
    var vatRate = 0.19;
    var taxes = subtotal * vatRate;

    var total = subtotal + taxes;

    document.getElementById("subtotal").textContent = "€" + subtotal.toFixed(2);
    document.getElementById("taxes").textContent = "€" + taxes.toFixed(2);
    document.getElementById("total").textContent = "€" + total.toFixed(2);
}

function updateAndCloseModal(event) {
    updateQuantity(); // Call the updateQuantity function
    closeModal();    // Call the closeModal function to close the modal
}


document.addEventListener("DOMContentLoaded", function() {
    // Get elements related to delivery address
    const sendToThisAddressRadio = document.getElementById("send-to-this-address");
    const sendToOtherAddressRadio = document.getElementById("send-to-other-address");
    const otherAddressContainer = document.getElementById("other-address-container");

    // Add event listener to handle changes in delivery address radio buttons
    sendToThisAddressRadio.addEventListener("change", function() {
        otherAddressContainer.style.display = sendToThisAddressRadio.checked ? "none" : "block";
    });

    sendToOtherAddressRadio.addEventListener("change", function() {
        otherAddressContainer.style.display = sendToOtherAddressRadio.checked ? "block" : "none";
    });

    // Get elements related to delivery options
    const deliveryToPackingCheckbox = document.getElementById("delivery-to-packing");
    const dhlPostalForm = document.getElementById("dhl-postal-form");
    const dhlPickupForm = document.getElementById("dhl-pickup-form");

    // Add event listener to handle changes in delivery options checkbox
    deliveryToPackingCheckbox.addEventListener("change", function() {
        const isChecked = deliveryToPackingCheckbox.checked;
        dhlPostalForm.style.display = isChecked ? "block" : "none";
        dhlPickupForm.style.display = isChecked ? "block" : "none";
    });
});
