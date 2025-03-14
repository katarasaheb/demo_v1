document.addEventListener("DOMContentLoaded", () => {
    const ctaButtons = document.querySelectorAll(".cta");

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

    // Form popup functionality
    const formPopup = document.getElementById('form-popup');
    const closeBtn = document.querySelector('.close-btn');

    // Function to open the form popup
    function openForm(formType) {
        formPopup.style.display = 'flex';
    }

    // Function to close the form popup
    closeBtn.addEventListener('click', () => {
        formPopup.style.display = 'none';
    });

    // Close the form if the user clicks outside of the form container
    window.addEventListener('click', (event) => {
        if (event.target === formPopup) {
            formPopup.style.display = 'none';
        }
    });

    // Expose openForm function globally to use in HTML onClick events
    window.openForm = openForm;
});
