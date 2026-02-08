# ❓ Solución de Problemas (Troubleshooting)

## Problemas Comunes y Soluciones

---

## 🔴 La aplicación no inicia

### Error: "npm: command not found"

**Causa:** Node.js no está instalado o no está en PATH

**Solución:**
1. Descarga Node.js desde [nodejs.org](https://nodejs.org)
2. Instala la versión LTS (recomendado)
3. Reinicia terminal
4. Verifica: `node --version`

---

### Error: "Port 3000 already in use"

**Causa:** Otra aplicación está usando el puerto 3000

**Solución en PowerShell:**

```powershell
# Encuentra el proceso usando puerto 3000
Get-NetTCPConnection -LocalPort 3000

# O: Kill de proceso (menos recomendado)
npm start -- --port 3001
```

**Solución rápida:**
Espera 10 segundos y intenta `npm start` de nuevo

---

### Error: "ENOENT: no such file or directory"

**Causa:** Falta la carpeta `node_modules`

**Solución:**
```bash
npm install
npm start
```

---

## 🔴 Errores en el Navegador

### Error: "Cannot find module './Logo'"

**Causa:** Falta archivo o ruta incorrecta

**Solución:**
1. Verifica que el archivo existe
2. Comprueba mayúsculas/minúsculas en la ruta
3. Revisa que la ruta sea relativa correctamente

```javascript
// ❌ Malo
import { Component } from './component';

// ✅ Correcto
import { Component } from './Component';
```

---

### Error: "useLoaderData must be used within a data router"

**Causa:** Estás usando `useLoaderData()` en un componente sin loader

**Solución:**
1. Asegúrate de que el componente está en una ruta definida
2. Define el `loader` en la ruta
3. Verifica que el `loader` retorna algo

```javascript
// router-index.js
{
  path: '/admin',
  element: <MiPagina />,
  loader: async () => {
    return { datos: 'algo' };  // El loader debe retornar
  }
}

// MiPagina.jsx
import { useLoaderData } from 'react-router-dom';

export function MiPagina() {
  const { datos } = useLoaderData();  // ✅ Ahora funciona
  return <div>{datos}</div>;
}
```

---

### Error: "Cannot read property 'map' of undefined"

**Causa:** Intentas hacer `.map()` en algo que no existe

**Solución:**

```javascript
// ❌ Malo
{array.map(item => <div>{item}</div>)}  // ¿Qué pasa si array es undefined?

// ✅ Correcto
{array?.map(item => <div>{item}</div>)}

// ✅ También correcto
{array && array.map(item => <div>{item}</div>)}
```

---

### Error: "Unexpected token <" en la consola

**Causa:** El navegador está intentando ejecutar HTML como JavaScript

**Solución:**
1. Verifica que la API está respondiendo JSON
2. Revisa la URL de la API
3. Abre DevTools → Network → mira la respuesta

---

## 🔴 API y Backend

### Error: "CORS error" o "Access to XMLHttpRequest blocked"

**Causa:** El backend no está configurado para permitir solicitudes desde tu frontend

**Solución:**

En el backend (no se pode hacer desde frontend):
```javascript
// Backend debe permitir CORS
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
```

También verifica:
- Backend esté ejecutándose
- URL en `src/config/main.config.js` sea correcta
- No haya firewall bloqueando

---

### Error: "401 Unauthorized" en las peticiones

**Causa:** El token expiró o no es válido

**Solución:**

```javascript
// Verifica el token
const userAuth = await localforage.getItem('userAuth');
console.log('Token:', userAuth?.data?.accessToken);

// Si está vacío, el usuario debe hacer login nuevamente
// Considera agregar refresh token si el backend lo soporta
```

---

### Error: "404 Not Found" en petición a API

**Causa:** La URL o endpoint no existe

**Solución:**
1. Verifica la URL en `main.config.js`
2. Verifica que el endpoint existe en el backend
3. Revisa si necesitas agregar variables (ej: `/accounts/123`)

```javascript
// ❌ Malo
dataService.getData('http://api.test/wrongEndpoint')

// ✅ Correcto
dataService.getData('http://api.test/data/accounts')
```

---

## 🔴 Estilos y Tailwind

### Los estilos no se aplican

**Causa:** Tailwind no compila las clases

**Solución:**

1. Asegúrate de tener `tailwindcss` instalado:
```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Verifica `tailwind.config.js`:
```javascript
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Tailwind debe ver tus archivos
  ],
  theme: {},
  plugins: [],
}
```

3. Reinicia dev server:
```bash
npm start
```

---

### Clase de Tailwind no funciona

**Causa:** NPM watch no detectó cambios

**Solución:**
1. Guarda el archivo (`Ctrl+S`)
2. Recarga navegador (`F5`)
3. Si persiste, reinicia: `npm start`

```javascript
// ❌ Esto no funcionará (nombre inventado)
className="text-ultra-mega-big"

// ✅ Usa clases reales de Tailwind
className="text-4xl"  // Muy grande
```

---

## 🔴 Enrutamiento

### Página blanca, no se carga nada

**Causa:** Error en el router o componente

**Solución:**

```javascript
// Abre DevTools (F12) → Console
// Verifica el error exacto

// Posibles causas:
// 1. Router mal configurado
export const router = createBrowserRouter([
  // ¿Todas las rutas están bien?
]);

// 2. Componente rompe en render
export function MiPagina() {
  const data = someUndefinedVariable;  // ❌ Error
  return <div>{data.name}</div>;
}

// 3. Faltan dependencias
// Verifica console para ver el error exacto
```

---

### La ruta no se navega

**Causa:** Navegación incorrecta

**Solución:**

```javascript
// ❌ Malo
<a href="/admin/accounts">Link</a>  // Recarga página

// ✅ Correcto
import { useNavigate } from 'react-router-dom';

export function MiComponente() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/admin/accounts')}>
      Ir a Cuentas
    </button>
  );
}

// ✅ También correcto (en Link)
import { Link } from 'react-router-dom';

<Link to="/admin/accounts">Ir</Link>
```

---

## 🟡 Problemas de Performance

### La app está lenta

**Solución:**

1. Abre DevTools → Network
   - Mira qué peticiones son lentas
   - Optimiza llamadas a API

2. Abre DevTools → Performance
   - Registra sesión de 5 segundos
   - Busca funciones lentas

3. Optimiza renders:
```javascript
import { memo, useCallback } from 'react';

// Memoriza componentes
export const MiComponente = memo(function MiComponente({ datos }) {
  return <div>{datos}</div>;
});

// Callbacks estables
const handleClick = useCallback(() => {
  // ...
}, []);
```

---

### La página se refresca mucho

**Causa:** useEffect sin dependencias correctas

**Solución:**

```javascript
// ❌ Se ejecuta infinitamente
useEffect(() => {
  fetchData();
  // No hay dependencias
});

// ✅ Se ejecuta una sola vez
useEffect(() => {
  fetchData();
}, []);  // Array vacío = una sola vez

// ✅ Se ejecuta cuando cambia 'id'
useEffect(() => {
  fetchData(id);
}, [id]);  // Ejecuta cuando id cambia
```

---

## 🔵 Errores de Autenticación

### No puedo hacer login

**Causas posibles:**

1. **Credenciales incorrectas:**
   - Verifica email y contraseña
   - Asegúrate de estar registrado

2. **Backend no responde:**
   - Verifica que el servidor está corriendo
   - Abre DevTools → Network → mira la petición

3. **Token no se guarda:**
```javascript
// Verifica
const userAuth = await localforage.getItem('userAuth');
console.log('Se guardó?', userAuth);

// Si null, la respuesta del login es incorrecta
```

---

### Mi sesión se cierra al recargar

**Causa:** Token no se guarda o se elimina

**Solución:**

El token debe guardarse en localStorage:
```javascript
// En auth-services.js
const login = async (data) => {
  const userAuth = await axios.post(API_URL + '/login', data);
  // Debe guardar aquí:
  await localforage.setItem('userAuth', userAuth.data);
  return userAuth.data;
}
```

Verifica que se guarde:
```javascript
// En DevTools → Application → LocalStorage
// Debe haber: userAuth = { data: { accessToken: '...' } }
```

---

## 🟢 Debugging (Debugueo)

### Cómo ver qué está pasando

**1. Console de DevTools**
```javascript
console.log('Valor:', variable);
console.error('Error:', error);
console.warn('Advertencia:', algo);
```

**2. Network Tab**
- Mira cada petición HTTP
- Ve status (200, 404, 500, etc.)
- Ve respuesta JSON

**3. Elements Tab**
- Inspecciona elementos HTML
- Ve clases de Tailwind aplicadas

**4. React Developer Tools**
- Extensión de Chrome
- Ve componentes que se renderizan
- Ve props y estado

**5. Console.table()**
```javascript
const datos = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'María' }
];
console.table(datos);  // Mostrar como tabla
```

---

## 📋 Checklist para Debug

Cuando algo no funciona:

- [ ] ¿El error está en Console?
- [ ] ¿Miro la Network tab para ver peticiones?
- [ ] ¿React DevTools muestra props correctos?
- [ ] ¿El archivo se guardó (Ctrl+S)?
- [ ] ¿Recargué el navegador (F5)?
- [ ] ¿El backend está corriendo?
- [ ] ¿La URL de API es correcta?
- [ ] ¿El token es válido?
- [ ] ¿Las dependencias están instaladas (npm install)?

---

## 🆘 Si Nada Funciona

**Opción 1: Limpia caché**
```bash
# Borra node_modules
rm -r node_modules

# Reinstala
npm install

# Reinicia
npm start
```

**Opción 2: Borra localStorage**
En DevTools → Application → Clear Storage

**Opción 3: Revisa internet**
Lee GUIA_COMPLETA.md desde el principio

**Opción 4: Busca en Google**
Copia el error exacto en Google/Stack Overflow

---

## 📞 Recursos Útiles

- [MDN JavaScript](https://developer.mozilla.org)
- [React Docs](https://react.dev)
- [Stack Overflow](https://stackoverflow.com)
- [Error Code Search](https://www.google.com) - Copia el error completo

---

¡Espero que esta guía te ayude! 🚀
