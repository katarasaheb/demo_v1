document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const buttons = document.querySelectorAll('.cta');

    // Function to add the "in-view" class when a section enters the viewport
    function checkSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add('in-view');
            }
        });
    }

    // Initially check for in-view sections
    checkSections();

    // Check on scroll
    window.addEventListener('scroll', checkSections);

    // Smooth animation on button hover
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
