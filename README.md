# 💰 NPF - Gestor de Finanzas Personales

> **Aplicación React moderna para gestión financiera personal**

## 📚 Documentación Completa

### 🌐 **[👉 TUTORIAL INTERACTIVO DE USO 👈](tutorial.html)**

Si eres **usuario**, abre este tutorial para aprender a usar la aplicación paso a paso. ¡Todo lo necesario está allí!

### 💻 **[Documentación para Desarrolladores](docs.html)**

Si eres **desarrollador**, consulta la documentación técnica en docs.html.

---

Este proyecto incluye **documentación completa en múltiples formatos:**

### 📄 Archivos de Documentación:

| Documento | Descripción | Tiempo |
|-----------|-------------|--------|
| **[tutorial.html](tutorial.html)** | 📖 Tutorial interactivo para usuarios | ⭐ COMIENZA AQUÍ |
| **[docs.html](docs.html)** | 🔧 Documentación técnica para desarrolladores | Para devs |
| **[GUIA_COMPLETA.md](GUIA_COMPLETA.md)** | Documentación principal y referencia | 2-3 horas |
| **[TUTORIAL_RAPIDO.md](TUTORIAL_RAPIDO.md)** | Tutorial paso a paso para principiantes | 30 minutos |
| **[ARQUITECTURA.md](ARQUITECTURA.md)** | Estructura técnica y patrones | 1-2 horas |
| **[REFERENCIA_COMPONENTES.md](REFERENCIA_COMPONENTES.md)** | Catálogo de componentes | Consulta |
| **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** | Solución de problemas | Según sea |
| **[INDICE.md](INDICE.md)** | Mapa y índice de documentación | 5 minutos |

---

### 🚀 **[GUIA_COMPLETA.md](GUIA_COMPLETA.md)** - Documentación Principal
- ✅ Introducción al proyecto
- ✅ Instalación y configuración
- ✅ Estructura del proyecto
- ✅ Componentes principales
- ✅ Servicios y APIs
- ✅ Sistema de rutas
- ✅ **Guía completa de uso**
- ✅ Desarrollo y mejores prácticas

### ⚡ **[TUTORIAL_RAPIDO.md](TUTORIAL_RAPIDO.md)** - Para Principiantes
- ✅ Tutorial paso a paso (30 min)
- ✅ Entender qué es el proyecto
- ✅ Instalación rápida
- ✅ Hacer tu primer cambio
- ✅ Crear un componente nuevo
- ✅ Preguntas frecuentes

### 🏗️ **[ARQUITECTURA.md](ARQUITECTURA.md)** - Estructura Técnica
- ✅ Arquitectura de la aplicación
- ✅ Flujos de datos
- ✅ Patrones de diseño
- ✅ Ciclo de vida de componentes
- ✅ Seguridad
- ✅ Performance

### 📖 **[REFERENCIA_COMPONENTES.md](REFERENCIA_COMPONENTES.md)** - Componentes
- ✅ Referencia de todos los componentes
- ✅ Cómo usar cada uno
- ✅ Ejemplos de código
- ✅ Tailwind CSS
- ✅ Patrones comunes

### ❓ **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Solución de Problemas
- ✅ Errores comunes y soluciones
- ✅ Debugging
- ✅ Performance
- ✅ Autenticación

### 📋 **[INDICE.md](INDICE.md)** - Mapa de Documentación
- ✅ Índice completo
- ✅ Guía de qué leer según experiencia
- ✅ Camino de aprendizaje recomendado
- ✅ Búsqueda rápida por tema

### 🌐 **[docs.html](docs.html)** - Página Web Interactiva ⭐
- ✅ Visualiza toda la documentación en navegador
- ✅ Tema claro/oscuro
- ✅ Búsqueda en tiempo real
- ✅ Navegación por sidebar
- ✅ Diseño profesional y responsive
- ✅ **FORMA RECOMENDADA DE LEER DOCS**

---

## ⚡ Quick Start (Inicio Rápido)

### Instalación (2 minutos)

```bash
# 1. Navega al proyecto
cd C:\laragon\www\npf

# 2. Instala dependencias
npm install

# 3. Inicia desarrollo
npm start
```

Se abrirá automáticamente en `http://localhost:3000`

### Comandos Disponibles

```bash
npm start          # Inicia servidor de desarrollo
npm run build      # Compila para producción
npm test           # Ejecuta tests
npm run eject      # Eyecta configuración (irreversible)
```

---

## 🎯 ¿Qué permite hacer NPF?

```
✅ Registrarse y autenticarse
✅ Crear y gestionar cuentas bancarias
✅ Categorizar transacciones
✅ Registrar movimientos (ingresos/gastos)
✅ Ver reportes y gráficos
✅ Consultar historial de movimientos
✅ Administrar perfil de usuario
✅ Soporte para tema claro/oscuro
```

---

## 🏗️ Estructura del Proyecto

```
npf/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── buttons/      # Botones
│   │   ├── cards/        # Tarjetas
│   │   ├── forms/        # Formularios
│   │   ├── inputs/       # Campos de entrada
│   │   ├── tables/       # Tablas
│   │   ├── navs/         # Navegación
│   │   ├── sections/     # Secciones grandes
│   │   └── wraps/        # Layouts
│   ├── pages/            # Páginas/vistas
│   │   ├── auth/         # Autenticación
│   │   └── data/         # Gestión de datos
│   ├── services/         # Servicios (API)
│   ├── config/           # Configuración
│   ├── custom-hooks/     # Hooks personalizados
│   └── App.js            # Aplicación raíz
├── public/               # Archivos estáticos
├── package.json          # Dependencias
└── tailwind.config.js    # Estilos
```

---

## 🛠️ Tecnologías

- **React 18.2** - Librería UI
- **React Router 6** - Navegación
- **Tailwind CSS 3** - Estilos
- **Axios** - Cliente HTTP
- **LocalForage** - Almacenamiento local
- **Hero Icons** - Iconos SVG

---

## 🔐 Autenticación

La aplicación utiliza **JWT (JSON Web Tokens)**:

1. Usuario se registra o hace login
2. El servidor retorna `accessToken`
3. Se guarda en `localStorage` con `localforage`
4. Se envía en cada petición con `Authorization: Bearer <token>`
5. Se valida antes de mostrar páginas protegidas

---

## 🚦 Rutas de la Aplicación

### Públicas (sin login)
- `/` - Página de inicio
- `/login` - Iniciar sesión
- `/register` - Registrarse
- `/forgot-password` - Recuperar contraseña
- `/reset-password` - Restablecer contraseña

### Protegidas (requieren login)
- `/admin` - Dashboard principal
- `/admin/accounts` - Gestión de cuentas
- `/admin/categories-accounts` - Gestión de categorías
- `/admin/registers` - Gestión de transacciones
- `/admin/consults` - Reportes y consultas
- `/admin/user-profile` - Perfil de usuario

---

## 🎨 Desarrollo

### Crear un Componente

```jsx
// src/components/buttons/MyButton.jsx
export function MyButton({ label, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
    >
      {label}
    </button>
  );
}
```

### Usar un Servicio

```jsx
import { dataService } from '../services/data-services';

const data = await dataService.getData(
  'http://api.test/accounts',
  '',
  {},
  accessToken
);
```

### Usar Tailwind CSS

```jsx
<div className="grid grid-cols-3 gap-4 p-4">
  <card className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-bold">Título</h3>
    <p className="text-gray-600">Descripción</p>
  </card>
</div>
```

---

## 🆘 Problemas Comunes

| Problema | Solución |
|----------|----------|
| "npm: command not found" | Instala Node.js desde nodejs.org |
| "Port 3000 in use" | `npm start -- --port 3001` |
| Styles no se aplican | Reinicia servidor: `npm start` |
| API no responde | Verifica URL en `src/config/main.config.js` |
| No puedo hacer login | Verifica credenciales y que backend esté corriendo |

**Más soluciones:** Ver [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

## 📚 Documentación

- **Principiantes:** Lee [TUTORIAL_RAPIDO.md](TUTORIAL_RAPIDO.md) (30 min)
- **Referencia Componentes:** Ver [REFERENCIA_COMPONENTES.md](REFERENCIA_COMPONENTES.md)
- **Completa:** Leer [GUIA_COMPLETA.md](GUIA_COMPLETA.md)
- **Técnica:** Estudiar [ARQUITECTURA.md](ARQUITECTURA.md)
- **Problemas:** Consultar [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

## 🤝 Flujo típico de desarrollo

1. **Entender requisito** - Qué debe hacer
2. **Diseñar componente** - Structure React
3. **Implementar UI** - HTML + Tailwind
4. **Conectar API** - Usar servicios
5. **Testar** - Probar en navegador
6. **Debug** - Usar DevTools si hay problemas

---

## 🚀 Desplegar a Producción

```bash
# Compilar para producción
npm run build

# La carpeta 'build' contiene archivos optimizados
# Sube a hosting (Vercel, Netlify, GitHub Pages, etc.)
```

---

## 📋 Configuración

### Cambiar URL de API

Edita `src/config/main.config.js`:

```javascript
export const API_URL = 'http://tu-api.test/api'
```

### Cambiar colores

Los colores usanTailwind. Edita componentes:

```jsx
className="bg-blue-500"    // Cambiar a otro color
className="text-white"     // Cambiar texto
```

---

## 🧪 Testing

```bash
npm test
```

Ejecuta tests interactivos.

---

## ⚙️ Dependencias

```json
{
  "react": "18.2",
  "react-router-dom": "6.22",
  "axios": "1.6",
  "tailwindcss": "3.4",
  "@heroicons/react": "2.1",
  "localforage": "1.10"
}
```

---

## 📖 Aprende Más

- [React Oficial](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Axios](https://axios-http.com)
- [MDN Web Docs](https://developer.mozilla.org)

---

## 📝 Convenciones

- **Componentes:** PascalCase (`MyComponent.jsx`)
- **Funciones:** camelCase (`myFunction()`)
- **Clases CSS:** Tailwind utilities
- **Variables:** UPPER_CASE para constantes

---

## 🐛 Reporte de Bugs

Si encuentras un bug:

1. Verifica [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
2. Abre DevTools (F12) y nota el error
3. Describe pasos para reproducirlo
4. Comparte error exacto

---

## 👨‍💼 Información del Proyecto

- **Nombre:** NPF (Gestor de Finanzas Personales)
- **Versión:** 0.1.0
- **Tipo:** Single Page Application (SPA)
- **Licencia:** Privada
- **Backend:** [new-project-back.test/api](http://new-project-back.test/api)

---

## 🎓 Que has Aprendido

✅ Instalación y setup de proyecto React
✅ Estructura de proyectos modernosReact
✅ Componentes funcionales y reutilizables
✅ Enrutamiento con React Router
✅ Llamadas a API con Axios
✅ Estilos con Tailwind CSS
✅ Autenticación y autorización
✅ Patrones de arquitectura
✅ Debugging y troubleshooting

---

## 🙌 ¡Gracias!

Este proyecto fue documentado con ❤️ para ayudarte a aprender React.

**¿Tienes dudas?** Consulta la documentación completa o busca en Google.

**¡Happy Coding! 🚀**

---

*Última actualización: Febrero 2026*
*Documentación v1.0 completa*

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
