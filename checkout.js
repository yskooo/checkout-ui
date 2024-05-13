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
    var taxes = 23.81; // Fixed tax amount
    var total = subtotal + taxes;

    document.getElementById("subtotal").textContent = "€" + subtotal.toFixed(2);
    document.getElementById("taxes").textContent = "€" + taxes.toFixed(2);
    document.getElementById("total").textContent = "€" + total.toFixed(2);

    closeModal(); // Close the modal after updating quantity
}

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
    // Get the pay button
    const payButton = document.getElementById('payButton');

    // Add event listener to the pay button
    payButton.addEventListener('click', function(event) {
        // Prevent the default button click behavior
        event.preventDefault();

        // Call the validateForm() function to validate the form
        const isValid = validateForm();
        
        // Log the form validation result
        console.log('Form is valid:', isValid);

        // Check if the form is valid
        if (isValid) {
            // If the form is valid, you can proceed with payment or any other action
            // For example: performPayment();
            alert('Form is valid. Proceed with payment.');
        } else {
            // If the form is invalid, you can display an error message or take appropriate action
            alert('Please fill in all required fields correctly.');
            console.log('Form is not valid. Please correct the fields.');
        }
    });
});
