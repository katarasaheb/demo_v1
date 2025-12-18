document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     STICKY NAV
  =============================== */
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  /* ===============================
     FADE-IN OBSERVER
  =============================== */
  const fadeObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".fade-in").forEach(el => fadeObserver.observe(el));

  /* ===============================
     CRISIS COUNTERS
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
      el.textContent = Math.floor(easeOutCubic(progress) * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    };

    requestAnimationFrame(tick);
  };

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

  /* ===============================
     iSTACK OVERLAY & TOOLTIP
  =============================== */
  const tooltip = document.getElementById("layerTooltip");

  // Set overlay text once for all iStack cards
  document.querySelectorAll(".istack-card").forEach(card => {
    const overlay = card.querySelector(".istack-card__overlay");
    overlay.innerHTML = `<p>${card.dataset.desc}</p>`;

    // Tooltip for floating description
    card.addEventListener("mouseenter", () => {
      tooltip.innerText = card.dataset.desc;
      tooltip.style.opacity = 1;
    });
    card.addEventListener("mousemove", e => {
      tooltip.style.top = e.clientY + 20 + "px";
      tooltip.style.left = e.clientX + 20 + "px";
    });
    card.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
    });
  });

  // iStack diagram hover (left column)
  const istackLayers = document.querySelectorAll(".istack-diagram .layer");
  const istackDetailBox = document.querySelector(".layer-details");

  istackLayers.forEach(layer => {
    layer.addEventListener("mouseenter", () => {
      istackDetailBox.innerHTML = `<p>${layer.dataset.desc}</p>`;
    });
    layer.addEventListener("mouseleave", () => {
      istackDetailBox.innerHTML = `<p>Hover over a layer to see details.</p>`;
    });
  });

  /* ===============================
     FLYWHEEL DIAGRAM HOVER
  =============================== */
  const flywheelLayers = document.querySelectorAll(".flywheel-container .layer");
  flywheelLayers.forEach(layer => {
    const dataStream = layer.querySelector(".data-stream");
    layer.addEventListener("mouseenter", () => {
      tooltip.innerText = layer.dataset.desc;
      tooltip.style.opacity = 1;
      if (dataStream) dataStream.style.background = "linear-gradient(90deg, #ff6b3a, #002E50)";
    });
    layer.addEventListener("mousemove", e => {
      tooltip.style.top = e.clientY + 20 + "px";
      tooltip.style.left = e.clientX + 20 + "px";
    });
    layer.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
      if (dataStream) dataStream.style.background = "linear-gradient(90deg, #002E50, #EC5E27)";
    });
  });

  /* ===============================
     HOW IT WORKS HOVER
  =============================== */
  const howItems = document.querySelectorAll(".how-it-works ul li");
  const howDetailBox = document.querySelector(".how-it-works-detail");

  howItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      howDetailBox.innerHTML = `<p>${item.dataset.desc}</p>`;
    });
    item.addEventListener("mouseleave", () => {
      howDetailBox.innerHTML = `<p>Hover over a point to see details.</p>`;
    });
  });

  /* ===============================
     STAGGERED FADE-IN FOR LAYER CARDS
  =============================== */
  const layerCards = document.querySelectorAll(".layer-card");
  const layerObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          layerCards.forEach((card, index) => {
            card.style.animation = `fadeUpStagger 0.8s ease-out forwards`;
            card.style.animationDelay = `${index * 0.2}s`;
          });
          layerObserver.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );
  layerCards.forEach(card => layerObserver.observe(card));

  /* ===============================
     SYSTEM STEPS (MOAT + SCROLL SYNC)
  =============================== */
  const steps = document.querySelectorAll(".system-step");
  let current = 0;
  let idleTimer;

  const activateStep = index => {
    steps.forEach(s => s.classList.remove("active"));
    steps[index].classList.add("active");
  };

  const stepObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        current = [...steps].indexOf(entry.target);
        activateStep(current);
        resetIdle();
      }
    });
  }, { threshold: 0.6 });
  steps.forEach(step => stepObserver.observe(step));

  function resetIdle() {
    clearInterval(idleTimer);
    idleTimer = setInterval(() => {
      current = (current + 1) % steps.length;
      activateStep(current);
    }, 2400);
  }
  resetIdle();

  /* ===============================
     iSTACK MOAT SYNC
  =============================== */
  const moatSteps = document.querySelectorAll(".moat-step");
  let moatIndex = 0;

  const advanceMoat = () => {
    moatSteps.forEach(s => s.classList.remove("active"));
    moatSteps[moatIndex].classList.add("active");
    moatIndex = (moatIndex + 1) % moatSteps.length;
  };
  setInterval(advanceMoat, 2200);

  /* ===============================
     SPINE PROGRESS
  =============================== */
  const spineProgress = document.querySelector(".spine-progress");
  const totalLayers = document.querySelectorAll(".istack-layer").length;
  document.querySelectorAll(".istack-layer").forEach((layer, index) => {
    layer.addEventListener("mouseenter", () => {
      spineProgress.style.height = `${((index + 1) / totalLayers) * 100}%`;
    });
  });

  /* ===============================
     SECTION SCROLL LOCK
  =============================== */
  const sections = ["hero", "crisis", "istack"];
  let isLocked = false;

  window.addEventListener("wheel", e => {
    if (isLocked) return;
    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = activeIndex + direction;
    if (nextIndex < 0 || nextIndex >= sections.length) return;

    isLocked = true;
    activeIndex = nextIndex;
    document.getElementById(sections[activeIndex]).scrollIntoView({ behavior: "smooth" });

    setTimeout(() => (isLocked = false), 900);
  });

  /* ===============================
     ALBERTA SECTION — ANIMATED NUMBERS
  =============================== */
const animateCounter = counter => {
  const target = +counter.dataset.target;
  let current = 0;
  const increment = Math.ceil(target / 100);

  // detect prefix/suffix outside the span
  const parent = counter.parentElement;
  const prefix = parent.textContent.replace(counter.textContent, "").replace(/\d|,/g, "");
  const suffix = parent.textContent.includes("+") ? "+" : parent.textContent.includes("B") ? "B" : "";

  const update = () => {
    current += increment;
    if (current > target) current = target;
    counter.textContent = current.toLocaleString();
    parent.textContent = prefix + counter.textContent + suffix;
    if (current < target) requestAnimationFrame(update);
  };
  update();
};

  const counterSectionObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  interactiveCounters.forEach(counter => counterSectionObserver.observe(counter));
});

/* ===============================
   ALBERTA COUNTERS WITH SUFFIX
=============================== */
const albertaCounters = document.querySelectorAll(".alberta-counter");

const animateAlbertaCounter = (counter) => {
  const target = +counter.dataset.target;
  const suffix = counter.dataset.suffix || "";
  let current = 0;
  const duration = 2000; // 2 seconds
  const stepTime = Math.max(20, duration / target);

  const update = () => {
    current += Math.ceil(target / (duration / stepTime));
    if (current > target) current = target;
    counter.textContent = current.toLocaleString() + suffix;
    if (current < target) {
      requestAnimationFrame(update);
    }
  };
  update();
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateAlbertaCounter(entry.target);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

albertaCounters.forEach(counter => observer.observe(counter));
