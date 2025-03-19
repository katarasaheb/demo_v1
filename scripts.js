// Scroll to section function with smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        // Check if the section is already in view to avoid unnecessary scrolling
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;

        if (windowTop + windowHeight < sectionTop || windowTop > sectionTop + sectionHeight) {
            // Only scroll if the section is not already fully in view
            window.scrollTo({
                top: sectionTop - 50,  // Adjusting for header offset
                behavior: 'smooth'
            });
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector(".solution-image");
    img.classList.add("loaded");
});
