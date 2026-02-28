# 📱 EZ Frontend - Documentación Completa

## 🎯 Descripción General
EZ Frontend es una aplicación Angular 21 que se conecta con un backend Spring Boot. La aplicación implementa un sistema de control de acceso basado en roles (RBAC) con tres perfiles de usuario: **Admin**, **Ingeniero** y **Usuario**.

---

## 📊 Estructura del Proyecto

```
Ez_Front/
├── ez-frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── admin/           # Componentes para Administrador
│   │   │   │   ├── ingeniero/       # Componentes para Ingeniero
│   │   │   │   ├── usuario/         # Componentes para Usuario
│   │   │   │   └── header/          # Header común a todos los roles
│   │   │   ├── app.ts              # Componente raíz
│   │   │   ├── app.html            # Template raíz
│   │   │   ├── app.routes.ts       # Configuración de rutas
│   │   │   └── ...
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.scss
│   ├── package.json
│   ├── angular.json
│   └── ...
```

---

## 🔐 Estructura de Roles y Permisos

### 👨‍💼 ADMINISTRADOR (Admin)
**Ruta Base**: `/admin`

**Componentes y Funcionalidades**:

| Componente | Ruta | Funcionalidad |
|-----------|------|---------------|
| **Dashboard** | `/admin/dashboard` | Panel de control con estadísticas generales, gráficos de usuarios y contratos |
| **Usuarios** | `/admin/usuarios` | ABM de usuarios, asignación de roles |
| **Contratos** | `/admin/contratos` | Gestión completa de contratos (CRUD), búsqueda, filtros |
| **Correos** | `/admin/correos` | Gestión y envío de correos corporativos |
| **Chat** | `/admin/chat` | Sistema de mensajería entre usuarios |

**Permisos**:
- ✅ Acceso total a todas las secciones
- ✅ Gestión de usuarios y permisos
- ✅ Reportes y estadísticas
- ✅ Control de contratos y comunicación

---

### 🔧 INGENIERO (Ingeniero)
**Ruta Base**: `/ingeniero`

**Componentes y Funcionalidades**:

| Componente | Ruta | Funcionalidad |
|-----------|------|---------------|
| **Dashboard** | `/ingeniero/dashboard` | Panel con proyectos asignados, tareas pendientes, cronograma |
| **Proyectos** | `/ingeniero/proyectos` | Vista de proyectos en los que participa |
| **Tareas** | `/ingeniero/tareas` | Tareas asignadas con estado (Pendiente, En Progreso, Completado) |
| **Herramientas** | `/ingeniero/herramientas` | Acceso a herramientas y recursos técnicos |

**Permisos**:
- ✅ Visualización de proyectos asignados
- ✅ Gestión de tareas personales
- ✅ Seguimiento de progreso
- ✅ Acceso a recursos técnicos

---

### 👤 USUARIO (Usuario)
**Ruta Base**: `/usuario`

**Componentes y Funcionalidades**:

| Componente | Ruta | Funcionalidad |
|-----------|------|---------------|
| **Dashboard** | `/usuario/dashboard` | Panel personal con información de perfil y estado de solicitudes |
| **Solicitudes** | `/usuario/solicitudes` | Visualización de solicitudes realizadas |
| **Perfil** | `/usuario/perfil` | Edición de datos personales |
| **Soporte** | `/usuario/soporte` | Canal de contacto con soporte técnico |

**Permisos**:
- ✅ Vista limitada y personal
- ✅ Gestión de solicitudes propias
- ✅ Edición de perfil
- ✅ Soporte y consultas

---

## 🎨 Componentes Creados

### Header (Común a todos)
- **Archivo**: `src/app/components/header/`
- **Función**: Navegación principal, menú de usuario, búsqueda
- **Estilos**: Gradiente morado/azul, responsive

### Admin Components
```
admin/
├── dashboard.component.ts/html/scss
├── usuarios.component.ts/html/scss
├── contratos.component.ts/html/scss
├── correos.component.ts/html/scss
└── chat.component.ts/html/scss
```

### Ingeniero Components
```
ingeniero/
├── dashboard.component.ts/html/scss
├── proyectos.component.ts/html/scss
├── tareas.component.ts/html/scss
└── herramientas.component.ts/html/scss
```

### Usuario Components
```
usuario/
├── dashboard.component.ts/html/scss
├── solicitudes.component.ts/html/scss
├── perfil.component.ts/html/scss
└── soporte.component.ts/html/scss
```

---

## 🛣️ Configuración de Rutas

```typescript
// app.routes.ts
{
  path: '',
  redirectTo: '/admin/dashboard',
  pathMatch: 'full'
}

// ADMIN ROUTES
{
  path: 'admin',
  children: [
    { path: 'dashboard', component: AdminDashboardComponent },
    { path: 'usuarios', component: AdminUsuariosComponent },
    { path: 'contratos', component: AdminContratosComponent },
    { path: 'correos', component: AdminCorreosComponent },
    { path: 'chat', component: AdminChatComponent }
  ]
}

// INGENIERO ROUTES
{
  path: 'ingeniero',
  children: [
    { path: 'dashboard', component: IngenieroDashboardComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'tareas', component: TareasComponent },
    { path: 'herramientas', component: HerramientasComponent }
  ]
}

// USUARIO ROUTES
{
  path: 'usuario',
  children: [
    { path: 'dashboard', component: UsuarioDashboardComponent },
    { path: 'solicitudes', component: UsuarioSolicitudesComponent },
    { path: 'perfil', component: UsuarioPerfilComponent },
    { path: 'soporte', component: UsuarioSoporteComponent }
  ]
}

// Wildcard
{
  path: '**',
  redirectTo: '/admin/dashboard'
}
```

---

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "@angular/common": "^21.1.0",
    "@angular/compiler": "^21.1.0",
    "@angular/core": "^21.1.0",
    "@angular/forms": "^21.1.0",
    "@angular/platform-browser": "^21.1.0",
    "@angular/router": "^21.1.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0"
  }
}
```

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Instalación de Dependencias
```bash
cd ez-frontend
npm install
```

### 2. Servidor de Desarrollo
```bash
npm start
# O
ng serve
```
El servidor estará disponible en `http://localhost:4200`

### 3. Build para Producción
```bash
npm run build
# O
ng build --configuration production
```

### 4. Pruebas
```bash
npm test
# O
ng test
```

---

## 🔌 Conexión con Backend Spring Boot

### API Base
Por defecto, la aplicación espera que el backend esté en:
```
http://localhost:8080
```

### Proxy Configuration (proxy.conf.json)
```json
{
  "/api": {
    "target": "http://localhost:8080",
    "pathRewrite": {
      "^/api": "/api"
    }
  }
}
```

Para usar el proxy:
```bash
npm run start:proxy
```

---

## 🎨 Estilos y Diseño

### Color Scheme
- **Gradiente Principal**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Fondos**: `#f5f7fa`
- **Texto Principal**: `#1a202c`
- **Texto Secundario**: `#718096`

### Componentes UI Reutilizables
- Tarjetas (Cards)
- Botones con gradiente
- Badges para estados
- Tablas responsive
- Formularios con validación

---

## 📱 Responsive Design
- **Desktop**: Diseño completo en grid
- **Tablet**: Ajuste de columnas
- **Mobile**: Stack vertical, menú colapsable

---

## 🔐 Gestión de Autenticación

### localStorage Keys
- `userRole`: admin | ingeniero | usuario
- `userName`: Nombre del usuario autenticado
- `authToken`: Token de autenticación

### Header Component
Detecta automáticamente el rol del usuario y ajusta el menú de navegación:

```typescript
ngOnInit() {
  this.userRole = localStorage.getItem('userRole') || 'usuario';
  this.userName = localStorage.getItem('userName') || 'Usuario';
}
```

---

## 🐛 Solución de Problemas

### Build Errors
Si encuentras errores de compilación:
1. Asegúrate de tener Node.js 18+ instalado
2. Reinstala las dependencias: `npm install`
3. Limpia el caché: `rm -rf node_modules dist && npm install`

### Dependencias Faltantes
```bash
npm install caniuse-lite
npm audit fix
```

---

## 📝 Próximos Pasos

1. **Integración con Backend**
   - Crear servicios Angular para consumir APIs
   - Implementar interceptores HTTP para autenticación
   - Manejo de errores y estados de carga

2. **Autenticación**
   - Implementar login/logout
   - Guards de rutas por rol
   - Refresh tokens

3. **Validación**
   - Formularios reactivos
   - Validación de campos
   - Mensajes de error

4. **Estado Global**
   - NgRx o Akita para gestión de estado
   - Caché de datos

5. **Testing**
   - Tests unitarios con Karma/Jasmine
   - Tests E2E

---

## 📄 Información Git

**Último Commit**:
```
Crear estructura completa del frontend con componentes para Admin, Ingeniero y Usuario
Commit: 0844e7f
```

**Repositorio**: https://github.com/joseph-munoz-03/Ez_Front

---

## 👨‍💻 Autor
Esteban

## 📅 Fecha de Creación
Febrero 28, 2026

---

**¡Proyecto listo para conectar con el backend Spring Boot! 🚀**

