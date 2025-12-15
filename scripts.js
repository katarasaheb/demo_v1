/* =========================================================
   Kitchin — Main JavaScript
   Purpose: UI behavior only (layout-agnostic)
   Fully mobile-adaptive
   Safe to replace previous JS entirely
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------
     1. Mobile Navigation Toggle (Adaptive)
     ----------------------------------------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.classList.toggle("is-active", isOpen);
      body.classList.toggle("nav-open", isOpen); // lock scroll on mobile
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
        body.classList.remove("nav-open");
      }
    });
  });

  /* -----------------------------------------
     3. Reset nav state on resize (mobile → desktop)
     ----------------------------------------- */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navMenu?.classList.contains("is-open")) {
      navMenu.classList.remove("is-open");
      navToggle?.classList.remove("is-active");
      body.classList.remove("nav-open");
    }
  });

  /* -----------------------------------------
     4. Smooth anchor scrolling
     ----------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
     5. Contact form UX protection (FormSubmit-safe)
     ----------------------------------------- */
  const contactForm = document.querySelector("form[data-contact-form]");

  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      const submitBtn = contactForm.querySelector("button[type='submit']");
      if (submitBtn) submitBtn.disabled = true;
    });
  }

  /* -----------------------------------------
     6. Defensive cleanup (legacy safety)
     ----------------------------------------- */
  window.onscroll = null;
  window.onresize = null;

});

