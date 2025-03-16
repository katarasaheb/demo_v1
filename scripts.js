document.addEventListener("DOMContentLoaded", function () {
    // Hero Animation
    setTimeout(function () {
        const heroHeading = document.querySelector(".hero-heading");
        const heroSubheading = document.querySelector(".hero-subheading");
        if (heroHeading && heroSubheading) {
            heroHeading.classList.add("animate");
            heroSubheading.classList.add("animate");
        }
    }, 500);

    // Join the Revolution Button - Scroll to Join the Revolution Section (Updated for new flow)
    const joinRevolutionBtn = document.getElementById("join-revolution-btn");
    if (joinRevolutionBtn) {
        joinRevolutionBtn.addEventListener("click", function () {
            const joinRevolutionSection = document.getElementById("join-revolution-section");
            if (joinRevolutionSection) {
                joinRevolutionSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // Adding Animation for Interactive Elements (like Stats, Cards, etc.)
    const interactiveElements = document.querySelectorAll(".interactive-element");
    window.addEventListener("scroll", function () {
        interactiveElements.forEach(function (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                element.classList.add("animate");
            }
        });
    });

    // Hover Effect for Interactive Elements in the Problem Section
    const problemElements = document.querySelectorAll(".problem-card, .stat, .interactive-element");
    problemElements.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            element.classList.add("hovered");
        });
        element.addEventListener("mouseleave", function () {
            element.classList.remove("hovered");
        });
    });

    // Smooth Scroll for "Sign Up for Updates" Button in Advantage Section (Updated Action)
    const signUpForUpdatesBtn = document.getElementById("join-btn");
    if (signUpForUpdatesBtn) {
        signUpForUpdatesBtn.addEventListener("click", function () {
            const joinUsSection = document.getElementById("join-us");
            if (joinUsSection) {
                window.scrollTo({
                    top: joinUsSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    }

    // Optional: Additional Event Listeners can go here
    // For example, handling form submission, etc.

    // Competition Bureau Report Button - Redirect to PDF
    const downloadReportBtn = document.getElementById("download-report");
    if (downloadReportBtn) {
        downloadReportBtn.addEventListener("click", function () {
            window.location.href = "https://competition-bureau.canada.ca/sites/default/files/attachments/2023/CB-Retail-Grocery-Market-Study-Report-EN-2023-06-23.pdf";
        });
    }
});
