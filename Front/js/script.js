document.addEventListener('DOMContentLoaded', () => {
    const productosList = document.getElementById('productos-list');
    const buscarProductoBtn = document.getElementById('buscar-producto');
    const codigoBusquedaInput = document.getElementById('codigo-busqueda');
    const navigationLinks = document.querySelectorAll('.navigation a'); // Seleccionar todos los enlaces de navegación
    const btnNav = document.getElementById('btn-nav'); // Botón de navegación

    // Función para ocultar la barra lateral
    function ocultarBarraLateral() {
        btnNav.checked = false; // Desmarcar el checkbox para ocultar el menú
    }

    // Asignar evento de clic a cada enlace de navegación
    navigationLinks.forEach(link => {
        link.addEventListener('click', ocultarBarraLateral);
    });

    // Resto de tu código...
});


document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.navigation a');
    const sections = document.querySelectorAll('.section');

    // Agregar un evento a cada link del menú
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevenir el comportamiento por defecto

            // Obtener el target (la sección a mostrar)
            const targetSection = this.getAttribute('data-target');

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Mostrar la sección correspondiente
            document.getElementById(targetSection).classList.add('active');
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const form = button.nextElementSibling; // Obtiene el formulario que sigue al botón
            
            // Oculta todos los formularios
            document.querySelectorAll('form').forEach(otherForm => {
                if (otherForm !== form) {
                    otherForm.style.display = 'none'; // Oculta otros formularios
                }
            });

            // Alterna la visibilidad del formulario seleccionado
            if (form.style.display === 'none' || form.style.display === '') {
                form.style.display = 'flex'; // Muestra el formulario
                button.textContent = 'Ocultar Formulario'; // Cambia el texto del botón
            } else {
                form.style.display = 'none'; // Oculta el formulario
                button.textContent = 'Mostrar Formulario'; // Cambia el texto del botón
            }
        });
    });
});




document.getElementById('menu-button-unique').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdown-menu-unique');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; // Alternar el menú
});

document.getElementById('cerrar-sesion-boton-unique').addEventListener('click', function() {
    // Eliminar las variables 'rol' y 'token' del localStorage
    localStorage.removeItem('rol');
    localStorage.removeItem('token');

    alert('Sección cerrada y datos eliminados.');

    // Ocultar el menú después de cerrar sesión
    document.getElementById('dropdown-menu-unique').style.display = 'none';

    // Redirigir a la página de inicio
    window.location.href = 'http://172.16.101.109/index.html';
});






document.addEventListener('DOMContentLoaded', () => {
    verificarAcceso();
});

function verificarAcceso() {
    const rol = localStorage.getItem('rol');
    const currentUrl = window.location.href;

    // Definición de roles y sus páginas correspondientes
    const rolesPaginas = {
        'Cajero': 'http://172.16.101.109/Caja.html',
        'Gerente': 'http://172.16.101.109/Gerencia.html',
        'Administrador': 'http://172.16.101.109/Administrador.html'
    };

    // Verifica si el rol existe en el localStorage
    if (rol) {
        // Si la URL coincide con la página correspondiente al rol, no hacer nada
        if (currentUrl === rolesPaginas[rol]) {
            return; // Permitir el acceso
        } else {
            // Redirigir al inicio de sesión si no coincide
            window.location.href = 'http://172.16.101.109/index.html'; // Cambia esta URL si es necesario
        }
    } else {
        // Si no hay rol en localStorage, redirigir al inicio de sesión
        window.location.href = 'http://172.16.101.109/index.html'; // Cambia esta URL si es necesario
    }
}
