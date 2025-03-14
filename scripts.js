document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect on scroll
    const fadeInElements = document.querySelectorAll('.fade-in');

    function checkPosition() {
        fadeInElements.forEach(function (element) {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Check initial positions on page load

    // Parallax effect for background image
    window.addEventListener('scroll', function () {
        const parallax = document.querySelector('.parallax');
        let offset = window.pageYOffset;
        parallax.style.backgroundPosition = `center ${offset * 0.5}px`;
    });
});
