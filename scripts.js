document.addEventListener("DOMContentLoaded", function () {

    // Handle Scroll Animations for Hero Section
    const heroHeading = document.querySelector('.hero-heading');
    const heroKeywords = document.querySelectorAll('.hero-keyword');
    const ctaButton = document.querySelector('.cta');
    
    // Hero Animation
    function fadeInHero() {
        heroHeading.classList.add('animate');
        heroKeywords.forEach((keyword, index) => {
            setTimeout(() => {
                keyword.classList.add('animate');
            }, 300 * index);
        });
        ctaButton.classList.add('animate');
    }

    // Function to handle scroll event debouncing
    let isScrolling = false;
    function debounceScroll(callback) {
        if (!isScrolling) {
            isScrolling = true;
            window.requestAnimationFrame(function () {
                callback();
                isScrolling = false;
            });
        }
    }

    // Listen to window scroll event for hero fade-in
    window.addEventListener('scroll', function () {
        debounceScroll(function () {
            const heroOffsetTop = document.getElementById('hero').offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;
            if (scrollPosition > heroOffsetTop) {
                fadeInHero();
            }
        });
    });

    // Handle Problem Stats Animation
    const problemCards = document.querySelectorAll('.problem-card');

    function animateProblemSection() {
        problemCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, 300 * index);
        });
    }

    // Listen to window scroll event for Problem Section Animation
    window.addEventListener('scroll', function () {
        debounceScroll(function () {
            const problemSectionOffsetTop = document.getElementById('problem-section').offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;
            if (scrollPosition > problemSectionOffsetTop) {
                animateProblemSection();
            }
        });
    });

    // Handle Solution Section Animation
    const solutionCards = document.querySelectorAll('.solution-card');

    function animateSolutionSection() {
        solutionCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, 300 * index);
        });
    }

    window.addEventListener('scroll', function () {
        debounceScroll(function () {
            const solutionSectionOffsetTop = document.getElementById('our-solution').offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;
            if (scrollPosition > solutionSectionOffsetTop) {
                animateSolutionSection();
            }
        });
    });

    // Ensure animations trigger on page load if sections are already in view
    animateProblemSection();
    animateSolutionSection();
});
