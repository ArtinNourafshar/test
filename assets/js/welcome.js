document.addEventListener('DOMContentLoaded', function() {
  const welcomeMessage = document.getElementById('welcomeMessage');
  welcomeMessage.style.display = 'block';

  setTimeout(function() {
      welcomeMessage.style.display = 'none';
  }, 5000); 
});
