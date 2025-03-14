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

    // Additional functionality for the Join Now section
    // If you have forms for each of the "For Customers", "For Investors", "For Partners" buttons,
    // you can add a function to show the form or other relevant actions
    function openForm(type) {
        // Add logic to open respective forms or take action based on the type (customer, investor, partner)
        alert(`Opening form for ${type}`);
    }

    // You can add this function call in your HTML button onclick as needed:
    // <button class="cta" onclick="openForm('customer')">For Customers</button>
    // <button class="cta" onclick="openForm('investor')">For Investors</button>
    // <button class="cta" onclick="openForm('partner')">For Partners</button>
});
