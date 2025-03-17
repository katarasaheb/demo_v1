// Scroll to section function with smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop - 50,  // Adjusting for header offset
            behavior: 'smooth'
        });
    }
}
