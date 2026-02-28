# 🚀 GUÍA RÁPIDA - CÓMO USAR EL PROYECTO

## ⚡ Inicio Rápido (30 segundos)

### 1️⃣ Abrir Terminal
```powershell
cd C:\Users\Esteban\IdeaProjects\Ez_Front\ez-frontend
```

### 2️⃣ Iniciar Servidor
```bash
npm start
```

### 3️⃣ Acceder a la Aplicación
```
http://localhost:4200
```

---

## 🎭 Cambiar de Rol (Para Testing)

Abre la consola del navegador (F12) y ejecuta:

### Cambiar a ADMIN
```javascript
localStorage.setItem('userRole', 'admin');
localStorage.setItem('userName', 'Admin User');
location.reload();
```

### Cambiar a INGENIERO
```javascript
localStorage.setItem('userRole', 'ingeniero');
localStorage.setItem('userName', 'Ingeniero User');
location.reload();
```

### Cambiar a USUARIO
```javascript
localStorage.setItem('userRole', 'usuario');
localStorage.setItem('userName', 'Usuario Normal');
location.reload();
```

---

## 📍 Rutas Disponibles por Rol

### 👨‍💼 Si eres ADMIN
```
http://localhost:4200/admin/dashboard   → Dashboard Admin
http://localhost:4200/admin/usuarios    → Gestión de Usuarios
http://localhost:4200/admin/contratos   → Gestión de Contratos
http://localhost:4200/admin/correos     → Gestión de Correos
http://localhost:4200/admin/chat        → Chat y Mensajería
```

### 🔧 Si eres INGENIERO
```
http://localhost:4200/ingeniero/dashboard   → Dashboard Ingeniero
http://localhost:4200/ingeniero/proyectos   → Mis Proyectos
http://localhost:4200/ingeniero/tareas      → Mis Tareas
http://localhost:4200/ingeniero/herramientas → Herramientas
```

### 👤 Si eres USUARIO
```
http://localhost:4200/usuario/dashboard   → Mi Panel
http://localhost:4200/usuario/solicitudes → Mis Solicitudes
http://localhost:4200/usuario/perfil      → Mi Perfil
http://localhost:4200/usuario/soporte     → Soporte
```

---

## 🛠️ Comandos Útiles

### Iniciar Servidor en Modo Desarrollo
```bash
npm start
# O
ng serve
```

### Compilar para Producción
```bash
npm run build
# O
ng build --configuration production
```

### Ejecutar con Proxy (Para conectar Backend)
```bash
npm run start:proxy
```

### Ejecutar Tests
```bash
npm test
```

### Limpiar Caché y Reinstalar
```bash
rm -r node_modules dist
npm install
npm start
```

---

## 🎨 Personalizar el Tema

### Cambiar Color Principal
Edita `src/app/components/header/header.component.scss`:

```scss
// Línea ~2
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

// Cambiar a:
background: linear-gradient(135deg, #FF6B6B 0%, #FF8E72 100%); // Rojo/Naranja
```

### Cambiar Font
En `src/styles.scss`:
```scss
font-family: 'Tu Font aquí', sans-serif;
```

---

## 🔌 Integración con Backend Spring Boot

### 1. Crear Servicio API
```typescript
// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http://localhost:8080/api';
  
  constructor(private http: HttpClient) {}
  
  getUsuarios() {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }
  
  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
}
```

### 2. Inyectar en Componente
```typescript
import { ApiService } from '../services/api.service';

export class UsuariosComponent {
  usuarios: any[] = [];
  
  constructor(private api: ApiService) {}
  
  ngOnInit() {
    this.api.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
}
```

### 3. Usar en Template
```html
<div *ngFor="let usuario of usuarios">
  {{ usuario.nombre }}
</div>
```

---

## 📁 Estructura de Archivos Importante

```
src/app/
├── components/
│   ├── admin/
│   │   ├── dashboard.component.ts
│   │   ├── dashboard.component.html
│   │   └── dashboard.component.scss
│   ├── ingeniero/
│   ├── usuario/
│   └── header/
├── services/              ← Aquí van los servicios HTTP
│   └── api.service.ts
├── app.routes.ts         ← Configuración de rutas
├── app.ts                ← Componente raíz
└── app.html              ← Template raíz
```

---

## 🐛 Troubleshooting

### El servidor no inicia
```bash
# Limpia y reinstala
npm install
npm start
```

### Puerto 4200 en uso
```bash
# Usa un puerto diferente
ng serve --port 4300
```

### Errores de compilación
```bash
# Borra caché
ng cache clean
npm start
```

### CORS Error (Al conectar con Backend)
En Spring Boot, agrega:
```java
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                    .allowedOrigins("http://localhost:4200")
                    .allowedMethods("*")
                    .allowedHeaders("*");
            }
        };
    }
}
```

---

## 📚 Documentación Completa

Para información más detallada, consulta:
- `DOCUMENTACION.md` - Documentación completa del proyecto
- `CHECKLIST.md` - Checklist de tareas completadas

---

## 🌐 Desplegar en Producción

### Opción 1: Render (Recomendado)
```bash
# Build
npm run build

# Los archivos en dist/ez-frontend se suben a Render
```

### Opción 2: Vercel
```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opción 3: Netlify
```bash
# Instala Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist/ez-frontend
```

---

## 📞 Datos de Conexión Backend

**URL Base**: `http://localhost:8080`
**Base Path**: `/api`
**Autenticación**: Bearer Token

**Headers Esperados**:
```
Authorization: Bearer {tu_token}
Content-Type: application/json
```

---

## ✅ Verificación Rápida

Cuando abras la app, deberías ver:
- ✅ Header morado/azul con logo "EZ System"
- ✅ Campo de búsqueda funcional
- ✅ Menú de usuario en esquina superior derecha
- ✅ Contenido del dashboard según tu rol
- ✅ Responsive en mobile (abre DevTools con F12)

---

## 🎯 Próximo Paso

1. Conecta tu backend Spring Boot
2. Actualiza `environment.ts` con URLs reales
3. Reemplaza datos dummy con llamadas API
4. Implementa login/logout
5. ¡Listo para producción!

---

**¿Dudas?** Consulta la documentación completa en `DOCUMENTACION.md`

**Última actualización**: 28 de Febrero, 2026

