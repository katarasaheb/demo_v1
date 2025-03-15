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

// Function to open the popup
function openForm(formType) {
    // Show the popup
    document.getElementById('form-popup').style.display = 'block';

    // Select the form container to update the content dynamically
    var formContainer = document.querySelector('.form-container');

    // Clear the existing form content
    formContainer.innerHTML = '';

    // Dynamically change the content based on the form type
    if (formType === 'customer') {
        formContainer.innerHTML = `
            <span class="close-btn">&times;</span>
            <h2>Join Us as a Customer</h2>
            <form action="https://formspree.io/f/your-email" method="POST">
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message (Optional, 180 words max):</label>
                <textarea id="message" name="message" maxlength="180"></textarea>

                <input type="submit" value="Submit" class="cta">
            </form>
        `;
    } else if (formType === 'investor') {
        formContainer.innerHTML = `
            <span class="close-btn">&times;</span>
            <h2>Join Us as an Investor</h2>
            <form action="https://formspree.io/f/your-email" method="POST">
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" required>

                <label for="investment">Investment Amount:</label>
                <input type="text" id="investment" name="investment" required>

                <input type="submit" value="Submit" class="cta">
            </form>
        `;
    } else if (formType === 'partner') {
        formContainer.innerHTML = `
            <span class="close-btn">&times;</span>
            <h2>Join Us as a Partner</h2>
            <form action="https://formspree.io/f/your-email" method="POST">
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" required>

                <label for="company">Company Name:</label>
                <input type="text" id="company" name="company" required>

                <input type="submit" value="Submit" class="cta">
            </form>
        `;
    }
}

// Function to close the form
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('form-popup').style.display = 'none';
});

// To prevent the popup from opening on load, ensure no code opens the popup automatically
window.onload = function() {
    document.getElementById('form-popup').style.display = 'none'; // Hide on page load
};

// JavaScript to add class when scrolling into view
window.addEventListener('scroll', () => {
    const section = document.querySelector('.problem-section');
    const sectionPosition = section.getBoundingClientRect().top;

    if (sectionPosition < window.innerHeight) {
        section.classList.add('active');
    }
});

// JavaScript to add class when scrolling into view
window.addEventListener('scroll', () => {
    const section = document.querySelector('.problem-section');
    const sectionPosition = section.getBoundingClientRect().top;

    if (sectionPosition < window.innerHeight) {
        section.classList.add('active');
    }
});
