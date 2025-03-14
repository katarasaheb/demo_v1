document.addEventListener("DOMContentLoaded", () => {
    const formPopup = document.getElementById("form-popup");
    const ctaButtons = document.querySelectorAll(".cta");
    const closeBtn = document.querySelector(".close-btn");
    const formFrame = document.getElementById("form-frame");

    // Add event listeners to CTA buttons
    ctaButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const target = event.target;
            openForm(target);
        });
    });

    // Close form when close button is clicked
    closeBtn.addEventListener("click", closeForm);

    // Close form if clicked outside of the popup
    window.addEventListener("click", (event) => {
        if (event.target == formPopup) {
            closeForm();
        }
    });

    // Open the form and dynamically update the iframe source
    function openForm(button) {
        formPopup.style.display = "block";
        formPopup.classList.add("show");

        const userType = button.textContent.trim().toLowerCase(); // Determine if customer, investor, or partner
        switch (userType) {
            case "join the grocery revolution":
                formFrame.src = "https://example.com/form/customer"; // Replace with the actual form URL
                break;
            case "invest in our future":
                formFrame.src = "https://example.com/form/investor"; // Replace with the actual form URL
                break;
            case "signup for launch updates":
                formFrame.src = "https://example.com/form/partner"; // Replace with the actual form URL
                break;
            default:
                formFrame.src = ""; // Default or error form
                break;
        }
    }

    // Close the form
    function closeForm() {
        formPopup.style.display = "none";
        formPopup.classList.remove("show");
        formFrame.src = ""; // Clear the iframe source when closing the form
    }
});
