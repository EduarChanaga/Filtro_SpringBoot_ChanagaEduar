document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    // Comprobar si ya hay un rol y un token
    if (localStorage.getItem('rol') && localStorage.getItem('token')) {
        comprobarRol(); // Llama a la función para redirigir según el rol
        return; // No hacer nada más, ya que el usuario ya está autenticado
    }

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar si se están obteniendo los valores correctamente
    console.log('Email:', email);
    console.log('Password:', password);

    // Comprobar si los campos están vacíos
    if (!email || !password) {
        alert('Por favor, ingresa correo y contraseña.');
        return;
    }

    const credentials = {
        email: email,
        password: password
    };

    try {
        // Realizar la petición POST al servidor
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        // Verificar si la respuesta fue exitosa (status 200-299)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Parsear la respuesta como JSON para obtener el token
        const data = await response.json();

        // Verificar si se recibió el token en la respuesta
        if (data.token) {
            // Guardar el token en localStorage
            localStorage.setItem('token', data.token);
            console.log('Token guardado:', data.token);

            // Guardar el rol en localStorage según el email
            let role;
            switch (email) {
                case 'user1@gmail.com':
                    role = 'Manager';
                    break;
                case 'user2@gmail.com':
                    role = 'Manager';
                    break;
                case 'user3@gmail.com':
                    role = 'Manager';
                    break;
                default:
                    role = 'Usuario'; // O cualquier rol por defecto si es necesario
            }
            localStorage.setItem('rol', role);
            console.log('Rol guardado:', role); 
            comprobarRol(); // Llama a la función para redirigir según el rol
        } else {
            alert('No se recibió token del servidor.');
        }
    } catch (error) {
        // Mostrar cualquier error en la consola
        console.error('Error en la autenticación:', error);
        alert(`Error en la autenticación: ${error.message}`);
    }
});

// Función para redirigir según el rol
function comprobarRol() {
    const rol = localStorage.getItem('rol');

    if (rol) { // Verificamos si la variable 'rol' existe
        switch (rol) {
            case 'Manager':

                window.location.href = 'http://127.0.0.1:5500/Contenido.html';
                break;
            default:
                console.log('Rol no reconocido: ' + rol);
                break;
        }
    }
}
