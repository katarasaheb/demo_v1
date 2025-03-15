document.addEventListener('DOMContentLoaded', () => {
    // Form Popup Handling
    const joinBtn = document.getElementById('join-revolution-btn');
    const formPopup = document.getElementById('form-popup');
    const closeBtn = document.querySelector('.close-btn');

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
