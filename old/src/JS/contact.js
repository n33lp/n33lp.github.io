document.addEventListener('DOMContentLoaded', function() {
    var emailField = document.getElementById('inputEmail');
    var emailError = document.getElementById('emailError');
    var submitButton = document.querySelector('button[type="submit"]');

    submitButton.disabled = true;

    emailField.addEventListener('input', function() {
        var email = emailField.value;
        
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (email && emailPattern.test(email)) {
            emailError.style.display = 'none';
            submitButton.disabled = false; // Enable button if valid
        } else {
            emailError.style.display = 'block';
            emailError.innerText = 'Please enter a valid email address.';
            submitButton.disabled = true; // Disable button if invalid
        }
    });
});
