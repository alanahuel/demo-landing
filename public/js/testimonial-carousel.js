// Funcionalidad del carrusel de testimonios
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('testimonialContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const indicators = document.querySelectorAll('.indicator');
  
  // Verificar que todos los elementos existen
  if (!container || !prevBtn || !nextBtn) {
    console.error('Elementos del carrusel no encontrados');
    return;
  }
  
  let currentIndex = 0;
  const totalTestimonials = 5;
  
  // Función para actualizar el carrusel
  function updateCarousel() {
    const translateX = -currentIndex * 100;
    container.style.transform = `translateX(${translateX}%)`;
    
    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.remove('bg-gray-300');
        indicator.classList.add('bg-blue-600');
      } else {
        indicator.classList.remove('bg-blue-600');
        indicator.classList.add('bg-gray-300');
      }
    });
  }
  
  // Navegación con botones
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    updateCarousel();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    updateCarousel();
  });
  
  // Navegación con indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });
  
  // Navegación con teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    }
  });
  
  // Auto-play opcional (comentado por defecto)
  // setInterval(() => {
  //   nextBtn.click();
  // }, 5000);
});
