/* ============================================
   NAVEGACIÓN - NAVBAR Y MENÚ MÓVIL
   ============================================ */

(function() {
  // Resaltar link activo según la página actual
  function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
        link.classList.add('active');
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
    
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', 
          mobileMenu.classList.contains('open') ? 'x' : 'menu'
        );
        if (window.lucide) window.lucide.createIcons();
      }
    });

    // Cerrar menú al hacer click en un link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          if (window.lucide) window.lucide.createIcons();
        }
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