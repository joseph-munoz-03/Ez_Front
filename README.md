# Ez-Frontend + Ez-Backend

Proyecto Full-Stack: **Frontend Angular 21 + Backend Spring Boot**

---

## 📁 Estructura del Workspace

```
Ez_Front (workspace root)
│
├── ez-frontend/                 ← Proyecto Angular (este repositorio)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/      ← Componentes (ej: user-list.component.ts)
│   │   │   ├── services/        ← Servicios (ej: api.service.ts)
│   │   │   ├── app.ts           ← Componente raíz
│   │   │   ├── app.routes.ts    ← Rutas
│   │   │   └── app.config.ts    ← Configuración
│   │   ├── main.ts              ← Entry point
│   │   ├── index.html           ← HTML principal
│   │   └── styles.scss          ← Estilos globales
│   ├── package.json             ← Dependencias npm
│   ├── package-lock.json        ← Lock file
│   ├── proxy.conf.json          ← Proxy para desarrollo (→ localhost:8080)
│   ├── start-dev-server.ps1     ← Script para iniciar servidor
│   ├── SETUP-GUIDE.md           ← Guía completa de setup
│   └── ...
│
├── Ez-Backend/                  ← (Otro repositorio) Backend Spring Boot
│   └── (clonado desde otro repositorio)
│
├── SETUP-GUIDE.md               ← Guía global de setup
├── ROUTING-SETUP.md             ← Guía de rutas (routing)
└── README.md                    ← Este archivo
```

---

## 🚀 Quick Start

### Inicio rápido (5 minutos)

#### 1️⃣ Abre PowerShell y navega al proyecto

```powershell
cd 'C:\Users\Esteban\IdeaProjects\Ez_Front\ez-frontend'
```

#### 2️⃣ Ejecuta el script de inicio

```powershell
.\start-dev-server.ps1
```

Esto:
- Verifica Node.js, npm y dependencias
- Instala paquetes si falta algo
- Arranca el servidor en **http://localhost:4200**
- Configura proxy a **http://localhost:8080** (backend)

#### 3️⃣ Abre el navegador

```
http://localhost:4200
```

✓ ¡Listo! El frontend está corriendo con hot-reload activado.

---

## 📚 Documentación Completa

| Documento | Contenido |
|-----------|-----------|
| **SETUP-GUIDE.md** | Setup completo, troubleshooting, stack tecnológico |
| **ROUTING-SETUP.md** | Configuración de rutas, lazy loading, guards |
| **ez-frontend/README.md** | Documentación oficial de Angular (autogenerada) |

---

## 🔧 Desarrollo

### Scripts disponibles

```bash
# En ez-frontend/
npm run start            # Servidor sin proxy
npm run start:proxy      # Servidor con proxy a localhost:8080 (RECOMENDADO)
npm run build            # Build para producción
npm run watch            # Build en modo watch
npm run test             # Tests con Vitest
```

### Estructura de desarrollo

```
Editar archivos en: src/app/

src/app/
├── components/          ← Componentes (UserListComponent, etc.)
├── services/           ← Servicios (ApiService, etc.)
├── app.ts              ← Componente raíz
├── app.routes.ts       ← Rutas
├── app.config.ts       ← Configuración
└── app.scss            ← Estilos globales
```

### Hot reload

- Cambios en `.ts`, `.html`, `.scss` se reflejan automáticamente en http://localhost:4200
- No necesitas reiniciar el servidor

---

## 🔌 Integración Frontend + Backend

### Puertos por defecto

| Servicio | Puerto | URL |
|----------|--------|-----|
| **Frontend Angular** | 4200 | http://localhost:4200 |
| **Backend Spring Boot** | 8080 | http://localhost:8080 |

### Cómo funciona el proxy

```
Frontend (4200)
    ↓ GET /api/usuarios (request)
Proxy (proxy.conf.json)
    ↓ Reenvía a http://localhost:8080/api/usuarios
Backend Spring Boot (8080)
    ↓ Response JSON
Proxy
    ↓ Devuelve al Frontend
Frontend (muestra datos)
```

**Ventaja**: Evita errores de CORS en desarrollo.

### Ejemplo de llamada al backend

```typescript
// En src/app/api.service.ts (ya preparado)
constructor(private apiService: ApiService) {}

ngOnInit() {
  this.apiService.get('/usuarios').subscribe(data => {
    console.log('Usuarios:', data);
  });
}
```

Con el proxy activado, esto hace una petición a `http://localhost:8080/api/usuarios`.

---

## 🛠️ Requisitos previos

- **Node.js** >= 18.x
- **npm** >= 8.x
- **Spring Boot** corriendo en http://localhost:8080 (para el proxy)

Verificar:
```powershell
node --version    # v22.x
npm --version     # 10.x
```

---

## 📋 Checklist de Setup

- [x] Crear proyecto Angular (`ng new ez-frontend`)
- [x] Instalar dependencias (`npm install`)
- [x] Configurar proxy (`proxy.conf.json`)
- [x] Crear servicio API (`src/app/api.service.ts`)
- [x] Crear componente ejemplo (`src/app/components/user-list.component.ts`)
- [x] Configurar rutas (`src/app/app.routes.ts`)
- [x] Script de inicio (`start-dev-server.ps1`)
- [x] Documentación (`SETUP-GUIDE.md`, `ROUTING-SETUP.md`)

---

## 🔐 Seguridad (Producción)

En producción, **no uses proxy**. En su lugar:

### Opción 1: CORS en Spring Boot

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/api/**")
            .allowedOrigins("https://tu-dominio.com")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .maxAge(3600);
  }
}
```

### Opción 2: Servir Angular desde Spring Boot

1. Build Angular: `npm run build` → `dist/ez-frontend/`
2. Copia `dist/` → `src/main/resources/static/` en Spring Boot
3. Spring Boot sirve archivos estáticos automáticamente

---

## 📖 Recursos útiles

- [Angular 21 Documentation](https://angular.dev)
- [Angular Routing Guide](https://angular.dev/guide/routing)
- [RxJS Observables](https://rxjs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Spring Boot CORS](https://spring.io/guides/gs/rest-service-cors)

---

## 💡 Ejemplos incluidos

### ApiService (`src/app/api.service.ts`)
Servicio genérico para llamadas HTTP (GET, POST, PUT, DELETE) al backend.

### UserListComponent (`src/app/components/user-list.component.ts`)
Componente ejemplo que:
- Inyecta ApiService
- Carga datos GET /api/usuarios
- Maneja estados (cargando, error, datos)
- Muestra tabla con datos

### Rutas (`src/app/app.routes.ts`)
Configuración de rutas del proyecto con routing standalone.

---

## 🐛 Troubleshooting

### "ng: command not found"
→ Ver `SETUP-GUIDE.md` → Troubleshooting

### Backend (8080) no responde
→ Verificar que Spring Boot está corriendo en puerto 8080
```powershell
netstat -ano | findstr 8080
```

### Puerto 4200 ya en uso
→ Usar otro puerto:
```powershell
ng serve --proxy-config proxy.conf.json --port 4300
```

---

## 📝 Próximos pasos

1. **Familiarizarse** con la estructura del proyecto
2. **Crear componentes** según necesidad
3. **Definir rutas** en `src/app/app.routes.ts`
4. **Conectar API** usando `ApiService`
5. **Estilos**: Editar `src/app/app.scss` y componentes `.scss`
6. **Testing**: `npm run test` con Vitest

---

## 👤 Información del Proyecto

- **Creado**: 22/02/2026
- **Node.js**: v22.20.0
- **npm**: 10.9.3
- **Angular**: 21.1.0
- **TypeScript**: 5.9.2
- **Testing**: Vitest 4.0.8

---

## 🔗 Repositorios

- **Frontend** (este): `C:\Users\Esteban\IdeaProjects\Ez_Front\ez-frontend`
- **Backend**: Otro repositorio (Spring Boot)

---

**¿Problemas o preguntas?** Revisa los archivos de documentación incluidos o contacta al equipo de desarrollo.

