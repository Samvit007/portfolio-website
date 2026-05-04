// 🌙 DARK MODE TOGGLE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


// 📩 FORM VALIDATION
function validateForm() {
    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    // Name validation
    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    // Email validation
    if (email === "") {
        alert("Please enter your email");
        return false;
    }

    // Simple email format check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email");
        return false;
    }

    // Success
    alert("Form submitted successfully!");
    return true;
}