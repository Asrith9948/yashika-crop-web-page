document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let number = document.getElementById("number").value.trim(); 

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let numberError = document.getElementById("numberError");

    // Reset previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    numberError.textContent = ""; 

    let isValid = true; 

    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

    let numberPattern = /^[0-9]{10}$/;
    if (number === "") {
        numberError.textContent = "Number is required.";
        isValid = false;
    } else if (!numberPattern.test(number)) {
        numberError.textContent = "Enter a valid 10-digit number.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }
});