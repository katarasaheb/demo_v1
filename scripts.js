document.addEventListener("DOMContentLoaded", function () {
    // Hero Animation
    setTimeout(function () {
        const heroHeading = document.querySelector(".hero-heading");
        const heroSubheading = document.querySelector(".hero-subheading");
        heroHeading.classList.add("animate");
        heroSubheading.classList.add("animate");
    }, 500);

    // Join the Revolution Button - Scroll to Sign Up Section (Example for Interaction)
    const joinRevolutionBtn = document.getElementById("join-revolution-btn");
    if (joinRevolutionBtn) {
        joinRevolutionBtn.addEventListener("click", function () {
            window.scrollTo({
                top: document.getElementById("join-us").offsetTop,
                behavior: "smooth",
            });
        });
    }

    // Adding Animation for Interactive Elements (like Stats, Cards, etc.)
    const interactiveElements = document.querySelectorAll(".interactive-element");
    window.addEventListener("scroll", function () {
        interactiveElements.forEach(function (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                element.classList.add("animate");
            }
        });
    });

    // Optional: Add event listeners for other elements as needed
    // Example for video autoplay or modal popups.
});
