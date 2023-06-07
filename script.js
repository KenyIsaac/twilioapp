// Función para enviar un mensaje de texto utilizando Twilio
function enviarMensaje() {
    const accountSid = 'ACf6f640a85529412dbbfeb0e01ea7c28a';
    const authToken = 'e26cf268361280db8a11f05bd30c707d';
    const client = new Twilio(accountSid, authToken);
  
    const telefonoDestino = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
  
    client.messages.create({
      body: mensaje,
      to: telefonoDestino,
      from: '+573505305711'
    }).then((message) => {
      console.log('Mensaje enviado con SID: ' + message.sid);
      alert('Mensaje enviado correctamente');
    }).catch((error) => {
      console.error('Error al enviar el mensaje:', error);
      alert('Error al enviar el mensaje. Por favor, revisa la consola para más detalles.');
    });
  }
  