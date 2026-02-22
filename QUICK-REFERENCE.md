# Referencia Rápida - Comandos y Atajos

## 🚀 Iniciar Desarrollo

```powershell
# Con script (RECOMENDADO)
cd 'C:\Users\Esteban\IdeaProjects\Ez_Front\ez-frontend'
.\start-dev-server.ps1

# Manual con proxy
cd 'C:\Users\Esteban\IdeaProjects\Ez_Front\ez-frontend'
npm run start:proxy

# Manual sin proxy
npm run start

# En otro puerto
ng serve --proxy-config proxy.conf.json --port 4300
```

---

## 📦 Gestión de Dependencias

```bash
# Instalar todas
npm install

# Instalar nuevo paquete
npm install nombrePaquete

# Actualizar todo
npm update

# Ver versiones
npm list

# Limpiar cache
npm cache clean --force

# Reinstalar desde cero
rm -r node_modules package-lock.json
npm install
```

---

## 🔨 Build y Testing

```bash
# Build desarrollo
npm run build

# Build producción
npm run build -- --configuration production

# Watch mode (recompila al cambiar)
npm run watch

# Tests
npm run test

# Tests en watch
npm run test -- --watch
```

---

## 🗂️ Crear Componentes

```bash
# Generar componente (standalone)
ng generate component nombre-componente
# O corto
ng g c nombre-componente

# Con ruta automática
ng g c nombre-componente --route ruta
```

**Ejemplo**:
```bash
ng g c components/mi-componente
# Crea: src/app/components/mi-componente.component.ts
```

---

## 📡 Crear Servicios

```bash
# Generar servicio
ng generate service servicios/mi-servicio
# O corto
ng g s servicios/mi-servicio

# Crea: src/app/servicios/mi-servicio.service.ts
```

---

## 🔄 Rutas Comunes

### Agregar ruta en `app.routes.ts`

```typescript
import { Routes } from '@angular/router';
import { MiComponente } from './components/mi-componente.component';

export const routes: Routes = [
  { path: 'mi-ruta', component: MiComponente }
];
```

### Navegar en template

```html
<a routerLink="/mi-ruta">Ir a Mi Ruta</a>
```

### Navegar en código

```typescript
constructor(private router: Router) {}

irA() {
  this.router.navigate(['/mi-ruta']);
}
```

---

## 🎨 Estilos y SCSS

### Global
```scss
// src/styles.scss
body {
  font-family: Arial, sans-serif;
}
```

### Por componente
```typescript
// En component.ts
@Component({
  selector: 'app-mi-componente',
  template: `<div>Contenido</div>`,
  styles: [`
    div { color: blue; }
  `],
  // O referencia a archivo
  styleUrls: ['./mi-componente.scss']
})
```

### Archivo SCSS por componente
```scss
// mi-componente.scss
.contenedor {
  display: flex;
  padding: 20px;
  
  &:hover {
    background-color: #f0f0f0;
  }
}
```

---

## 🔌 Consumir API

### Inyectar servicio

```typescript
import { ApiService } from '../api.service';

constructor(private api: ApiService) {}

ngOnInit() {
  this.api.get('/usuarios').subscribe(
    data => console.log('Éxito:', data),
    error => console.error('Error:', error)
  );
}
```

### Métodos disponibles (ApiService)

```typescript
// GET
this.api.get<Usuario[]>('/usuarios');

// POST
this.api.post('/usuarios', nuevoUsuario);

// PUT
this.api.put('/usuarios/1', usuarioActualizado);

// DELETE
this.api.delete('/usuarios/1');
```

---

## 🧪 Testing Rápido

```typescript
// En mi-componente.spec.ts
import { TestBed } from '@angular/core/testing';
import { MiComponente } from './mi-componente.component';

describe('MiComponente', () => {
  let component: MiComponente;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiComponente]
    }).compileComponents();

    component = TestBed.createComponent(MiComponente).componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
```

Ejecutar:
```bash
npm run test
```

---

## 🔍 Debugging

### En el navegador (DevTools)

1. Abre `http://localhost:4200`
2. Abre **DevTools** (F12)
3. Pestaña **Console** para logs
4. Pestaña **Sources** para breakpoints
5. Pestaña **Network** para ver llamadas HTTP

### Console.log

```typescript
console.log('Variable:', variable);
console.error('Error:', error);
console.table(arrayDatos);  // Muestra en tabla
```

### Breakpoints

1. En DevTools → Sources
2. Haz clic en el número de línea
3. Reload página (F5)
4. Debugging paso a paso

---

## 📍 Proxy y CORS

### Activar proxy

```bash
npm run start:proxy
# O
ng serve --proxy-config proxy.conf.json
```

### Verificar peticiones

En DevTools → Network, verás las peticiones a `/api/*` reenviadas a `http://localhost:8080`.

### Backend debe estar en puerto 8080

```powershell
# Verificar
netstat -ano | findstr 8080
```

Si ves una línea con `LISTENING`, Spring Boot corre en 8080.

---

## 🚨 Errores Comunes

| Error | Solución |
|-------|----------|
| `ng: command not found` | `npm install -g @angular/cli` o usa `npx` |
| `Port 4200 already in use` | `ng serve --port 4300` o detén el proceso anterior |
| `node_modules missing` | `npm install` |
| `404 en /api/*` | Verifica backend en 8080, revisa proxy.conf.json |
| Cambios no reflejan | Ctrl+Shift+R (hard refresh) |
| `Cannot find module` | `npm install` y revisa imports en `.ts` |

---

## 📋 Checklist Diario

- [ ] `npm run start:proxy` iniciado
- [ ] http://localhost:4200 abierto en navegador
- [ ] Backend (8080) corriendo
- [ ] DevTools abierto (F12) para debugging
- [ ] Cambios guardados automáticamente
- [ ] Hot-reload funciona

---

## 🔧 Utilidades

### Limpiar cache de npm
```bash
npm cache clean --force
```

### Verificar versiones
```bash
node --version
npm --version
ng --version
```

### Listar scripts disponibles
```bash
npm run
```

### Detener servidor
```
Ctrl+C en la terminal del servidor
```

### Abrir en navegador automáticamente
```bash
ng serve --open
# O en script
npm run start:proxy -- --open
```

---

## 📂 Archivos Clave

| Archivo | Propósito |
|---------|-----------|
| `package.json` | Dependencias y scripts |
| `proxy.conf.json` | Proxy para desarrollo |
| `src/app/app.routes.ts` | Rutas de la app |
| `src/app/api.service.ts` | Servicio HTTP |
| `src/app/app.ts` | Componente raíz |
| `src/main.ts` | Entry point |
| `src/index.html` | HTML principal |
| `src/styles.scss` | Estilos globales |
| `angular.json` | Config Angular CLI |
| `tsconfig.json` | Config TypeScript |

---

## 💡 Tips

1. Usa standalone components (ya está configurado)
2. Agrupa componentes en carpetas: `components/`, `pages/`, `dialogs/`, etc.
3. Agrupa servicios en carpetas: `services/`
4. Reutiliza servicios inyectándolos en componentes
5. Usa async pipe en templates para Observables
6. Documenta servicios con JSDoc
7. Mantén componentes pequeños y enfocados
8. Usa strong typing en TypeScript (evita `any`)

---

## 🔗 Atajos de teclado (DevTools)

| Atajo | Función |
|-------|---------|
| `F12` | Abrir DevTools |
| `Ctrl+Shift+C` | Inspeccionar elemento |
| `Ctrl+Shift+K` | Limpiar console |
| `F5` | Reload página |
| `Ctrl+Shift+R` | Hard refresh (sin cache) |
| `Ctrl+Shift+J` | Abrir console |
| `Ctrl+Shift+I` | Abrir DevTools |

---

**Para más detalles**: Revisa `SETUP-GUIDE.md` y `ROUTING-SETUP.md`

