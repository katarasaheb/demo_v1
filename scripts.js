document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Sticky nav ---------- */
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  /* ---------- Fade-in observer ---------- */
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

  /* ---------- Animated counters (Crisis section) ---------- */
  const counters = document.querySelectorAll(".crisis-number");
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  const animateCount = el => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(progress);
      el.textContent = Math.floor(eased * target) + suffix;
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
  counters.forEach(c => counterObserver.observe(c));

  /* ---------- iStack regular diagram hover ---------- */
  const istackLayers = document.querySelectorAll('.istack-diagram .layer');
  const istackDetailBox = document.querySelector('.layer-details');

  istackLayers.forEach(layer => {
    layer.addEventListener('mouseenter', () => {
      istackDetailBox.innerHTML = `<p>${layer.dataset.desc}</p>`;
    });
    layer.addEventListener('mouseleave', () => {
      istackDetailBox.innerHTML = `<p>Hover over a layer to see details.</p>`;
    });
  });

  /* ---------- Flywheel diagram hover & tooltip ---------- */
  const tooltip = document.getElementById('layerTooltip');
  const flywheelLayers = document.querySelectorAll('.flywheel-container .layer');

  flywheelLayers.forEach(layer => {
    const dataStream = layer.querySelector('.data-stream');

    layer.addEventListener('mouseenter', () => {
      tooltip.innerText = layer.dataset.desc;
      tooltip.style.opacity = 1;

      // Highlight data-stream on hover
      if (dataStream) dataStream.style.background = 'linear-gradient(90deg, #ff6b3a, #002E50)';
    });

    layer.addEventListener('mousemove', e => {
      tooltip.style.top = e.clientY + 20 + 'px';
      tooltip.style.left = e.clientX + 20 + 'px';
    });

    layer.addEventListener('mouseleave', () => {
      tooltip.style.opacity = 0;
      if (dataStream) dataStream.style.background = 'linear-gradient(90deg, #002E50, #EC5E27)';
    });
  });

  /* ---------- How It Works hover ---------- */
  const howItems = document.querySelectorAll('.how-it-works ul li');
  const howDetailBox = document.querySelector('.how-it-works-detail');

  howItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      howDetailBox.innerHTML = `<p>${item.dataset.desc}</p>`;
    });

    item.addEventListener('mouseleave', () => {
      howDetailBox.innerHTML = `<p>Hover over a point to see details.</p>`;
    });
  });

});

document.addEventListener("DOMContentLoaded", () => {

  /* Fade-in observer for layer cards + intro */
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

  /* Layer Tooltip */
  const tooltip = document.getElementById('layerTooltip');
  const layerCards = document.querySelectorAll('.layer-card');

  layerCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      tooltip.innerText = card.dataset.desc;
      tooltip.style.opacity = 1;
    });

    card.addEventListener('mousemove', e => {
      tooltip.style.top = e.clientY + 20 + 'px';
      tooltip.style.left = e.clientX + 20 + 'px';
    });

    card.addEventListener('mouseleave', () => {
      tooltip.style.opacity = 0;
    });
  });

  /* How It Works Hover */
  const howItems = document.querySelectorAll('.how-it-works ul li');
  const howDetailBox = document.querySelector('.how-it-works-detail');

  howItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      howDetailBox.innerHTML = `<p>${item.dataset.desc}</p>`;
    });

    item.addEventListener('mouseleave', () => {
      howDetailBox.innerHTML = `<p>Hover over a point to see details.</p>`;
    });
  });

});

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Staggered fade-in for layer cards ---------- */
  const layerCards = document.querySelectorAll('.layer-card');

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          layerCards.forEach((card, index) => {
            card.style.animation = `fadeUpStagger 0.8s ease-out forwards`;
            card.style.animationDelay = `${index * 0.2}s`;
          });
          fadeObserver.disconnect(); // stop observing once triggered
        }
      });
    },
    { threshold: 0.2 }
  );

  layerCards.forEach(card => fadeObserver.observe(card));

  /* ---------- Tooltip ---------- */
  const tooltip = document.getElementById('layerTooltip');
  layerCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      tooltip.innerText = card.dataset.desc;
      tooltip.style.opacity = 1;
    });
    card.addEventListener('mousemove', e => {
      tooltip.style.top = e.clientY + 20 + 'px';
      tooltip.style.left = e.clientX + 20 + 'px';
    });
    card.addEventListener('mouseleave', () => {
      tooltip.style.opacity = 0;
    });
  });

  /* ---------- How It Works hover ---------- */
  const howItems = document.querySelectorAll('.how-it-works ul li');
  const howDetailBox = document.querySelector('.how-it-works-detail');

  howItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      howDetailBox.innerHTML = `<p>${item.dataset.desc}</p>`;
    });
    item.addEventListener('mouseleave', () => {
      howDetailBox.innerHTML = `<p>Hover over a point to see details.</p>`;
    });
  });

});

document.querySelectorAll('.system-step').forEach(step => {
  step.addEventListener('mouseenter', () => {
    document.querySelectorAll('.system-step')
      .forEach(s => s.classList.remove('active'));
    step.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Staggered entrance ---------- */
  document.querySelectorAll('[data-delay]').forEach(el => {
    el.style.transitionDelay = `${el.dataset.delay * 120}ms`;
  });

  /* ---------- Layer tooltip ---------- */
  const tooltip = document.getElementById("layerTooltip");
  document.querySelectorAll(".layer-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      tooltip.innerHTML = `<p>${card.dataset.desc}</p>`;
    });
    card.addEventListener("mouseleave", () => {
      tooltip.innerHTML = `<p>Hover over a layer to see details.</p>`;
    });
  });

  /* ---------- Scroll-synced + auto-advance moat ---------- */
  const steps = document.querySelectorAll(".system-step");
  let current = 0;
  let idleTimer;

  const activateStep = index => {
    steps.forEach(s => s.classList.remove("active"));
    steps[index].classList.add("active");
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        current = [...steps].indexOf(entry.target);
        activateStep(current);
        resetIdle();
      }
    });
  }, { threshold: 0.6 });

  steps.forEach(step => observer.observe(step));

  function resetIdle() {
    clearInterval(idleTimer);
    idleTimer = setInterval(() => {
      current = (current + 1) % steps.length;
      activateStep(current);
    }, 2400);
  }

  resetIdle();
});

/* ===============================
   iStack Moat Sync
   =============================== */

const moatSteps = document.querySelectorAll('.moat-step');
let moatIndex = 0;

const advanceMoat = () => {
  moatSteps.forEach(s => s.classList.remove('active'));
  moatSteps[moatIndex].classList.add('active');
  moatIndex = (moatIndex + 1) % moatSteps.length;
};

setInterval(advanceMoat, 2200);

const spineProgress = document.querySelector(".spine-progress");
const totalLayers = document.querySelectorAll(".istack-layer").length;

document.querySelectorAll(".istack-layer").forEach((layer, index) => {
  layer.addEventListener("mouseenter", () => {
    const progress = ((index + 1) / totalLayers) * 100;
    spineProgress.style.height = `${progress}%`;
  });
});

const sections = ["hero", "crisis", "istack"];
let activeIndex = 0;
let isLocked = false;

window.addEventListener("wheel", (e) => {
  if (isLocked) return;

  const direction = e.deltaY > 0 ? 1 : -1;
  const nextIndex = activeIndex + direction;

  if (nextIndex < 0 || nextIndex >= sections.length) return;

  isLocked = true;
  activeIndex = nextIndex;

  document
    .getElementById(sections[activeIndex])
    .scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    isLocked = false;
  }, 900);
});

// =========================================================
// ALBERTA SECTION — Animated Numbers on Scroll
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".interactive-text");

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const increment = Math.ceil(target / 100); // 100 steps for smooth animation

    const updateCounter = () => {
      current += increment;
      if (current > target) current = target;
      counter.textContent = current.toLocaleString();
      if (current < target) {
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
});
