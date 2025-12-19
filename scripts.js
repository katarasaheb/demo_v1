document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     STICKY NAV (TESLA-LIKE RESTRAINT)
  =============================== */
  const nav = document.querySelector(".nav");
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    });
  }

  /* ===============================
     FADE-IN OBSERVER (APPLE POLISH)
  =============================== */
  const fadeObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 120); // intentional Apple delay
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".fade-in").forEach(el =>
    fadeObserver.observe(el)
  );

  /* ===============================
     CRISIS COUNTERS (EASED)
  =============================== */
  const crisisCounters = document.querySelectorAll(".crisis-number");

  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  const animateCount = el => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent =
        Math.floor(easeOutCubic(progress) * target).toLocaleString() + suffix;

      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString() + suffix;
    };

    requestAnimationFrame(tick);
  };

  if (crisisCounters.length) {
    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    crisisCounters.forEach(c => counterObserver.observe(c));
  }

  /* ===============================
     iSTACK CARDS — CLEAN OVERLAY ONLY
     (NO FLOATING TOOLTIPS)
  =============================== */
  document.querySelectorAll(".istack-card").forEach(card => {
    const overlay = card.querySelector(".istack-card__overlay");
    const desc = card.dataset.desc;

    if (overlay && desc) {
      overlay.innerHTML = `<p>${desc}</p>`;
    }
  });

  /* ===============================
     ALBERTA COUNTERS (SUFFIX-AWARE)
  =============================== */
  const albertaCounters = document.querySelectorAll(".alberta-counter");

  const animateAlbertaCounter = counter => {
    const target = +counter.dataset.target;
    const suffix = counter.dataset.suffix || "";
    const duration = 1800;
    const start = performance.now();

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = value.toLocaleString() + suffix;

      if (progress < 1) requestAnimationFrame(tick);
      else counter.textContent = target.toLocaleString() + suffix;
    };

    requestAnimationFrame(tick);
  };

  if (albertaCounters.length) {
    const albertaObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateAlbertaCounter(entry.target);
            albertaObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    albertaCounters.forEach(c => albertaObserver.observe(c));
  }

});
