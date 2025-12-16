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

  /* ---------- iStack layer hover (regular + flywheel) ---------- */
  const layers = document.querySelectorAll('.istack-diagram .layer');
  const layerDetailBox = document.querySelector('.layer-details');

  layers.forEach(layer => {
    layer.addEventListener('mouseenter', () => {
      layerDetailBox.innerHTML = `<p>${layer.dataset.desc}</p>`;
    });
    layer.addEventListener('mouseleave', () => {
      layerDetailBox.innerHTML = `<p>Hover over a layer to see details.</p>`;
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

  /* ---------- Flywheel layer tooltip ---------- */
  const tooltip = document.getElementById('layerTooltip');

  layers.forEach(layer => {
    layer.addEventListener('mousemove', e => {
      tooltip.innerText = layer.dataset.desc;
      tooltip.style.top = e.clientY + 20 + 'px';
      tooltip.style.left = e.clientX + 20 + 'px';
      tooltip.style.opacity = 1;
    });
    layer.addEventListener('mouseleave', () => {
      tooltip.style.opacity = 0;
    });
  });

});
