import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const emailjsConfig = {
  userId: '0VyDd9Vl4u9VIEXY-',
  serviceId: 'service_8lq7rwn',
  templateId: 'template_c6mwx5t',
};

document.addEventListener('DOMContentLoaded', function () {

  emailjs.init(emailjsConfig.userId);

  const enviarBtn = document.getElementById('enviar') as HTMLButtonElement | null;
  if (!enviarBtn) return;

  enviarBtn.addEventListener('click', function () {
    const nombreEl = document.getElementById('nombre') as HTMLInputElement | null;
    const apellidoEl = document.getElementById('apellido') as HTMLInputElement | null;
    const emailEl = document.getElementById('email') as HTMLInputElement | null;
    const mensajeEl = document.getElementById('mensaje') as HTMLTextAreaElement | null;

    if (!nombreEl || !apellidoEl || !emailEl || !mensajeEl) {
      Swal.fire('Error', 'Faltan elementos del formulario', 'error');
      return;
    }

    const params = {
        nombre: nombreEl.value,
        apellido: apellidoEl.value,
        email: emailEl.value,
        mensaje: mensajeEl.value,
    };

    emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, params)
      .then(function () {
        Swal.fire({
          title: 'Email Enviado',
          text: '¡Se envio correctamente tu mensaje!',
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) location.reload();
        });
      })
      .catch(function () {
        Swal.fire({
          title: 'Envio Fallido',
          text: '¡ERROR - hubo un error al intentar enviar su mensaje',
          icon: 'error',
          showCancelButton: false,
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) location.reload();
        });
      });
  });

});