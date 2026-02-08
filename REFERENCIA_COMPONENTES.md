# 📖 Referencia de Componentes

## Resumen Rápido de Todos los Componentes

---

## 🔘 Botones (`src/components/buttons/`)

### Button.jsx - Botón Genérico
```jsx
import { Button } from '../components/buttons/Button';

// Uso
<Button onClick={() => alert('Presionado!')}>
  Presioname
</Button>
```

### AddButton.jsx - Botón para Agregar
```jsx
import { AddButton } from '../components/buttons/AddButton';

// Uso - Navega a formulario de creación
<AddButton to="/admin/accounts/add" />
```

### SubmitButton.jsx - Botón de Envío
```jsx
import { SubmitButton } from '../components/buttons/SubmitButton';

// Uso - Dentro de un formulario
<form onSubmit={handleSubmit}>
  <input type="text" />
  <SubmitButton label="Guardar" />
</form>
```

### LogoutButton.jsx - Cerrar Sesión
```jsx
import { LogoutButton } from '../components/buttons/LogoutButton';

// Uso
<LogoutButton />
```

### BackButton.jsx - Botón Atrás
```jsx
import { BackButton } from '../components/buttons/BackButton';

// Uso
<BackButton />
```

### ToggleThemeButton.jsx - Cambiar Tema
```jsx
import { ToggleThemeButton } from '../components/buttons/ToggleThemeButton';

// Uso
<ToggleThemeButton />
```

### CancelButton.jsx - Cancelar
```jsx
import { CancelButton } from '../components/buttons/CancelButton';

// Uso
<CancelButton onClick={() => navigate(-1)} />
```

### GroupButton.jsx - Grupo de Botones
```jsx
import { GroupButton } from '../components/buttons/GroupButton';

// Uso
<GroupButton>
  <Button>Opción 1</Button>
  <Button>Opción 2</Button>
</GroupButton>
```

### FloatAddButton.jsx - Botón Flotante
```jsx
import { FloatAddButton } from '../components/buttons/FloatAddButton';

// Uso - Flota en la esquina inferior derecha
<FloatAddButton to="/admin/accounts/add" />
```

---

## 📝 Inputs (`src/components/inputs/`)

### InputGroup.jsx - Campo de Entrada
```jsx
import { InputGroup } from '../components/inputs/InputGroup';

// Uso
<InputGroup 
  label="Email"
  type="email"
  placeholder="tu@email.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

### InputLabel.jsx - Etiqueta
```jsx
import { InputLabel } from '../components/inputs/InputLabel';

// Uso
<InputLabel htmlFor="nombre">Nombre Completo</InputLabel>
<input id="nombre" type="text" />
```

### TextArea.jsx - Área de Texto
```jsx
import { TextArea } from '../components/inputs/TextArea';

// Uso
<TextArea
  label="Descripción"
  value={desc}
  onChange={(e) => setDesc(e.target.value)}
  rows={5}
/>
```

### Select.jsx - Selector Desplegable
```jsx
import { Select } from '../components/inputs/Select';

// Uso
<Select
  label="Categoría"
  value={categoria}
  onChange={(e) => setCategoria(e.target.value)}
>
  <select>
    <option value="">Selecciona...</option>
    <option value="ingresos">Ingresos</option>
    <option value="gastos">Gastos</option>
  </select>
</Select>
```

### FileInputGroup.jsx - Carga de Archivo
```jsx
import { FileInputGroup } from '../components/inputs/FileInputGroup';

// Uso
<FileInputGroup
  label="Selecciona imagen"
  onChange={(file) => setFile(file)}
  accept="image/*"
/>
```

### SearchBar.jsx - Barra de Búsqueda
```jsx
import { SearchBar } from '../components/inputs/SearchBar';

// Uso
<SearchBar 
  placeholder="Buscar cuenta..."
  onSearch={(value) => filtrarCuentas(value)}
/>
```

### SelectOptions.jsx - Opciones Avanzadas
```jsx
import { SelectOptions } from '../components/inputs/SelectOptions';

// Uso - Más opciones de personalización
<SelectOptions
  options={[
    { value: '1', label: 'Opción 1' },
    { value: '2', label: 'Opción 2' }
  ]}
  value={selected}
  onChange={setSelected}
/>
```

### Inputs.jsx - Inputs Genéricos
```jsx
import { Inputs } from '../components/inputs/Inputs';

// Uso
<Inputs
  type="password"
  placeholder="Contraseña"
  onChange={handleChange}
/>
```

---

## 🎴 Cards (`src/components/cards/`)

### StaticCard.jsx - Tarjeta de Información
```jsx
import { StaticCard } from '../components/cards/StaticCard';

// Uso
<StaticCard
  label="Total Ahorros"
  value={5000}
  icon={<SavingsIcon />}
  currency={true}
/>
```

---

## 📋 Tablas (`src/components/tables/`)

### Table.jsx - Tabla Principal
```jsx
import { Table } from '../components/tables/Table';

// Uso
<Table
  columns={['Nombre', 'Saldo', 'Acciones']}
  data={accounts}
  renderRow={(account) => (
    <tr key={account.id}>
      <td>{account.name}</td>
      <td>${account.balance}</td>
      <td><button>Editar</button></td>
    </tr>
  )}
/>
```

### TRow.jsx - Fila de Tabla
```jsx
import { TRow } from '../components/tables/TRow';

// Uso
<table>
  <tbody>
    <TRow>
      <td>Dato 1</td>
      <td>Dato 2</td>
    </TRow>
  </tbody>
</table>
```

### Pagination.jsx - Paginación
```jsx
import { Pagination } from '../components/tables/Pagination';

// Uso
<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={(newPage) => setPage(newPage)}
/>
```

### RowOptions.jsx - Opciones de Fila
```jsx
import { RowOptions } from '../components/tables/RowOptions';

// Uso
<RowOptions
  actions={[
    { label: 'Editar', onClick: handleEdit },
    { label: 'Eliminar', onClick: handleDelete }
  ]}
/>
```

### SubTable.jsx - Tabla Anidada
```jsx
import { SubTable } from '../components/tables/SubTable';

// Uso - Tabla dentro de tabla
<SubTable
  parentId={accountId}
  columns={['Fecha', 'Monto', 'Tipo']}
  data={movements}
/>
```

### TBodyAccountsHistoricalsShow.jsx - Historial de Cuentas
```jsx
import { TBodyAccountsHistoricalsShow } from '../components/tables/TBodyAccountsHistoricalsShow';

// Uso
<table>
  <tbody>
    <TBodyAccountsHistoricalsShow
      movements={historialMovimientos}
    />
  </tbody>
</table>
```

---

## 🧭 Navegación (`src/components/navs/`)

### Sidebar.jsx - Barra Lateral
```jsx
import { Sidebar } from '../components/navs/Sidebar';

// Uso - Se usa en AdminPage
<Sidebar />
```

### SidebarItems.jsx - Items del Menú
```jsx
import { SidebarItems } from '../components/navs/SidebarItems';

// Uso
<SidebarItems
  items={[
    { label: 'Dashboard', to: '/admin' },
    { label: 'Cuentas', to: '/admin/accounts' }
  ]}
/>
```

### SidebarSubItem.jsx - Subitem del Menú
```jsx
import { SidebarSubItem } from '../components/navs/SidebarSubItem';

// Uso
<SidebarSubItem label="Crear Cuenta" to="/admin/accounts/add" />
```

### Footer.jsx - Pie de Página
```jsx
import { Footer } from '../components/navs/Footer';

// Uso
<Footer />
```

---

## 📸 Headers (`src/components/headers/`)

### DashboardHeader.jsx - Encabezado del Dashboard
```jsx
import { DashboardHeader } from '../components/headers/DashboardHeader';

// Uso
<DashboardHeader title="Dashboard" />
```

### LandingHeader.jsx - Encabezado Landing
```jsx
import { LandingHeader } from '../components/headers/LandingHeader';

// Uso
<LandingHeader />
```

---

## 👤 Imágenes (`src/components/pictures/`)

### UserAuthAvatarAndInfo.jsx - Avatar y Info Usuario
```jsx
import { UserAuthAvatarAndInfo } from '../components/pictures/UserAuthAvatarAndInfo';

// Uso
<UserAuthAvatarAndInfo
  user={currentUser}
  onLogout={handleLogout}
/>
```

---

## 📊 Secciones (`src/components/sections/`)

### Charts.jsx - Gráficos
```jsx
import { Charts } from '../components/sections/Charts';

// Uso
<Charts
  data={categoriesData}
  title="Distribución de Gastos"
/>
```

### TaskSummaries.jsx - Resumen de Tareas
```jsx
import { TaskSummaries } from '../components/sections/TaskSummaries';

// Uso
<TaskSummaries tasks={tareas} />
```

### AccountsByCategories.jsx - Cuentas por Categoría
```jsx
import { AccountsByCategories } from '../components/sections/AccountsByCategories';

// Uso
<AccountsByCategories accounts={accounts} />
```

### SocialTrafficAndRecentActivities.jsx - Actividades Recientes
```jsx
import { SocialAndRecent } from '../components/sections/SocialTrafficAndRecentActivities';

// Uso
<SocialAndRecent activities={recentActivities} />
```

### Hero.jsx - Sección Hero
```jsx
import { Hero } from '../components/sections/Hero';

// Uso
<Hero
  title="Bienvenido a NPF"
  subtitle="Gestiona tus finanzas"
/>
```

### ParallaxBackGround.jsx - Fondo Parallax
```jsx
import { ParallaxBackGround } from '../components/sections/ParallaxBackGround';

// Uso
<ParallaxBackGround>
  <h1>Contenido con parallax</h1>
</ParallaxBackGround>
```

### Example.jsx - Componente de Ejemplo
```jsx
import { Example } from '../components/sections/Example';

// Uso
<Example />
```

---

## ⚙️ Wraps/Layouts (`src/components/wraps/`)

### AuthFormsWrap.jsx - Layout para Autenticación
```jsx
// Se usa en router
{
  path: '/',
  element: <AuthFormsWrap />,
  children: [
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> }
  ]
}
```

### LandingWrap.jsx - Layout para Landing
```jsx
// Se usa en router
{
  path: '/',
  element: <LandingWrap />,
  children: [
    { index: true, element: <LandingPage /> }
  ]
}
```

### SectionShowDetailsWrap.jsx - Layout para Detalles
```jsx
import { SectionShowDetailsWrap } from '../components/wraps/SectionShowDetailsWrap';

// Uso
<SectionShowDetailsWrap
  title="Detalles de Cuenta"
  data={accountData}
/>
```

### TableWrap.jsx - Layout para Tabla
```jsx
import { TableWrap } from '../components/wraps/TableWrap';

// Uso
<TableWrap
  title="Mis Cuentas"
  data={accounts}
/>
```

### PaginationWrap.jsx - Layout para Paginación
```jsx
import { PaginationWrap } from '../components/wraps/PaginationWrap';

// Uso
<PaginationWrap
  items={data}
  itemsPerPage={10}
/>
```

---

## ⏳ Loaders (`src/components/loaders/`)

### loader.jsx - Componente de Carga
```jsx
import { Loader } from '../components/loaders/loader';

// Uso
{isLoading && <Loader />}
```

---

## 📋 Formularios (`src/components/forms/`)

### example-form.jsx - Formulario de Ejemplo
```jsx
import { ExampleForm } from '../components/forms/example-form';

// Uso
<ExampleForm onSubmit={handleSubmit} />
```

---

## 🔌 Hooks Personalizados (`src/custom-hooks/`)

### usePagination.js - Paginación
```jsx
import { usePagination } from '../custom-hooks/usePagination';

// Uso
const { 
  currentPage, 
  setCurrentPage, 
  paginatedItems, 
  totalPages 
} = usePagination(items, 10);

return (
  <>
    {paginatedItems.map(item => <div key={item.id}>{item.name}</div>)}
    <Pagination 
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  </>
);
```

---

## 🎨 Tailwind CSS - Clases Útiles

```jsx
// Colores
className="text-blue-500"           // Texto azul
className="bg-red-500"              // Fondo rojo
className="border border-gray-300"  // Borde
className="hover:bg-blue-600"       // Al pasar cursor

// Tamaño
className="text-sm"                 // Texto pequeño
className="text-lg"                 // Texto grande
className="text-2xl"                // Texto muy grande
className="text-bold"               // Negrita

// Espaciado
className="p-4"                     // Padding 1rem
className="m-2"                     // Margin 0.5rem
className="gap-4"                   // Espacio entre flexbox

// Flexbox
className="flex"                    // Activar flexbox
className="flex-col"                // Columna
className="justify-center"          // Centrar horizontal
className="items-center"            // Centrar vertical

// Grid
className="grid grid-cols-3"        // 3 columnas
className="grid-cols-2"             // 2 columnas
className="gap-4"                   // Espacio entre elementos

// Display
className="block"                   // Bloque
className="inline-block"            // Inline-block
className="hidden"                  // Oculto
className="md:hidden"               // Oculto en mobile

// Redondeado
className="rounded"                 // Poco redondeado
className="rounded-lg"              // Muy redondeado
className="rounded-full"            // Círculo

// Sombra
className="shadow-md"               // Sombra media
className="shadow-lg"               // Sombra grande
className="hover:shadow-xl"         // Sombra al pasar

// Transiciones
className="transition"              // Transición suave
className="duration-300"            // 300ms
className="ease-in-out"             // Easing

// Responsive
className="block md:hidden"         // Visible en mobile, oculto en desktop
className="hidden md:block"         // Oculto en mobile, visible en desktop
className="grid-cols-1 md:grid-cols-3"  // 1 columna mobile, 3 desktop

// Tema oscuro
className="dark:bg-gray-800"        // Gris en dark mode
className="dark:text-white"         // Blanco en dark mode
```

---

## 📚 Patrones de Componentes Comunes

### Componente con Estado
```jsx
import { useState } from 'react';

export function MiComponente() {
  const [value, setValue] = useState('');
  
  return (
    <input 
      value={value} 
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

### Componente con Props
```jsx
export function Card({ title, description, onClick }) {
  return (
    <div className="card p-4 rounded-lg">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onClick}>Accionar</button>
    </div>
  );
}

// Uso
<Card 
  title="Mi Card"
  description="Descripción"
  onClick={() => alert('Click!')}
/>
```

### Componente con Array
```jsx
export function Lista({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

### Componente con Condición
```jsx
export function Mensaje({ tipo }) {
  return (
    <div>
      {tipo === 'exito' && (
        <p className="text-green-500">¡Perfecto!</p>
      )}
      {tipo === 'error' && (
        <p className="text-red-500">¡Error!</p>
      )}
    </div>
  );
}
```

---

¡Ahora tienes una referencia completa de todos los componentes! 🎉
