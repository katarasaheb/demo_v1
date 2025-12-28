document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     GLOBAL SAFETY FLAGS
     ===================================================== */
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const supportsIO = "IntersectionObserver" in window;

  /* =====================================================
     STICKY NAV (SMOOTH, BATTERY-SAFE)
     ===================================================== */
  const nav = document.querySelector(".nav");
  if (nav) {
    let lastScroll = 0;

    window.addEventListener(
      "scroll",
      () => {
        if (Math.abs(window.scrollY - lastScroll) < 5) return;
        nav.classList.toggle("scrolled", window.scrollY > 40);
        lastScroll = window.scrollY;
      },
      { passive: true }
    );
  }

  /* =====================================================
     INTERSECTION OBSERVER FALLBACK (SAFETY NET)
     ===================================================== */
  if (!supportsIO) {
    document.querySelectorAll(".fade-in").forEach(el =>
      el.classList.add("visible")
    );

    document
      .querySelectorAll(".crisis-number, .alberta-counter")
      .forEach(el => {
        const value =
          el.dataset.count || el.dataset.target || "";
        el.textContent = value.toLocaleString();
      });

    return;
  }

  /* =====================================================
     FADE-IN OBSERVER (APPLE POLISH)
     ===================================================== */
  const fadeObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        if (prefersReducedMotion) {
          entry.target.classList.add("visible");
        } else {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 120); // intentional Apple delay
        }

        fadeObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  if (!prefersReducedMotion) {
    document.querySelectorAll(".fade-in").forEach(el =>
      fadeObserver.observe(el)
    );
  } else {
    document.querySelectorAll(".fade-in").forEach(el =>
      el.classList.add("visible")
    );
  }

  /* =====================================================
     CRISIS COUNTERS (EASED, SAFARI-SAFE)
     ===================================================== */
  const crisisCounters = document.querySelectorAll(".crisis-number");
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  const animateCount = el => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(easeOutCubic(progress) * target);
      el.textContent = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    };

    requestAnimationFrame(tick);
  };

  if (crisisCounters.length) {
    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          if (prefersReducedMotion) {
            entry.target.textContent =
              entry.target.dataset.count?.toLocaleString() || "";
          } else {
            animateCount(entry.target);
          }

          counterObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );

    crisisCounters.forEach(c => counterObserver.observe(c));
  }

  /* =====================================================
     iSTACK CARDS — CLEAN OVERLAY ONLY
     ===================================================== */
  document.querySelectorAll(".istack-card").forEach(card => {
    const overlay = card.querySelector(".istack-card__overlay");
    const desc = card.dataset.desc;
    if (!overlay || !desc) return;
    overlay.innerHTML = `<p>${desc}</p>`;
  });

  /* =====================================================
     ALBERTA COUNTERS (SUFFIX-AWARE, SAFE)
     ===================================================== */
  const albertaCounters = document.querySelectorAll(".alberta-counter");

  const animateAlbertaCounter = counter => {
    const target = +counter.dataset.target;
    const suffix = counter.dataset.suffix || "";
    const duration = 1800;
    const start = performance.now();

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = target.toLocaleString() + suffix;
      }
    };

    requestAnimationFrame(tick);
  };

  if (albertaCounters.length) {
    const albertaObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          if (prefersReducedMotion) {
            entry.target.textContent =
              entry.target.dataset.target?.toLocaleString() || "";
          } else {
            animateAlbertaCounter(entry.target);
          }

          albertaObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    albertaCounters.forEach(c => albertaObserver.observe(c));
  }

});
