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

    // Function to open the form popup when a button is clicked
    function openForm(type) {
        const formPopup = document.getElementById("form-popup");
        formPopup.classList.add("show"); // Add show class to trigger the popup

        // Dynamically change the form title based on the type (e.g., Customer, Investor, Partner)
        const formTitle = formPopup.querySelector("h2");
        if (type === "customer") {
            formTitle.textContent = "Join Us as a Customer";
        } else if (type === "investor") {
            formTitle.textContent = "Join Us as an Investor";
        } else if (type === "partner") {
            formTitle.textContent = "Join Us as a Partner";
        }
    }

    // Close the form popup when the close button is clicked
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
        const formPopup = document.getElementById("form-popup");
        formPopup.classList.remove("show"); // Remove show class to hide the popup
    });
});
