/**
 * Sistema de navegación y enlaces para Demo Landing
 */

// Función global para scroll suave
function scrollToSection(targetId) {
  const targetElement = document.getElementById(targetId);
  const header = document.getElementById('header');
  
  if (targetElement) {
    const headerHeight = header ? header.offsetHeight : 64;
    const targetPosition = targetElement.offsetTop - headerHeight - 20;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Inicializar navegación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  
  // Agregar event listeners a todos los enlaces de navegación
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
      
      // Cerrar menú móvil si está abierto
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        
        // Restaurar icono del botón
        const svg = mobileMenuButton?.querySelector('svg');
        if (svg) {
          svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
        }
      }
    });
  });
  
});

// Hacer funciones disponibles globalmente
window.scrollToSection = scrollToSection;

// También asegurar que openCalendlyPopup esté disponible globalmente
// Esta función se define en CalendlyModal.astro
if (typeof window.openCalendlyPopup === 'undefined') {
  window.openCalendlyPopup = function() {
    console.warn('openCalendlyPopup no está disponible. Asegúrate de que CalendlyModal esté cargado.');
  };
}
