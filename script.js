function showMessage() {
    document.getElementById("form-message").innerText =
        "Thank you! Your message has been sent.";
    return false; // prevent actual form submission
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}