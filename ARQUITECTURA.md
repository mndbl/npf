# 🏗️ Arquitectura y Estructura del Proyecto

## 1. Arquitectura General

```
┌─────────────────────────────────────────────────────┐
│                    NAVEGADOR                        │
│                  React App (NPF)                    │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│              CAPA DE PRESENTACIÓN                   │
│  (Componentes React + Tailwind CSS)                │
├─────────────────────────────────────────────────────┤
│ • Pages (Vistas)                                    │
│ • Components (Componentes reutilizables)           │
│ • Layouts (Wraps)                                  │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│            CAPA DE LÓGICA DE NEGOCIO               │
│  (Servicios, Hooks, Utilidades)                    │
├─────────────────────────────────────────────────────┤
│ • auth-services.js (Autenticación)                 │
│ • data-services.js (CRUD)                          │
│ • Custom Hooks (usePagination)                     │
│ • Config (Constantes)                              │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│            CAPA DE COMUNICACIÓN                     │
│  (Axios + HTTP)                                    │
├─────────────────────────────────────────────────────┤
│ • auth-header.js (Headers de autorización)        │
│ • Peticiones HTTP                                  │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│            API BACKEND (REST)                       │
│  http://new-project-back.test/api                 │
├─────────────────────────────────────────────────────┤
│ • /login, /register (Autenticación)                │
│ • /data/registers (Transacciones)                  │
│ • /data/settings/accounts (Cuentas)                │
│ • /data/settings/account-categories (Categorías)   │
│ • /data/admin (Datos de admin)                     │
│ • /user (Perfil de usuario)                        │
└─────────────────────────────────────────────────────┘
```

---

## 2. Flujo de Datos

### 2.1 Flujo de Autenticación

```
┌──────────────────┐
│   Usuario abre   │
│   la aplicación  │
└────────┬─────────┘
         │
         ▼
┌──────────────────────────┐
│ Verifica token en        │
│ localStorage/localforage │
└────────┬─────────────────┘
         │
    ┌────┴────┐
    │          │
    NO        SI
    │          │
    ▼          ▼
 /login     /admin
```

### 2.2 Flujo de Registro

```
Usuario llena formulario
         │
         ▼
Valida datos (front)
         │
         ▼
POST /register (API)
         │
    ┌────┴────────┐
    │             │
  Error        Success
    │             │
    ▼             ▼
Muestra    Guarda token
error      en storage
           │
           ▼
        Redirige
        a /admin
```

### 2.3 Flujo de Carga de Datos

```
useLoaderData()
      │
      ▼
loader() function (router-index.js)
      │
      ▼
dataService.getData()
      │
      ▼
axios.get() + token
      │
      ▼
API Backend
      │
      ▼
Retorna datos
      │
      ▼
useLoaderData() en componente
      │
      ▼
Renderiza interfaz
```

---

## 3. Patrones de Diseño Utilizados

### 3.1 Patrón Service

Los servicios centralizan la lógica de negocios:

```javascript
// Localización: src/services/
// - auth-services.js
// - data-services.js

// Uso en componentes:
import { dataService } from '../services/data-services';
const data = await dataService.getData(url, id, filters, token);
```

### 3.2 Patrón Composición

Los componentes se componen de componentes menores:

```
AdminPage (Layout)
  ├── Sidebar
  │   └── SidebarItems
  ├── Header
  └── Outlet (Componente actual)
      └── Ej: Dashboard
          ├── StaticCard
          ├── Charts
          └── TaskSummaries
```

### 3.3 Patrón Layout/Wrapper

Para reutilizar estructura HTML:

```jsx
// src/components/wraps/AuthFormsWrap.jsx
export function AuthFormsWrap() {
  return (
    <div className="layout-auth">
      <Outlet /> {/* Aquí se renderiza la página actual */}
    </div>
  );
}

// En router-index.js:
{
  path: '/',
  element: <AuthFormsWrap />,
  children: [
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> }
  ]
}
```

### 3.4 Patrón Custom Hooks

Para lógica reutilizable:

```javascript
// src/custom-hooks/usePagination.js
export function usePagination(items, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);
  // ... lógica
  return { currentPage, setCurrentPage, paginatedItems };
}

// Uso:
const { currentPage, paginatedItems } = usePagination(datos);
```

---

## 4. Flujos de Características

### 4.1 Autenticación

```
Router (router-index.js)
  │
  ├─ loader: loginLoader (Verifica si ya está autenticado)
  │
  ▼
Login.jsx
  │
  ├─ onSubmit → action: loginAction
  │
  ▼
auth-services.login()
  │
  ▼
axios.post('/login') → API
  │
  ├─ ✅ Success
  │   └─ Guarda en localStorage: userAuth
  │      Redirige a /admin
  │
  └─ ❌ Error
      └─ Muestra mensaje de error

```

### 4.2 CRUD de Cuentas

```
AdminPage
  ▼
/admin/accounts → AccountsIndex
  │
  ├─ Ver lista: loader getData() → tabla
  │
  ├─ Crear: /add → FormAccount → action → createData()
  │
  ├─ Editar: /:id → Account → Account/:id/edit → FormAccount → updateData()
  │
  └─ Eliminar: /:id/delete → destroyAction → deleteData()
```

### 4.3 Dashboard

```
/admin (Raíz)
  │
  ▼
AdminPage (loader: adminLoader)
  │ (Verifica autenticación)
  │
  ▼
Dashboard (loader: dashboardLoader)
  │ (Carga datos: accounts, categories, lastRegisters)
  │
  ▼
render:
  ├─ StaticCard (Activos, Pasivos, Utilidad)
  ├─ Charts (Gráficos)
  ├─ TaskSummaries (Resumen de tareas)
  └─ SocialTrafficAndRecentActivities (Últimas transacciones)
```

---

## 5. Directorio de Archivos Clave

### 5.1 Configuración

| Archivo | Propósito |
|---------|-----------|
| `src/config/main.config.js` | URLs de API, formato de moneda, meses |
| `tailwind.config.js` | Configuración de Tailwind CSS |
| `postcss.config.js` | Configuración de PostCSS |
| `package.json` | Dependencias y scripts |

### 5.2 Servicios

| Archivo | Responsabilidad |
|---------|-----------------|
| `auth-services.js` | Login, registro, logout, recuperación de contraseña |
| `data-services.js` | GET, POST, PUT, DELETE de datos generales |
| `auth-header.js` | Añade Bearer token a las peticiones |

### 5.3 Hooks Personalizados

| Archivo | Funcionalidad |
|---------|---------------|
| `custom-hooks/usePagination.js` | Paginación de listas |

### 5.4 Páginas Principales

| Ruta | Archivo | Propósito |
|------|---------|-----------|
| `/` | `pages/LandingPage.jsx` | Página inicial |
| `/login` | `pages/auth/Login.jsx` | Iniciar sesión |
| `/register` | `pages/auth/Register.jsx` | Registrarse |
| `/admin` | `pages/AdminPage.jsx` | Layout del admin |
| `/admin` | `pages/Dashboard.jsx` | Panel de control |
| `/admin/accounts` | `pages/data/accounts/index.jsx` | Listar cuentas |
| `/admin/registers` | `pages/data/registers/index.jsx` | Listar transacciones |
| `/admin/consults` | `pages/data/consults/` | Reportes |

---

## 6. Dependencias y su Uso

```json
{
  "react": "Librería principal de UI",
  "react-dom": "Renderizar en DOM",
  "react-router-dom": "Routing y navegación",
  "axios": "Cliente HTTP para peticiones",
  "tailwindcss": "Framework CSS utilitario",
  "@heroicons/react": "Conjunto de iconos SVG",
  "localforage": "Almacenamiento local (localStorage wrapper)"
}
```

---

## 7. Ciclo de Vida de una Página

Ejemplo: Página de Cuentas

```
1. Usuario navega a /admin/accounts
   ↓
2. React Router carga router config
   ↓
3. Ejecuta loader: accountsLoader()
   ├─ Verifica autenticación (localStorage)
   ├─ Si no autenticado → redirect('/login')
   ├─ Si autenticado → fetch accounts desde API
   └─ Retorna datos
   ↓
4. Renderiza componente AccountsIndex
   ├─ useLoaderData() obtiene cuentas
   ├─ Renderiza tabla con cuentas
   └─ Muestra botones de acción
   ↓
5. Usuario interactúa
   ├─ Click en "Editar" → navega a /admin/accounts/:id/edit
   │   ├─ Ejecuta loader
   │   ├─ Renderiza FormAccount
   │   └─ Usuario completa formulario
   │       └─ onSubmit → action: formAccountAction
   │           └─ dataService.updateData()
   │               └─ Redirige a /admin/accounts
   │
   ├─ Click en "Ver" → navega a /admin/accounts/:id
   │   ├─ Carga datos de cuenta
   │   └─ Renderiza Account (vista detallada)
   │
   └─ Click en "Eliminar" → action: destroyAction
       └─ dataService.deleteData()
           └─ Redirecciona a lista
```

---

## 8. Convenciones de Código

### Componentes Funcionales

```jsx
import React from 'react';

export function MiComponente({ prop1, prop2 = 'default' }) {
  return (
    <div className="contenedor">
      {/* Contenido */}
    </div>
  );
}
```

### Servicios

```javascript
export const miServicio = {
  operacion1: async (params) => {
    // lógica
  },
  operacion2: async (params) => {
    // lógica
  }
};
```

### Rutas

```javascript
export const router = createBrowserRouter([
  {
    path: '/ruta',
    element: <Componente />,
    loader: loaderFunction,
    action: actionFunction
  }
]);

export async function loaderFunction() {
  // Cargar datos antes de renderizar
}

export async function actionFunction({ request, params }) {
  // Manejar formularios
}
```

---

## 9. Estado de la Aplicación

El estado se maneja de manera distribuida:

```
▲ Global
│  └─ Autenticación (localStorage)
│     └─ Token JWT en userAuth
│
├─ Por ruta (loaders)
│  └─ Datos cargados antes de renderizar
│
├─ Local (useState)
│  └─ Por componente
│
└─ Formularios (form API de React Router)
```

---

## 10. Seguridad

### Autenticación
- Token JWT almacenado en `localStorage` vía `localforage`
- Se envía en header `Authorization: Bearer <token>`
- Se valida en cada petición

### Rutas Protegidas
- Los loaders verifican autenticación
- Si no hay token válido → redirect a `/login`

### HTTPS (en producción)
- Usar HTTPS para todas las peticiones
- No guardar datos sensibles en localStorage

---

## 11. Performance

### Optimizaciones Implementadas

1. **React.lazy()** - Carga de componentes bajo demanda (si se implementa)
2. **Suspense** - Muestra fallback mientras se carga (si se implementa)
3. **useMemo/useCallback** - Evitar renders innecesarios (si se necesita)
4. **Code splitting** - React Router automáticamente divide el código

### Recomendaciones

```javascript
// Lazy loading de componentes
const AccountsPage = lazy(() => 
  import('./pages/data/accounts/index')
);

// Memoización
const MiComponente = memo(({ datos }) => {
  return <div>{datos}</div>;
});

// useCallback para callbacks estables
const handleClick = useCallback(() => {
  // ...
}, [dependencies]);
```

---

## 12. Testing (Recomendado)

```javascript
// src/components/Button.test.js
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renderiza botón', () => {
  render(<Button>Click me</Button>);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
});
```

Ejecutar: `npm test`

---

Esta arquitectura mantiene la aplicación **escalable, mantenible y fácil de entender**. ✅
