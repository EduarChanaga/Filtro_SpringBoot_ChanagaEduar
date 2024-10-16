
# TiendaCazaPOS - Frontend

Este es el frontend de **TiendaCazaPOS**, una aplicación de punto de venta (POS) que permite a los usuarios iniciar sesión según su rol y realizar acciones específicas dependiendo de los permisos que tienen. El frontend fue desarrollado utilizando HTML, CSS, JavaScript y LocalStorage, y se conecta con el backend de TiendaCazaPOS para la autenticación y otras operaciones.

## Canva

El siguiente Canva está preparado para la exposición de este proyecto:

- [CANVA](https://www.canva.com/design/DAGTITUr5SI/S_YvA1O7sdp0U0NI28vVDA/edit?utm_content=DAGTITUr5SI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Características

- **Autenticación**: Los usuarios pueden iniciar sesión utilizando su email y contraseña. Una vez autenticados, se genera un token que permite acceder a otras funcionalidades de la aplicación.
- **Roles de Usuario**: Dependiendo del rol del usuario (Administrador, Gerente, Cajero), se tienen diferentes permisos en la aplicación.
- **Consumo de API REST**: El frontend se comunica con el backend a través de peticiones GET y POST, enviando el token generado en el inicio de sesión para validar las operaciones.
- **Almacenamiento en LocalStorage**: Los tokens y algunos datos temporales se almacenan en LocalStorage para facilitar la gestión de la sesión.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura del frontend.
- **CSS3**: Para el estilo y diseño de la interfaz de usuario.
- **JavaScript**: Para la lógica de negocio en el frontend, incluyendo el manejo de tokens, validaciones y consumo de la API.
- **LocalStorage**: Para almacenar el token JWT y otra información de sesión temporal.
- **Apache WebServer**: Para iniciar el aplicativo en la web inicialmente.

## Backend

El backend del proyecto se encuentra en el siguiente repositorio:

[BACKEND](https://github.com/AndresDz2024/Proyecto_BACK_SpringBoot_DazaAndres_ChanagaEduar)

## Flujo de Autenticación

1. El usuario ingresa su **email** y **contraseña** en la pantalla de inicio de sesión.
2. El frontend realiza una petición `POST /auth/login` al backend, enviando el email y la contraseña.
3. Si las credenciales son correctas, el backend responde con un **token JWT**, que se almacena en **LocalStorage**.
4. A partir de este punto, el token se utiliza para realizar peticiones autenticadas al backend.
5. Dependiendo del rol del usuario, se mostrarán diferentes funcionalidades en la interfaz.

### Usuarios y Contraseñas de Prueba

A continuación se muestran algunos usuarios de prueba con diferentes roles que puedes utilizar para acceder al sistema:

| Rol            | Email                        | Contraseña   |
|----------------|------------------------------|--------------|
| **Cajero**     | profepedroeducativo@gmail.com | producir     |
| **Gerente**    | daza45daza@gmail.com          | dazadaza123      |
| **Administrador** | chanaga250@gmail.com         | chanaga250     |

### Nota:
- La API no utiliza el `username`, sino el **email** como identificador principal para iniciar sesión.
- Claramente en la base de datos las contraseñas no se ven directamente, esto porque están encriptadas para manejar una mayor seguridad en el aplicativo.

## Enlaces Importantes

- **Pantalla de Inicio de Sesión**: Para acceder al sistema, visita el siguiente enlace:
  ```
  http://172.16.101.109/index.html
  ```

## Consumo de API

Una vez que el usuario ha iniciado sesión, el token generado se debe incluir en los encabezados de las peticiones al backend. Ejemplo de una petición `GET` autenticada:

```javascript
fetch('http://172.16.101.109:8080/api/productos', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
})
.then(response => response.json())
.then(data => {
})
.catch(error => console.error('Error:', error));
```
### Nota:
-  Esto es un ejemplo, por lo tanto los fetch del aplicativo son mucho más estructurados y contienen la lógica necesaria para el funcionamiento del mismo. 

## Pasos para Ejecutar el Frontend

1. Clonar el repositorio:

2. Abrir `index.html` en un navegador web.

3. Ingresar las credenciales de uno de los usuarios de prueba para iniciar sesión.

4. Dependiendo del rol del usuario, se cargarán diferentes opciones en el dashboard.

### Nota:

- Recuerda que el proyecto ya está ejecutado en un servidor de Apache WebServer, por lo tanto si accedes al link dado al inicio para el inicio de sesión no necesitarás hacer ninguno de estos pasos

## Link para login

- [Login](http://172.16.101.109/index.html)

## ¿Que se puede hacer en el aplicativo?

En nuestro aplicativo, dependiendo del usuario que ingrese, se tienen diferentes permisos, esto para manejar de manera mucho más ágil y versátil el mismo, a continuación los permisos de cada usuario:

- **Administrador**: Acceso completo a todas las funcionalidades del sistema.
- **Gerente**: Permisos restringidos a la gestión de productos y clientes.
- **Cajero**: Acceso exclusivo a la parte de facturación.

## Nota:

- Te invitamos a que verifiques por tu cuenta y pongas a prueba nuestro aplicativo, en caso de alguna sugerencia para su mejora, estaremos atentos a cualquier comentario constructivo :).

## Figma

A continuación el enlace que contiene la maquetación inicial del aplicativo:

- [FIGMA](https://www.figma.com/design/UfHnK3MICjCYB5pzTtgofS/Untitled?node-id=0-1&m=dev&t=cEEbNx812N5rfyc9-1)

## Agradecimientos

Agradecemos a todos los que contribuyeron al desarrollo de este proyecto frontend.

## Desarrollado por:

- [Andrés Daza](https://github.com/AndresDz2024)
- [Eduar Chanaga](https://github.com/EduarChanaga)
