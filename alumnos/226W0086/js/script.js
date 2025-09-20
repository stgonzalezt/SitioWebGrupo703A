document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('¡Gracias por tu mensaje! Te contactaré pronto.');
  this.reset();
});

const today = new Date().toISOString().split('T')[0];
document.getElementById('fecha-inicio').setAttribute('min', today);
