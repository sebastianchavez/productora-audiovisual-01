/* ============================================
   ANIMACIONES - SCROLL REVEAL Y CONTADORES
   ============================================ */

(function() {
  // Scroll reveal con IntersectionObserver
  function setupRevealAnimations() {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!elements.length) return;

    // Verificar soporte de IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px 0px 0px'
    });

    elements.forEach(el => observer.observe(el));

    // Safety: tras 4s, forzar todos los reveals visibles
    setTimeout(() => {
      document.body.classList.add('safety-revealed');
    }, 4000);
  }

  // Contadores animados
  function animateCounter(element, target, suffix = '', duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * eased);
      
      element.textContent = current + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  function setupCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(c => {
        const target = parseInt(c.getAttribute('data-counter'), 10);
        const suffix = c.getAttribute('data-suffix') || '';
        c.textContent = target + suffix;
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          animateCounter(el, target, suffix);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
  }

  // Smooth scroll para anclas internas
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length <= 1) return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // Esperar a que Tailwind compile
  function waitForTailwind(retries = 30) {
    return new Promise((resolve) => {
      const check = () => {
        const testEl = document.createElement('div');
        testEl.className = 'hidden';
        document.body.appendChild(testEl);
        const isHidden = window.getComputedStyle(testEl).display === 'none';
        document.body.removeChild(testEl);
        
        if (isHidden || retries <= 0) {
          resolve();
        } else {
          setTimeout(() => check(--retries), 50);
        }
      };
      check();
    });
  }

  // Renderizar íconos Lucide
  function initLucideIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Inicializar todo (Tailwind primero)
  function initAll() {
    waitForTailwind().then(() => {
      initLucideIcons();
      setupRevealAnimations();
      setupCounters();
      setupSmoothScroll();
    });
  }

  document.addEventListener('DOMContentLoaded', initAll);
  if (document.readyState !== 'loading') {
    initAll();
  }

  // Exponer funciones para uso externo (cuando se renderizan elementos dinámicamente)
  window.setupReveal = setupRevealAnimations;
  window.setupCounters = setupCounters;
  window.initLucide = initLucideIcons;
})();