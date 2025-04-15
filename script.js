// Función para hacer scroll hacia la siguiente sección al hacer clic en la flecha
document.getElementById('scroll-arrow').addEventListener('click', function() {
    document.querySelector('#proyectos').scrollIntoView({
      behavior: 'smooth'
    });
  });