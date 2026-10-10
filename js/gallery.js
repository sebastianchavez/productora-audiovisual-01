/* ============================================
   GALERÍA - FILTROS Y LIGHTBOX
   ============================================ */

(function() {
  let currentFilter = 'all';
  let lightboxImages = [];

  function waitForTailwind(retries = 30) {
    return new Promise((resolve) => {
      const check = () => {
        const t = document.createElement('div');
        t.className = 'hidden';
        document.body.appendChild(t);
        const ok = window.getComputedStyle(t).display === 'none';
        document.body.removeChild(t);
        if (ok || retries <= 0) resolve();
        else setTimeout(() => check(--retries), 50);
      };
      check();
    });
  }

  function renderGallery(items) {
    const container = document.querySelector('#gallery-grid');
    if (!container) return;

    lightboxImages = items;
    container.innerHTML = items.map(item => `
      <div class="gallery-item reveal" data-category="${item.category}" data-id="${item.id}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" 
             onerror="this.onerror=null;this.src=this.dataset.fallback;"
             data-fallback="${generatePlaceholder(item.title, item.category)}">
        <div class="gallery-overlay">
          <div>
            <span class="text-xs uppercase tracking-wider text-accent font-semibold">${item.category}</span>
            <h3 class="text-white font-display text-lg mt-1">${item.title}</h3>
          </div>
        </div>
      </div>
    `).join('');

    // Reaplicar íconos
    if (window.lucide) window.lucide.createIcons();
    
    // Re-aplicar reveal observer usando función expuesta
    if (window.setupReveal) {
      window.setupReveal();
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05 });

      container.querySelectorAll('.gallery-item').forEach(el => observer.observe(el));
    }
    
    // Setup clicks para lightbox
    container.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => openLightbox(parseInt(item.dataset.id)));
    });
  }

  // Generar placeholder SVG en línea
  function generatePlaceholder(title, category) {
    const colors = {
      'video': ['#dc2626', '#7f1d1d'],
      'foto': ['#f59e0b', '#92400e'],
      'evento': ['#3b82f6', '#1e3a8a']
    };
    const [c1, c2] = colors[category] || ['#dc2626', '#1a1a1a'];
    const safeTitle = (title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
      <defs>
        <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stop-color='${c1}'/>
          <stop offset='100%' stop-color='${c2}'/>
        </linearGradient>
      </defs>
      <rect width='400' height='300' fill='url(#g)'/>
      <circle cx='200' cy='150' r='40' fill='white' opacity='0.3'/>
      <polygon points='190,135 190,165 215,150' fill='white'/>
      <text x='200' y='220' font-family='Inter, sans-serif' font-size='14' fill='white' text-anchor='middle' font-weight='600'>${safeTitle}</text>
      <text x='200' y='240' font-family='Inter, sans-serif' font-size='10' fill='white' text-anchor='middle' opacity='0.7'>${category}</text>
    </svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }

  function applyFilter(category) {
    currentFilter = category;
    const allItems = (window.PRODUCTORA_DATA && window.PRODUCTORA_DATA.gallery) || [];
    
    const filtered = category === 'all' 
      ? allItems 
      : allItems.filter(item => item.category === category);
    
    renderGallery(filtered);
  }

  function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.dataset.filter;
        applyFilter(category);
      });
    });
  }

  // Lightbox
  function openLightbox(id) {
    const item = lightboxImages.find(i => i.id === id);
    if (!item) return;

    const lightbox = document.querySelector('#lightbox');
    const img = document.querySelector('#lightbox-img');
    if (!lightbox || !img) return;

    img.onerror = function() {
      this.onerror = null;
      this.src = generatePlaceholder(item.title, item.category);
    };
    img.src = item.src;
    img.alt = item.title;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const lightbox = document.querySelector('#lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function setupLightbox() {
    const closeBtn = document.querySelector('.lightbox-close');
    const lightbox = document.querySelector('#lightbox');
    
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });
    }
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Inicializar
  function init() {
    waitForTailwind().then(() => {
      if (window.PRODUCTORA_DATA && window.PRODUCTORA_DATA.gallery) {
        renderGallery(window.PRODUCTORA_DATA.gallery);
      }
      setupFilters();
      setupLightbox();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
  if (document.readyState !== 'loading') {
    init();
  }
})();