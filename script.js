// Obtener elementos del DOM
var navbarToggle = document.getElementById('navbarToggle');
var closeMenu = document.getElementById('closeMenu');
var navbarMenu = document.getElementById('navbarMenu');
var messageForm = document.getElementById('messageForm');
var responseMessage = document.getElementById('responseMessage');

// Evento para abrir y cerrar el menú de navegación
navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('navbar-menu-show');
});

closeMenu.addEventListener('click', function() {
  navbarMenu.classList.remove('navbar-menu-show');
});

// Evento de envío de formulario
messageForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var phoneNumbersInput = document.getElementById('phoneNumbers');
  var messageInput = document.getElementById('message');

  var phoneNumbers = phoneNumbersInput.value.trim();
  var message = messageInput.value.trim();

  if (phoneNumbers === '' || message === '') {
    responseMessage.textContent = 'Por favor, complete todos los campos.';
    return;
  }

  var numbersArray = phoneNumbers.split(',');

  // Eliminar espacios en blanco alrededor de los números de teléfono
  numbersArray = numbersArray.map(function(number) {
    return number.trim();
  });

  // Enviar mensajes a los números de teléfono
  sendMessages(numbersArray, message);

  // Restablecer valores del formulario
  phoneNumbersInput.value = '';
  messageInput.value = '';
  responseMessage.textContent = 'Enviando mensajes...';

  // Deshabilitar el botón de envío mientras se envían los mensajes
  var submitButton = messageForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
});

// Función para enviar mensajes a través de una API
function sendMessages(numbersArray, message) {
  // Simulación de envío exitoso después de 2 segundos
  setTimeout(function() {
    responseMessage.textContent = 'Mensajes enviados exitosamente a ' + numbersArray.join(', ');
    var submitButton = messageForm.querySelector('button[type="submit"]');
    submitButton.disabled = false;
  }, 2000);
}
