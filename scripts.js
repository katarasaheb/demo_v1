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
      if (navMenu?.classList.contain
