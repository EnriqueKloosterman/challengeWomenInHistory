
# Women In History

## Descripción

Women In History es una aplicación que permite a los usuarios explorar y buscar información sobre mujeres notables en la historia. Los usuarios registrados pueden eliminar entradas de la lista.

## Características

- Ver una lista de mujeres notables en la historia.
- Buscar mujeres por nombre, apellido, nacionalidad o biografía.
- Los usuarios registrados pueden eliminar entradas.

## Tecnologías Utilizadas

- React
- React Router
- React Icons
- Context API para la gestión de usuarios
- MockAPI para la simulación de datos

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/women-in-history.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd women-in-history
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

1. Inicia la aplicación:
   ```bash
   npm start
   ```
2. Abre tu navegador web y ve a `http://localhost:3000`.

## Estructura del Proyecto

```plaintext
.
├── public
├── src
│   ├── auth
│   │   └── UserContext.js
│   ├── components
│   │   └── NavBar.js
│   ├── pages
│   │   ├── List.js
│   │   ├── Login.js
│   │   └── Register.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Componentes Principales

### `NavBar.js`

El componente de navegación que muestra los enlaces de `Ingresar`, `Registrarse` o el nombre del usuario y el botón de `Logout`, dependiendo del estado de autenticación del usuario.

### `List.js`

El componente que muestra la lista de mujeres notables y permite buscar en la lista. También incluye la funcionalidad para eliminar una entrada si el usuario está registrado.

### `Login.js`

El componente de formulario de inicio de sesión que permite a los usuarios ingresar con su nombre y contraseña.

### `Register.js`

El componente de formulario de registro que permite a los nuevos usuarios registrarse.

### `UserContext.js`

El contexto de usuario que gestiona el estado de autenticación del usuario y proporciona funciones para iniciar y cerrar sesión.

## Autores

- [Tu Nombre](https://github.com/tu-usuario)

## Licencia

Este proyecto está bajo la licencia MIT.
