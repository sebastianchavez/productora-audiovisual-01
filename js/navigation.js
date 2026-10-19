/* ============================================
   NAVEGACIÓN - NAVBAR Y MENÚ MÓVIL
   ============================================ */

(function() {
  // Resaltar link activo según la página actual
  function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-menu a');
    
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // Navbar shrink al hacer scroll
  function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Toggle del menú móvil
  function setupMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!toggleBtn || !mobileMenu) return;
    
    mobileMenu.id = 'mobile-navigation';
    toggleBtn.type = 'button';
    toggleBtn.setAttribute('aria-controls', mobileMenu.id);

    function setOpen(open) {
      mobileMenu.classList.toggle('open', open);
      mobileMenu.inert = !open;
      toggleBtn.setAttribute('aria-expanded', String(open));
      toggleBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      // Lucide replaces the original <i> with an <svg> after initialization.
      toggleBtn.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" class="w-7 h-7"></i>`;
      if (window.lucide) window.lucide.createIcons();
    }

    setOpen(false);
    toggleBtn.addEventListener('click', () => setOpen(!mobileMenu.classList.contains('open')));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
        setOpen(false);
        toggleBtn.focus();
      }
    });
    document.addEventListener('click', (event) => {
      // The icon is replaced during the click; use the original event path.
      if (mobileMenu.classList.contains('open') && !event.composedPath().includes(toggleBtn.closest('.navbar'))) setOpen(false);
    });
    window.matchMedia('(min-width: 1280px)').addEventListener('change', () => setOpen(false));

    // Cerrar menú al hacer click en un link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        setOpen(false);
      });
    });
  }

  // Inicializar
  document.addEventListener('DOMContentLoaded', () => {
    highlightActiveLink();
    setupMobileMenu();
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  });
})();
