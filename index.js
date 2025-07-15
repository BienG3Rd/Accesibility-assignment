
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            submitForm();
        });
    }
});

function submitForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    if (nameInput) nameInput.value = "";
    if (emailInput) emailInput.value = "";
    // Provide user feedback
    alert("Thank you! You will be notified when the service is available.");
}