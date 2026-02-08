# 🚀 Tutorial Rápido para Principiantes

## Introducción

¡Bienvenido! Este tutorial te guiará paso a paso para entender y trabajar con el proyecto **NPF**. 

**Tiempo estimado: 30 minutos** ⏱️

### Prerequisitos
- Node.js instalado
- Un editor de texto (VS Code recomendado)
- Conocimiento básico de JavaScript

---

## Paso 1: Entender Qué es Este Proyecto (5 min)

### ¿Qué hace NPF?

NPF es una **aplicación de gestión financiera personal** que te permite:

```
┌─────────────────────────────────────┐
│    APLICACIÓN DE FINANZAS (NPF)    │
├─────────────────────────────────────┤
│                                     │
│  Registra tus cuentas bancarias    │
│  │                                  │
│  ├─ Cuenta Corriente: $5,000       │
│  ├─ Savings: $10,000               │
│  └─ Efectivo: $1,500               │
│                                     │
│  Registra tus movimientos:          │
│  │                                  │
│  ├─ Dep. Salario: +$2,000         │
│  ├─ Compra Supermercado: -$150    │
│  └─ Transferencia a Ahorros: -$500│
│                                     │
│  Ve reportes:                       │
│  │                                  │
│  ├─ Total activos: $16,500         │
│  ├─ Total gastos este mes: $2,500  │
│  └─ Ganancias vs Pérdidas          │
│                                     │
└─────────────────────────────────────┘
```

### Tecnología

- **Frontend**: React (librería para crear interfaces)
- **Estilos**: Tailwind CSS (diseño bonito con clases)
- **Comunicación**: Axios (envía datos al servidor)

---

## Paso 2: Instalar y Ejecutar (5 min)

### Instalación Inicial

**1. Abre terminal/PowerShell**

En Windows, puedes:
- Presionar `Win + R`, tipear `cmd` y Enter
- O: Botón derecho en la carpeta del proyecto → "Abrir en Terminal"

**2. Ve al directorio del proyecto**

```bash
cd C:\laragon\www\npf
```

**3. Instala dependencias**

```bash
npm install
```

Esto descargará todas las librerías necesarias (tarda 2-3 minutos).

**4. Inicia la aplicación**

```bash
npm start
```

Se abrirá automáticamente `http://localhost:3000` en tu navegador.

### ✅ Éxito

Deberías ver la página de inicio de NPF.

---

## Paso 3: Entender la Estructura (5 min)

### Carpetas Principales

Abre el proyecto en VS Code (`code .` en terminal).

```
npf/
├── src/                    ← Aquí está TODO el código
│   ├── components/         ← Piezas reutilizables
│   ├── pages/             ← Páginas completas
│   ├── services/          ← Comunicación con API
│   ├── config/            ← Configuración
│   └── App.js             ← Aplicación principal
│
├── public/                ← Archivos estáticos
├── package.json           ← Dependencias
└── tailwind.config.js    ← Configuración de estilos
```

### Concepto Clave: Componentes

La aplicación está hecha de **componentes** (piezas reutilizables):

```jsx
// Ejemplo simple: Componente Botón
function Button({ texto, onClick }) {
  return (
    <button onClick={onClick}>
      {texto}
    </button>
  );
}

// Se usa así:
<Button texto="Presioname" onClick={() => alert('¡Hola!')} />
```

---

## Paso 4: Hacer tu Primer Cambio (5 min)

### Objetivo: Cambiar el color de un botón

**1. Encuentra el archivo del botón**

Navega a: `src/components/buttons/Button.jsx`

El archivo contiene algo como:

```jsx
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

**2. Cambia el color**

Busca `bg-blue-500` y cámbialo a `bg-green-500`:

```jsx
className={`px-4 py-2 rounded bg-green-500 text-white ${className}`}
```

**3. Guarda el archivo** (Ctrl+S)

**4. Ve al navegador**

Automáticamente se actualizará y verás botones verdes.

**5. Deshaz el cambio**

Vuelve a cambiar a `bg-blue-500` (o cualquier otro color).

### 🎉 ¡Lo hiciste! Modificaste un componente.

---

## Paso 5: Entender las Páginas (5 min)

### ¿Qué es una página?

Una página es un componente grande que se muestra en una ruta específica.

```
URL                    Página mostrada
────────────────────   ─────────────────────
/                      LandingPage (inicio)
/login                 Login
/register              Register  
/admin                 AdminPage (dashboard)
/admin/accounts        AccountsIndex (lista de cuentas)
```

### Ver el código de una página

**1. Abre:** `src/pages/Dashboard.jsx`

Verás la estructura:

```jsx
export function Dashboard() {
  // 1. Cargar datos
  const { categories, latestRegister } = useLoaderData()
  
  // 2. Calcular totales
  const assets = // ...
  const expenses = // ...
  
  // 3. Preparar información para mostrar
  const cardsInfo = [
    { label: 'Utility', value: utilityOrLoss },
    { label: 'Assets', value: assets },
    // ...
  ]
  
  // 4. Renderizar interfaz
  return (
    <div>
      {cardsInfo.map(card => (
        <StaticCard key={card.label} {...card} />
      ))}
    </div>
  )
}
```

**Concepto clave**: Una página típicamente:
1. Carga datos
2. Los procesa
3. Los muestra usando componentes

---

## Paso 6: Hacer una Petición a la API (Conceptual)

### ¿Qué es la API?

La **API** es el servidor backend que guarda tus datos:

```
Tu navegador          API Backend
(NPF App)            (Servidor)
─────────────────────────────────
    │                   │
    └─→ GET /accounts  →│ "Damé las cuentas"
                        │
    ←──── [Cuentas] ←──│ "Aquí están"
    │                   │
```

### Ver el código de servicios

**1. Abre:** `src/services/data-services.js`

Verás funciones como:

```javascript
export const dataService = {
  getData: async (url, id, filters, token) => {
    // Hacer petición GET
    const response = await axios.get(url, {
      headers: authHeader(token)  // Con autenticación
    });
    return response.data;
  },
  
  createData: async (url, data, token) => {
    // Hacer petición POST (crear)
    const response = await axios.post(url, data, {
      headers: authHeader(token)
    });
    return response.data;
  }
};
```

### ¿Cómo se usa en un componente?

```jsx
import { dataService } from '../services/data-services';
import { useEffect, useState } from 'react';

export function MisAccounts() {
  const [accounts, setAccounts] = useState([]);
  
  useEffect(() => {
    const cargarCuentas = async () => {
      // Obtener token
      const token = 'mi-token-desde-login';
      
      // Hacer petición
      const datos = await dataService.getData(
        'http://api.test/accounts',
        '',
        {},
        token
      );
      
      // Guardar resultados
      setAccounts(datos);
    };
    
    cargarCuentas();
  }, []);
  
  return (
    <ul>
      {accounts.map(account => (
        <li key={account.id}>{account.name}</li>
      ))}
    </ul>
  );
}
```

---

## Paso 7: Las Rutas Explicadas (3 min)

### ¿Qué son rutas?

Las rutas conectan URLs con componentes.

**Archivo clave:** `src/router-index.js`

```javascript
export const router = createBrowserRouter([
  {
    path: '/',                      // URL
    element: <LandingPage />,       // Componente
    loader: landingLoader            // Cargar datos antes
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction              // Manejar formulario
  },
  {
    path: '/admin',
    element: <AdminPage />,
    loader: adminLoader,
    children: [                      // Rutas anidadas
      {
        index: true,
        element: <Dashboard />
      }
    ]
  }
]);
```

### Conceptos

- **path**: La URL en el navegador
- **element**: El componente a mostrar
- **loader**: Función que carga datos ANTES de mostrar
- **action**: Función que procesa formularios
- **children**: Rutas dentro de esta ruta

---

## Paso 8: Crear un Componente Nuevo (5 min)

### Objetivo: Crear un componente de Card personalizado

**1. Crea el archivo**

Nuevo archivo: `src/components/cards/MyCard.jsx`

**2. Escribe el código**

```jsx
export function MyCard({ title, description, value }) {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md">
      <h3 className="text-lg font-bold text-blue-600">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
      <p className="text-2xl font-bold text-green-600">
        ${value}
      </p>
    </div>
  );
}
```

**3. Úsalo en una página**

```jsx
import { MyCard } from '../components/cards/MyCard';

export function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <MyCard 
        title="Ahorros" 
        description="Total guardado"
        value={5000}
      />
      <MyCard 
        title="Ingresos" 
        description="Este mes"
        value={3000}
      />
      <MyCard 
        title="Gastos" 
        description="Este mes"
        value={2000}
      />
    </div>
  );
}
```

**4. ¡Listo!** Verás tus 3 cards en la pantalla.

---

## Paso 9: Estilos con Tailwind CSS

### ¿Qué es Tailwind?

Tailwind CSS son **clases de utilidad** para estilos:

```jsx
// En lugar de escribir CSS complejo:
// .mi-clase { color: white; background: blue; padding: 1rem; }

// Usas clases:
<div className="text-white bg-blue-500 p-4">
  Contenido
</div>
```

### Clases Comunes

```jsx
// Colores
className="text-blue-500"        // Texto azul
className="bg-red-500"           // Fondo rojo
className="border-gray-300"      // Borde gris

// Espacios
className="p-4"                  // Padding 1rem
className="m-2"                  // Margin 0.5rem
className="gap-4"                // Espacio entre elementos

// Layout
className="flex"                 // Flexbox
className="grid grid-cols-3"     // Grid de 3 columnas
className="justify-center"       // Centrado horizontal
className="items-center"         // Centrado vertical

// Redondeado
className="rounded-lg"           // Esquinas redondeadas
className="rounded-full"         // Completamente redondo

// Hover
className="hover:bg-blue-600"    // Color al pasar cursor
className="hover:shadow-lg"      // Sombra al pasar

// Tema oscuro
className="bg-white dark:bg-gray-800"     // Blanco claro, gris oscuro
className="text-black dark:text-white"    // Texto adaptado
```

### Ejemplo Completo

```jsx
<div className="
  p-6                            // Padding
  rounded-lg                      // Esquinas redondeadas
  bg-white                        // Fondo blanco
  dark:bg-gray-800               // Gris en modo oscuro
  shadow-md                       // Sombra
  hover:shadow-lg                 // Sombra mayor al pasar
  transition                      // Transición suave
  border-l-4                      // Borde izquierdo
  border-blue-500                 // Borde azul
">
  <h2 className="text-xl font-bold text-gray-800 dark:text-white">
    Título
  </h2>
  <p className="text-gray-600 dark:text-gray-300 mt-2">
    Descripción
  </p>
</div>
```

---

## Paso 10: Próximos Pasos

Ahora que entiendes lo básico, puedes:

### 1. **Explorar Componentes Existentes**
   - Abre `src/components/` 
   - Lee cómo están estructurados
   - Ve cómo se usan en las páginas

### 2. **Crear una Nueva Página**
   - Crea archivo en `src/pages/MiPagina.jsx`
   - Agrégalo al router
   - Navega para verla

### 3. **Conectar con la API**
   - Ve a `src/services/data-services.js`
   - Usa `dataService.getData()` en tus componentes
   - Muestra los datos en la UI

### 4. **Estilizar con Tailwind**
   - Lee la [documentación oficial](https://tailwindcss.com)
   - Experimenta con clases
   - Crea interfaces bonitas

### 5. **Aprender más sobre React**
   - [React Docs](https://react.dev) - Oficial
   - [React Router](https://reactrouter.com) - Rutas
   - [Axios](https://axios-http.com) - HTTP

---

## Preguntas Frecuentes

### P: ¿Qué es un Hook?
R: Una función de React que permite usar características como estado:
```jsx
const [contador, setContador] = useState(0);
// contador = valor actual
// setContador = función para cambiar el valor
```

### P: ¿Cómo navegar a otra página?
R: 
```jsx
import { useNavigate } from 'react-router-dom';

export function MiComponente() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/admin/accounts')}>
      Ir a Cuentas
    </button>
  );
}
```

### P: ¿Cómo guardar datos localmente?
R:
```jsx
import localforage from 'localforage';

// Guardar
await localforage.setItem('miClave', 'miValor');

// Obtener
const valor = await localforage.getItem('miClave');
```

### P: ¿Cómo hacer console.log?
R:
```jsx
export function MiComponente() {
  const datos = [1, 2, 3];
  console.log('Mis datos:', datos);  // Se verá en DevTools
  
  return <div>Hola</div>;
}
```
Abre: F12 → Pestaña "Console"

### P: ¿Cómo cambiar la hora?
R: Busca la clase de color que quieras cambiar en el código y edita, por ejemplo:
- `bg-blue-500` → `bg-green-500` (verde)
- `text-white` → `text-black` (negro)

---

## Resumen

Has aprendido:
- ✅ Qué es NPF y para qué sirve
- ✅ Instalar y ejecutar el proyecto
- ✅ La estructura de carpetas
- ✅ Qué son componentes
- ✅ Qué son páginas y rutas
- ✅ Cómo se comunica con la API
- ✅ Cómo funciona Tailwind CSS
- ✅ Cómo crear componentes nuevos

**¡Ahora estás listo para desarrollar! 🚀**

---

## Recursos

- [GUIA_COMPLETA.md](GUIA_COMPLETA.md) - Documentación detallada
- [ARQUITECTURA.md](ARQUITECTURA.md) - Estructura técnica
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

¡Pregunta cualquier cosa! 😊
