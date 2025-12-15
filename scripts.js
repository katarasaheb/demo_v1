/* =========================================================
   Kitchin — Main JavaScript
   Purpose: UI behavior only (layout-agnostic)
   Fully mobile-adaptive
   Production-safe
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------
     1. Mobile Navigation Toggle (Adaptive)
     ----------------------------------------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const nav = document.querySelector(".nav");
  const body = document.body;

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.classList.toggle("is-active", isOpen);
      body.classList.toggle("nav-open", isOpen);
    });
  }

  /* -----------------------------------------
     2. Close mobile nav on link click
     ----------------------------------------- */
  document.querySelectorAll(".nav-menu a").forEach(link => {
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
     5. Sticky nav transparency (Tesla-style)
     ----------------------------------------- */
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    });
  }

  /* -----------------------------------------
     6. Contact form UX protection
     ----------------------------------------- */
  const contactForm = document.querySelector("form[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      const submitBtn = contactForm.querySelector("button[type='submit']");
      if (submitBtn) submitBtn.disabled = true;
    });
  }

});
