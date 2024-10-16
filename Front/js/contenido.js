document.addEventListener('DOMContentLoaded', () => {
    const tablaContenidos = document.getElementById('contenido_container');
    const formAgregarContenido = document.getElementById('form-agregar-contenido');
    const formsalir = document.getElementById('cerrar');

    fetchContenido();
    
    // Función para obtener clientes
    function fetchContenido() {
        fetch('http://localhost:8080/api/contenidos', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => mostrarContenido(data))
        .catch(error => console.error('Error al obtener el contenido:', error));
    }

    // Función para mostrar clientes en la tabla
    function mostrarContenido(contenidos) {
        tablaContenidos.innerHTML = '';
        contenidos.forEach(contenido => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <div id="card-contenido">
                <h1>ID: ${contenido.id}</h1>
                <h3>Nombre: ${contenido.nombre}</h3>
                <h4>Tipo: ${contenido.tipo}</h4>
                <h4>Genero: ${contenido.genero}</h4>
                <h4>Estado: ${contenido.estado}</h4>
                <h4>Plataforma: ${contenido.plataforma}</h4>
                <h4>Calificacion: ${contenido.calificacion}</h4>
                <h4>Comentario:${contenido.comentario}</h4>
                <div>
            `;
            tablaContenidos.appendChild(row);
        });
    }

    // Agregar Contenido
    formAgregarContenido.addEventListener('submit', (e) => {
        e.preventDefault();
        const nuevoCliente = {
            nombre: document.getElementById('nombre-agregar-contenido').value,
            tipo: document.getElementById('tipo-agregar-contenido').value,
            genero: document.getElementById('genero-agregar-contenido').value,
            estado: document.getElementById('estado-agregar-contenido').value,
            plataforma: document.getElementById('plataforma-agregar-contenido').value,
            calificacion: document.getElementById('calificacion-agregar-contenido').value,
            comentario: document.getElementById('comentario-agregar-contenido').value
        };

        fetch('http://localhost:8080/api/contenidos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(nuevoCliente)
        })
        .then(response => response.json())
        .then(() => {
            alert('Contenido agregado exitosamente');
            fetchClientes();
            formAgregarContenido.reset();
        })
        .catch(error => console.error('Error al agregar cliente:', error));
    });
    // Inicializar la carga de clientes
    fetchContenido();

    formsalir.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = 'http://127.0.0.1:5500/index.html';
        localStorage.removeItem('token');
    });
});
