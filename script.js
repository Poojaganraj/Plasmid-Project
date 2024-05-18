// script.js
document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;

    // Full Name validation
    const fullName = document.getElementById('fullName').value;
    const fullNameError = document.getElementById('fullNameError');
    if (fullName.trim().length < 5) {
        fullNameError.textContent = 'Full Name must be at least 5 characters long.';
        fullNameError.style.display = 'block';
        isValid = false;
    } else {
        fullNameError.textContent = '';
        fullNameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }

    // Phone Number validation
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number.';
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.textContent = '';
        phoneError.style.display = 'none';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password === 'password' || password.length < 8 || password === fullName) {
        passwordError.textContent = 'Password is not strong enough.';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordError.style.display = 'none';
    }

    if (isValid) {
        // Form is valid, proceed with form submission or further processing
        console.log('Form submitted successfully!');
        // Here you can add actual form submission code, e.g., using AJAX.
    }
});
