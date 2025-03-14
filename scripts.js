console.log("scripts.js is loaded and running!");

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

    // Function to open the form popup
    function openForm() {
        formPopup.classList.add("show");  // Add 'show' class to display the form
    }

    // Function to close the form popup
    function closeForm() {
        formPopup.classList.remove("show");  // Remove 'show' class to hide the form
    }

    // Close form when the close button ('X') is clicked
    closeBtn.addEventListener("click", closeForm);

    // Assign openForm to the Join Now buttons
    const joinButtons = document.querySelectorAll('#join-now .cta');
    joinButtons.forEach(button => {
        button.addEventListener("click", openForm);
    });
});
