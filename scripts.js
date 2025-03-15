document.addEventListener('DOMContentLoaded', () => {
    // Form Popup Handling
    const joinBtn = document.getElementById('join-revolution-btn');
    const formPopup = document.getElementById('form-popup');
    const closeBtn = document.querySelector('.close-btn');

    // Smooth Scrolling for Internal Links (from sections to sections)
    document.querySelectorAll('a[href^="#"], button[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target element by the href attribute (e.g., #hero, #grocery-system)
            const target = document.querySelector(this.getAttribute('href'));

            // Scroll smoothly to the target element
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });

    // Check if elements exist before adding event listeners
    if (joinBtn && formPopup && closeBtn) {
        // Open the form popup
        joinBtn.addEventListener('click', () => {
            formPopup.style.display = 'block';
        });

        // Close the form popup
        closeBtn.addEventListener('click', () => {
            formPopup.style.display = 'none';
        });
    }
});
