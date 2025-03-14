document.addEventListener("DOMContentLoaded", () => {
    const ctaButtons = document.querySelectorAll(".cta");
    const formPopup = document.getElementById("form-popup");
    const closeBtn = document.querySelector(".close-btn");

    // Add hover effect on CTA buttons
    ctaButtons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
            button.style.transition = "transform 0.3s ease";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Open Form Popup
    function openForm() {
        formPopup.style.display = "flex";  // Show the popup
    }

    // Close Form Popup
    closeBtn.addEventListener("click", () => {
        formPopup.style.display = "none";  // Hide the popup
    });

    // Assign openForm to the Join Now buttons
    const joinButtons = document.querySelectorAll('#join-now .cta');
    joinButtons.forEach(button => {
        button.addEventListener("click", openForm);
    });
});
