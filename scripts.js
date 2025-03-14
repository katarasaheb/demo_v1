// Function to open the form popup
function openForm(formType) {
    var formPopup = document.getElementById("form-popup");
    formPopup.style.display = "flex"; // Show the form popup

    // You can add logic here to modify the form based on the 'formType'
    // E.g., show different labels or fields based on the user type (Customer, Investor, Partner)
}

// Function to close the form popup
function closeForm() {
    var formPopup = document.getElementById("form-popup");
    formPopup.style.display = "none"; // Hide the form popup
}

// Add event listener to close the form when clicking the close button
var closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', closeForm);

// Close form when clicking outside the form container
window.addEventListener('click', function(event) {
    var formPopup = document.getElementById("form-popup");
    if (event.target === formPopup) {
        closeForm();
    }
});
