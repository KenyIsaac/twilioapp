document.addEventListener('DOMContentLoaded', function() {
    var navbarToggle = document.getElementById('navbarToggle');
    var navbarMenu = document.getElementById('navbarMenu');
    var closeMenu = document.getElementById('closeMenu');
  
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('navbar-menu-show');
    });
  
    closeMenu.addEventListener('click', function() {
      navbarMenu.classList.remove('navbar-menu-show');
    });
  
    var messageForm = document.getElementById('messageForm');
    var responseMessage = document.getElementById('responseMessage');
  
    messageForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      var phoneNumbers = document.getElementById('phoneNumbers').value;
      var message = document.getElementById('message').value;
  
      var phoneNumbersArray = phoneNumbers.split(',');
      var promises = [];
  
      phoneNumbersArray.forEach(function(number) {
        promises.push(sendMessage(number.trim(), message));
      });
  
      Promise.all(promises)
        .then(function() {
          responseMessage.innerText = 'Mensajes enviados exitosamente.';
          messageForm.reset();
        })
        .catch(function() {
          responseMessage.innerText = 'Hubo un error al enviar los mensajes.';
        });
    });
  
    function sendMessage(phoneNumber, message) {
      return new Promise(function(resolve, reject) {
        // Aquí va la lógica para enviar el mensaje
        // ...
        // Si el mensaje se envía exitosamente, se llama a resolve()
        // Si hay algún error al enviar el mensaje, se llama a reject()
      });
    }
  });
  