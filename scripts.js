
// Form Popup Handling
const joinBtn = document.getElementById('join-revolution-btn');
const formPopup = document.getElementById('form-popup');
const closeBtn = document.querySelector('.close-btn');

joinBtn.addEventListener('click', () => {
    formPopup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    formPopup.style.display = 'none';
});
