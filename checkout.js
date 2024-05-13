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

    closeModal(); // Close the modal after updating quantity
}

document.addEventListener("DOMContentLoaded", function() {
    const sendToThisAddressRadio = document.getElementById("send-to-this-address");
    const sendToOtherAddressRadio = document.getElementById("send-to-other-address");
    const otherAddressContainer = document.getElementById("other-address-container");

    // Add event listener to both radio buttons
    sendToThisAddressRadio.addEventListener("change", function() {
        if (sendToThisAddressRadio.checked) {
            otherAddressContainer.style.display = "none"; // Hide the new form inputs
        }
    });

    sendToOtherAddressRadio.addEventListener("change", function() {
        if (sendToOtherAddressRadio.checked) {
            otherAddressContainer.style.display = "block"; // Show the new form inputs
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const deliveryToPackingCheckbox = document.getElementById("delivery-to-packing");
    const dhlPostalForm = document.getElementById("dhl-postal-form");
    const dhlPickupForm = document.getElementById("dhl-pickup-form");

    // Add event listener to the checkbox
    deliveryToPackingCheckbox.addEventListener("change", function() {
        if (deliveryToPackingCheckbox.checked) {
            dhlPostalForm.style.display = "block"; // Show DHL postal form
            dhlPickupForm.style.display = "block"; // Show DHL pickup form
        } else {
            dhlPostalForm.style.display = "none"; // Hide DHL postal form
            dhlPickupForm.style.display = "none"; // Hide DHL pickup form
        }
    });
});

// Function to validate the entire form
function validateForm() {
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiry = document.getElementById('expiry').value;
    const cvc = document.getElementById('cvc').value;
    const cardholderName = document.getElementById('cardholderName').value; // New line for cardholder name

    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Validate credit card number
    if (!validateCreditCard(cardNumber)) {
        alert('Please enter a valid credit card number.');
        isValid = false;
    }

    // Validate expiry
    if (!validateExpiry(expiry)) {
        alert('Please enter a valid expiry date in MM/YY format.');
        isValid = false;
    }

    // Validate CVC
    if (!validateCVC(cvc)) {
        alert('Please enter a valid CVC.');
        isValid = false;
    }

    // Validate cardholder name
    if (cardholderName.trim() === '') {
        alert('Please enter the cardholder name.');
        isValid = false;
    }

    return isValid;
}

document.addEventListener('DOMContentLoaded', function() {
    const payButton = document.getElementById('payButton');

    payButton.addEventListener('click', function(event) {
        event.preventDefault();

        const isValid = validateForm();
        
        console.log('Form is valid:', isValid);

        if (isValid) {
            alert('Form is valid. Proceed with payment.');
        } else {
            alert('Please fill in all required fields correctly.');
            console.log('Form is not valid. Please correct the fields.');
        }
    });
});
