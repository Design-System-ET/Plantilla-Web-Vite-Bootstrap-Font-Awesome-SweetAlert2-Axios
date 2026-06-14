import axios from "axios";
import { Persona } from "./entities/Persona";
import "./scripts/contacto";

declare const Swal: any;

const persona1 = new Persona(1, "Claudio", "Gonzalez", 30, "claudio.gonzalez@example.com");
console.log(persona1.saludar());


const loadUserButton = document.querySelector<HTMLButtonElement>('#fetch-user');
if (loadUserButton) {
    loadUserButton.addEventListener('click', async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            const user = response.data;
            Swal.fire({
                title: 'Usuario cargado',
                html: `<strong>${user.name}</strong><br>${user.email}<br>${user.phone}`,
                icon: 'success',
                confirmButtonText: 'Cerrar'
            });
        } catch (error) {
            console.error('Error fetching user:', error);
            Swal.fire({
                title: 'Error al cargar usuario',
                text: 'Intenta nuevamente más tarde.',
                icon: 'error',
                confirmButtonText: 'Cerrar'
            });
        }
    });
}

//cerramos el menú al hacer click en un enlace (para dispositivos móviles)
const checkbox = document.querySelector<HTMLInputElement>('#menu-toggle');
if (checkbox) {
  document.querySelectorAll<HTMLAnchorElement>('.menu a').forEach(a => {
    a.addEventListener('click', () => { checkbox.checked = false; });
  });
}