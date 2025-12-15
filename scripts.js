/* =========================================================
   Kitchin — Main JavaScript
   Purpose: UI behavior only (layout-agnostic)
   Safe to replace previous JS entirely
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------
     1. Mobile Navigation Toggle
     ----------------------------------------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("is-open");
      navToggle.classList.toggle("is-active");
    });
  }

  /* -----------------------------------------
     2. Close mobile nav on link click
     ----------------------------------------- */
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu?.classList.contains("is-open")) {
        navMenu.classList.remove("is-open");
        navToggle?.classList.remove("is-active");
      }
    });
  });

  /* -----------------------------------------
     3. Smooth anchor scrolling
     ----------------------------------------- */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(anchor => {
    anchor.addEventListener("click", e => {
      const targetId = anchor.getAttribute("href");

      if (targetId.length > 1) {
        const targetEl = document.querySelector(targetId);

        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });

  /* -----------------------------------------
     4. Contact Form Submission (Email-safe)
     ----------------------------------------- */
  const contactForm = document.querySelector("form[data-contact-form]");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector("button[type='submit']");
      if (submitBtn) submitBtn.disabled = true;

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: {
            "Accept": "application/json"
          }
        });

        if (response.ok) {
          contactForm.reset();
          alert("Thank you — we’ll be in touch shortly.");
        } else {
          alert("Something went wrong. Please try again or email us directly.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("Network error. Please try again later.");
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  /* -----------------------------------------
     5. Defensive: Disable legacy JS hooks
     ----------------------------------------- */
  // Prevent errors if old inline handlers exist
  window.onScroll = null;
  window.onresize = null;

});
