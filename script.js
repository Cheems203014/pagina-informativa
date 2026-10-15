
document.querySelectorAll('nav a').forEach(function(enlace) {
  enlace.addEventListener('click', function() {
    console.log('Sección seleccionada:', enlace.textContent);
  });
});
