// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    
    // Handle Scroll Animations for Hero Section
    const heroHeading = document.querySelector('.hero-heading');
    const heroSubheading = document.querySelector('.hero-subheading');
    const ctaButton = document.querySelector('.cta');
    
    // Hero Animation
    function fadeInHero() {
        heroHeading.classList.add('animate');
        heroSubheading.classList.add('animate');
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
    const problemDescription = document.querySelector('.problem-description');
    const sectionTitle = document.querySelector('.section-title');
    const problemStats = document.querySelectorAll('.stat');

    // Problem Section Animation
    function animateProblemSection() {
        sectionTitle.classList.add('animate');
        problemDescription.classList.add('animate');
        problemStats.forEach((stat, index) => {
            setTimeout(() => {
                stat.classList.add('animate');
            }, 300 * index);
        });
    }

    // Listen to window scroll event for Problem Section Animation
    window.addEventListener('scroll', function () {
        debounceScroll(function () {
            const problemSectionOffsetTop = document.getElementById('grocery-system').offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;
            if (scrollPosition > problemSectionOffsetTop) {
                animateProblemSection();
            }
        });
    });

    // Handle Industry Trends Animation
    const industryTrendsSection = document.querySelector('.industry-trends');

    function animateIndustryTrends() {
        industryTrendsSection.classList.add('animate');
    }

    // Listen to window scroll event for Industry Trends Section
    window.addEventListener('scroll', function () {
        debounceScroll(function () {
            const industryTrendsOffsetTop = document.querySelector('.industry-trends').offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;
            if (scrollPosition > industryTrendsOffsetTop) {
                animateIndustryTrends();
            }
        });
    });

    // Handle Scroll Back to Top Button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = "↑";
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    // Show or Hide Scroll-to-Top Button
    window.addEventListener('scroll', function () {
        debounceScroll(function () {
            if (window.scrollY > 300) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });
    });

    // Scroll to Top on Button Click
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Handle Download Button Click
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            window.location.href = '/path-to-your-download-file'; // Replace with actual file path
        });
    }
});
