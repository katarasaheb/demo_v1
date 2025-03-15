document.addEventListener('DOMContentLoaded', function () {
    // For smooth scrolling on anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Handle Form Popup functionality
    function openForm(userType) {
        const formPopup = document.getElementById("form-popup");
        const formTitle = formPopup.querySelector("h2");

        // Adjust the form title based on the user type (Customer, Investor, Partner)
        switch (userType) {
            case "customer":
                formTitle.textContent = "Join Us as a Customer";
                break;
            case "investor":
                formTitle.textContent = "Join Us as an Investor";
                break;
            case "partner":
                formTitle.textContent = "Join Us as a Partner";
                break;
            default:
                formTitle.textContent = "Join Us";
        }

        formPopup.classList.add("active");  // Show the form popup with animation
        document.body.style.overflow = "hidden"; // Prevent page scrolling
    }

    // Close the form popup
    document.querySelector(".close-btn").addEventListener("click", function () {
        const formPopup = document.getElementById("form-popup");
        formPopup.classList.remove("active");
        document.body.style.overflow = "auto"; // Re-enable page scrolling
    });

    // Scroll effect for the Hero section (fade-in + move effect)
    const hero = document.getElementById("hero");
    const heroText = document.querySelector("#hero h1");

    const fadeInEffect = () => {
        const heroHeight = hero.offsetHeight;
        const scrollPosition = window.scrollY;

        // Add fade-in effect as the user scrolls
        if (scrollPosition > heroHeight * 0.2) {
            hero.classList.add("fade-in");
        } else {
            hero.classList.remove("fade-in");
        }

        // Add parallax-like movement effect to the hero text
        heroText.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    };

    window.addEventListener("scroll", fadeInEffect);
    fadeInEffect(); // Ensure it's applied on page load

    // Mobile Navigation Toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (navToggle && navMenu) {  // Ensure the nav-toggle and nav-menu elements exist
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            document.body.classList.toggle("no-scroll"); // Prevent body scrolling when menu is open
        });
    }

    // Close the navigation menu when a link is clicked (for mobile responsiveness)
    const navLinks = document.querySelectorAll(".nav-menu a"); // Declare navLinks only once

    if (navLinks.length > 0) {  // Ensure nav links exist before adding event listeners
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                if (navMenu.classList.contains("active")) {
                    navMenu.classList.remove("active");
                    document.body.classList.remove("no-scroll");
                }
            });
        });
    }

    // Adding a smooth fade-out animation when the page loads
    document.body.style.opacity = 0;
    window.onload = () => {
        document.body.style.transition = "opacity 1s ease-in-out";
        document.body.style.opacity = 1;
    };

    // Sticky Header (adds shadow when scrolling)
    window.onscroll = function () {
        const header = document.querySelector("header");
        if (window.scrollY > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };

    // Function for the download button click (Example: download report)
    document.querySelector(".download-btn").addEventListener("click", function () {
        window.open("https://competition-bureau.canada.ca/sites/default/files/attachments/2023/CB-Retail-Grocery-Market-Study-Report-EN-2023-06-23.pdf", "_blank");
    });

    // Form Validation (Example)
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        const name = document.getElementById("name");
        const email = document.getElementById("email");

        if (name.value.trim() === "" || email.value.trim() === "") {
            e.preventDefault(); // Prevent form submission
            alert("Please fill in all required fields.");
        }
    });
});
