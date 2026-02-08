# 📚 Guía Completa del Proyecto NPF

## 📋 Índice
1. [Introducción](#introducción)
2. [Requisitos Previos](#requisitos-previos)
3. [Instalación y Configuración](#instalación-y-configuración)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Componentes Principales](#componentes-principales)
6. [Servicios](#servicios)
7. [Sistema de Rutas](#sistema-de-rutas)
8. [Guía de Uso](#guía-de-uso)
9. [Desarrollo](#desarrollo)

---

## Introducción

**NPF** es una aplicación web de gestión financiera personal construida con **React**. Permite a los usuarios:
- ✅ Registrarse y autenticarse
- ✅ Gestionar cuentas bancarias y monederos
- ✅ Categorizar y registrar transacciones
- ✅ Visualizar reportes y gráficos
- ✅ Consultar historial de movimientos
- ✅ Administrar su perfil de usuario

### Tecnologías Utilizadas
- **Frontend**: React 18.2, React Router 6
- **Estilos**: Tailwind CSS
- **Comunicación**: Axios (HTTP)
- **Almacenamiento**: LocalForage (almacenamiento local)
- **UI**: Hero Icons

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (versión 14 o superior)
- **npm** (viene con Node.js)
- **Backend**: Un servidor API en `http://new-project-back.test/api`

Verifica la instalación:
```bash
node --version
npm --version
```

---

## Instalación y Configuración

### 1. Clonar o descargar el proyecto
```bash
cd tu-directorio-de-proyectos
# Si tienes git:
git clone <tu-repositorio>
cd npf
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar las variables de entorno

El proyecto usa configuración centralizada en `src/config/main.config.js`. Verifica que la URL del backend sea correcta:

```javascript
export const API_URL = 'http://new-project-back.test/api'
```

Si tu backend está en otra ubicación, actualiza esta URL.

### 4. Iniciar el servidor de desarrollo
```bash
npm start
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

### 5. Compilar para producción
```bash
npm run build
```

Esto crea una carpeta `build/` con la aplicación optimizada lista para desplegar.

---

## Estructura del Proyecto

```
npf/
├── public/                 # Archivos estáticos
│   ├── index.html         # HTML principal
│   ├── manifest.json      # Configuración PWA
│   └── robots.txt         # Instrucciones para buscadores
│
├── src/
│   ├── App.js             # Componente raíz
│   ├── App.css            # Estilos globales
│   ├── index.js           # Punto de entrada
│   ├── index.css          # Estilos base
│   ├── router-index.js    # Definición de rutas
│   │
│   ├── assets/            # Archivos estáticos (JSON, CSS, etc.)
│   │   ├── example-data.json
│   │   └── css/
│   │
│   ├── components/        # Componentes React reutilizables
│   │   ├── buttons/       # Componentes de botones
│   │   ├── cards/         # Tarjetas de información
│   │   ├── forms/         # Formularios
│   │   ├── headers/       # Encabezados
│   │   ├── inputs/        # Campos de entrada
│   │   ├── loaders/       # Componentes de carga
│   │   ├── navs/          # Navegación
│   │   ├── pictures/      # Componentes de imágenes
│   │   ├── sections/      # Secciones grandes
│   │   ├── tables/        # Tablas
│   │   └── wraps/         # Componentes envolventes (layouts)
│   │
│   ├── config/
│   │   └── main.config.js # Configuración centralizada
│   │
│   ├── custom-hooks/      # Hooks personalizados
│   │   └── usePagination.js
│   │
│   ├── pages/             # Páginas/vistas (componentes principales)
│   │   ├── AdminPage.jsx    # Página principal del admin
│   │   ├── Dashboard.jsx    # Panel de control
│   │   ├── LandingPage.jsx  # Página de inicio
│   │   ├── auth/            # Autenticación
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── ResetPassword.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── ProfileForm.jsx
│   │   │   └── Logout.js
│   │   └── data/            # Gestión de datos
│   │       ├── accounts/
│   │       ├── categorie-accounts/
│   │       ├── registers/
│   │       └── consults/
│   │
│   └── services/          # Servicios (lógica de comunicación)
│       ├── auth-services.js      # Autenticación
│       ├── auth-header.js        # Header para peticiones
│       └── data-services.js      # Operaciones CRUD
│
├── package.json           # Dependencias del proyecto
├── tailwind.config.js     # Configuración de Tailwind CSS
├── postcss.config.js      # Configuración de PostCSS
└── README.md             # Documentación básica
```

---

## Componentes Principales

### Estructura General

Los componentes están organizados por tipo:

#### **Botones** (`components/buttons/`)
- `Button.jsx` - Botón genérico
- `AddButton.jsx` - Botón para agregar
- `SubmitButton.jsx` - Botón de envío de formulario
- `LogoutButton.jsx` - Botón de cerrar sesión
- `ToggleThemeButton.jsx` - Cambiar tema claro/oscuro

#### **Formularios e Inputs** (`components/forms/` y `components/inputs/`)
- `InputGroup.jsx` - Campo de entrada estándar
- `InputLabel.jsx` - Etiqueta de campo
- `TextArea.jsx` - Área de texto
- `Select.jsx` - Selector desplegable
- `FileInputGroup.jsx` - Carga de archivos
- `SearchBar.jsx` - Barra de búsqueda

#### **Tablas** (`components/tables/`)
- `Table.jsx` - Componente tabla principal
- `TRow.jsx` - Fila de tabla
- `Pagination.jsx` - Paginación
- `RowOptions.jsx` - Opciones por fila

#### **Navegación** (`components/navs/`)
- `Sidebar.jsx` - Barra lateral
- `SidebarItems.jsx` - Elementos del menú
- `Header.jsx` - Encabezado
- `Footer.jsx` - Pie de página

#### **Secciones** (`components/sections/`)
- `Dashboard.jsx` - Panel de control
- `Charts.jsx` - Gráficos
- `TaskSummaries.jsx` - Resumen de tareas
- `AccountsByCategories.jsx` - Cuentas por categoría

---

## Servicios

Las llamadas a la API se manejan a través de servicios centralizados:

### `auth-services.js`
Maneja autenticación:
```javascript
// Ejemplos de funciones disponibles:
login(data)                    // Iniciar sesión
register(data)                 // Registrarse
currentUser(token)             // Obtener usuario actual
sendPasswordResetLink(data)    // Enviar enlace de recuperación
resetPassword(data)            // Restablecer contraseña
logout()                       // Cerrar sesión
```

### `data-services.js`
Gestiona operaciones CRUD:
```javascript
// Operaciones genéricas:
getData(url, id, query, token)      // Obtener datos
createData(url, data, token)        // Crear registro
updateData(url, id, data, token)    // Actualizar
deleteData(url, id, token)          // Eliminar
```

### `auth-header.js`
Genera headers con autenticación:
```javascript
// Retorna objeto con Bearer token para peticiones autenticadas
```

---

## Sistema de Rutas

La aplicación usa **React Router v6** con loaders y actions.

### Rutas Públicas (sin autenticación)

```
/                    → Página de inicio (LandingPage)
├── /login          → Iniciar sesión
├── /register       → Registrarse
├── /forgot-password    → Recuperar contraseña
└── /reset-password     → Restablecer contraseña
```

### Rutas Protegidas (requieren autenticación)

```
/admin                 → Panel de administración
├── /                  → Dashboard (resumen)
├── /admin/categories-accounts       → Gestión de categorías
│   ├── /add          → Crear categoría
│   ├── /:id          → Ver categoría
│   └── /:id/edit     → Editar categoría
├── /admin/accounts                  → Gestión de cuentas
│   ├── /add          → Crear cuenta
│   ├── /:id          → Ver cuenta
│   └── /:id/edit     → Editar cuenta
├── /admin/registers                 → Gestión de transacciones
│   ├── /add          → Crear transacción
│   ├── /:id          → Ver transacción
│   └── /:id/edit     → Editar transacción
├── /admin/consults                  → Reportes
│   ├── /by-periods   → Consultas por período
│   └── /historicals  → Historial
└── /admin/user-profile              → Perfil de usuario
    └── /edit        → Editar perfil
```

---

## Guía de Uso

### 1️⃣ Primer Acceso - Registro

1. Ve a `http://localhost:3000`
2. Haz clic en **"Registrarse"** o **"Sign Up"**
3. Completa el formulario con:
   - Nombre completo
   - Email
   - Contraseña
   - Confirmación de contraseña
4. Haz clic en **"Register"**
5. Se guardará tu sesión y serás redirigido al Dashboard

### 2️⃣ Login

Si ya tienes cuenta:
1. Ve a `/login`
2. Ingresa tu email y contraseña
3. Haz clic en **"Login"**
4. Se guardará tu token en localStorage

### 3️⃣ Gestionar Categorías de Cuentas

Las categorías clasifican las cuentas (ingresos, gastos, ahorros, etc.):

1. Navega a **"Categorías"** en el menú lateral
2. **Ver categorías existentes**: Se muestra una tabla con todas
3. **Crear nueva**:
   - Haz clic en el botón **"+"** 
   - Llena el formulario
   - Haz clic en **"Guardar"**
4. **Editar**:
   - Haz clic en la categoría
   - Modifica los campos
   - Haz clic en **"Actualizar"**
5. **Eliminar**:
   - En la fila de la categoría, haz clic en **"Eliminar"**

### 4️⃣ Gestionar Cuentas

Las cuentas son tus bancos, monederos, etc.:

1. Navega a **"Cuentas"** en el menú lateral
2. **Crear cuenta**:
   - Haz clic en **"+ Agregar"**
   - Selecciona una categoría
   - Ingresa el nombre y saldo inicial
   - Haz clic en **"Guardar"**
3. **Ver detalles**:
   - Haz clic en el nombre de la cuenta
   - Se mostrarán todos sus movimientos
4. **Editar**:
   - En los detalles, haz clic en **"Editar"**
   - Modifica y guarda
5. **Eliminar**:
   - Usa el botón "Eliminar" en la fila

### 5️⃣ Registrar Movimientos (Transacciones)

1. Navega a **"Registros"**
2. **Agregar movimiento**:
   - Haz clic en **"+ Agregar"**
   - Selecciona cuenta origen y cuenta destino
   - Ingresa cantidad y descripción
   - Haz clic en **"Guardar"**
3. **Ver movimiento**:
   - Haz clic en la fila del movimiento
   - Se mostrarán todos los detalles
4. **Editar movimiento**:
   - En los detalles, haz clic en **"Editar"**
5. **Eliminar movimiento**:
   - Usa el botón "Eliminar"

### 6️⃣ Consultas y Reportes

1. Navega a **"Consultas"**
2. **Por períodos**:
   - Selecciona mes y año
   - Se mostrarán movimientos filtrados
3. **Historial**:
   - Ve el historial completo de movimientos
   - Filtra por período

### 7️⃣ Editar Perfil

1. Haz clic en el ícono de **perfil** (arriba a la derecha)
2. Haz clic en **"Mi Perfil"**
3. Haz clic en **"Editar"**
4. Modifica:
   - Nombre
   - Email
   - Avatar (foto)
5. Haz clic en **"Guardar"**

---

## Desarrollo

### Estructura de Componentes React

Cada componente está estructurado de la siguiente manera:

```jsx
// Ejemplo: src/components/buttons/Button.jsx
import React from 'react';

export function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-500 text-white ${className}`}
    >
      {children}
    </button>
  );
}
```

### Usar Servicios en Componentes

```jsx
import { dataService } from '../services/data-services';
import { useEffect, useState } from 'react';
import localforage from 'localforage';

export function MiComponente() {
  const [datos, setDatos] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const obtenerToken = async () => {
      const userAuth = await localforage.getItem('userAuth');
      setToken(userAuth?.data?.accessToken);
    };
    obtenerToken();
  }, []);

  const cargarDatos = async () => {
    if (!token) return;
    const data = await dataService.getData(
      'http://api.test/data',
      '',
      {},
      token
    );
    setDatos(data);
  };

  return (
    <button onClick={cargarDatos}>
      Cargar datos
    </button>
  );
}
```

### Rutas con Loaders

Los loaders se ejecutan antes de mostrar la página:

```jsx
// Definir en router-index.js
export async function loader() {
  const userAuth = await localforage.getItem('userAuth');
  if (!userAuth?.success) {
    return redirect('/login');
  }
  
  const data = await dataService.getData(
    `${API_URL}/data`,
    '',
    {},
    userAuth.data.accessToken
  );
  
  return { data };
}

// Usar en el componente
import { useLoaderData } from 'react-router-dom';

export function MiPagina() {
  const { data } = useLoaderData();
  return <div>{/* renderizar data */}</div>;
}
```

### Crear un Nuevo Componente

1. Crea archivo en `src/components/[tipo]/MiComponente.jsx`
2. Escribe el componente:

```jsx
export function MiComponente({ prop1, prop2 }) {
  return (
    <div className="p-4">
      {/* contenido */}
    </div>
  );
}
```

3. Úsalo importando:

```jsx
import { MiComponente } from '../components/[tipo]/MiComponente';
```

### Estilos con Tailwind CSS

La aplicación usa Tailwind CSS. Ejemplos:

```jsx
<div className="grid grid-cols-3 gap-4 p-4 bg-blue-500 text-white rounded-lg">
  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition">
    Botón
  </button>
</div>
```

Clases comunes:
- `p-4` - Padding 4 unidades
- `m-2` - Margin 2 unidades
- `bg-blue-500` - Fondo azul
- `text-white` - Texto blanco
- `rounded-lg` - Esquinas redondeadas
- `hover:` - Estados al pasar cursor
- `dark:` - Modo oscuro

### Modo Oscuro

El proyecto soporta tema claro/oscuro. Usa clases `dark:`:

```jsx
<div className="bg-white dark:bg-gray-800 text-black dark:text-white">
  Contenido
</div>
```

### Comandos NPM Disponibles

```bash
npm start          # Inicia dev server (puerto 3000)
npm run build      # Compila para producción
npm test           # Ejecuta tests
npm run eject      # Eyecta configuración (no reversible)
```

### Depuración

1. **Abre DevTools**: F12 o Ctrl+Shift+I
2. **Pestaña Components**: Ver estructura React
3. **Pestaña Network**: Ver llamadas API
4. **Console**: Ver errores y logs

Para logs personalizados:
```javascript
console.log('Información:', dato);
console.error('Error:', error);
```

---

## Preguntas Frecuentes (FAQ)

**P: ¿Dónde cambian los colores de la aplicación?**
R: En `tailwind.config.js` y usando clases de Tailwind en componentes.

**P: ¿Cómo agregar un nuevo ícono?**
R: Usa Hero Icons: `import { IconName } from '@heroicons/react/24/solid';`

**P: ¿Cómo agregar una nueva página?**
R: 
1. Crea archivo en `src/pages/MiPagina.jsx`
2. Agrega ruta en `router-index.js`
3. Importa y define la ruta

**P: El backend no responde, ¿qué hago?**
R: Verifica que:
- El servidor backend esté ejecutándose
- La URL en `main.config.js` sea correcta
- No haya problemas CORS

**P: ¿Cómo guardar datos permanentemente?**
R: Usa LocalForage (ya implementado):
```javascript
import localforage from 'localforage';
await localforage.setItem('clave', valor);
const valor = await localforage.getItem('clave');
```

---

## Soporte

Para más información:
- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Axios](https://axios-http.com)

¡Bienvenido al proyecto NPF! 🚀
