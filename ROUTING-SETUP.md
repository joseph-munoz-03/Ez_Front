# Configuración de Rutas (Routing)

El proyecto Angular está configurado con **routing standalone** (sin NgModules).

## Estructura de rutas actual

Las rutas se definen en `src/app/app.routes.ts`:

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent  // Componente raíz actual
  }
  // Añade más rutas aquí
];
```

## Agregar el componente de ejemplo (UserListComponent)

### Paso 1: Importar el componente en `app.routes.ts`

```typescript
import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'usuarios',
    component: UserListComponent  // ← Nueva ruta
  }
];
```

### Paso 2: Navegar desde templates

En cualquier componente, usa `routerLink` para navegar:

```html
<!-- En src/app/app.html o cualquier template -->
<nav>
  <a routerLink="/home">Inicio</a>
  <a routerLink="/usuarios">Usuarios</a>
</nav>

<!-- Outlet para mostrar el componente según la ruta -->
<router-outlet></router-outlet>
```

**Nota**: Asegúrate de que `<router-outlet>` está en `app.html` (ya debería estar).

### Paso 3: Usar en componentes TypeScript

```typescript
import { Router } from '@angular/router';

export class MiComponente {
  constructor(private router: Router) {}

  irAUsuarios() {
    this.router.navigate(['/usuarios']);
  }

  irAHome() {
    this.router.navigate(['/home']);
  }
}
```

---

## Estructura de rutas con módulos (avanzado)

Si necesitas **lazy loading** (cargar módulos bajo demanda):

```typescript
export const routes: Routes = [
  {
    path: 'usuarios',
    loadComponent: () => import('./components/user-list.component').then(m => m.UserListComponent)
  }
];
```

Esto carga el componente solo cuando se accede a esa ruta (optimiza carga inicial).

---

## Guardianes de Rutas (Route Guards)

Ejemplo: proteger una ruta si el usuario no está autenticado.

```typescript
// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('token');
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
    return isAuthenticated;
  }
}
```

Usar el guard en una ruta:

```typescript
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'usuarios',
    component: UserListComponent,
    canActivate: [AuthGuard]  // ← Protegida
  }
];
```

---

## RouterLink vs router.navigate()

| Situación | Usa... | Ejemplo |
|-----------|--------|---------|
| Links en template | `routerLink` | `<a routerLink="/usuarios">` |
| Navegación programática | `router.navigate()` | `this.router.navigate(['/usuarios'])` |
| Con parámetros | Ambos con array | `routerLink="/usuarios/123"` o `navigate(['/usuarios', 123])` |
| Con query params | `queryParams` | `routerLink="/usuarios" [queryParams]="{ filter: 'activo' }"` |

---

## Rutas con parámetros

```typescript
export const routes: Routes = [
  {
    path: 'usuarios/:id',
    component: UserDetailComponent  // Ver detalles de un usuario
  }
];
```

En `UserDetailComponent`:

```typescript
import { ActivatedRoute } from '@angular/router';

export class UserDetailComponent implements OnInit {
  userId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener parámetro de ruta
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.loadUser(this.userId);
    });
  }

  loadUser(id: number) {
    // Cargar usuario por ID desde API
  }
}
```

Navegar a ruta con parámetro:

```typescript
// Desde template
<a [routerLink]="['/usuarios', usuario.id]">Ver detalles</a>

// Desde TypeScript
this.router.navigate(['/usuarios', 123]);
```

---

## Rutas anidadas (Children Routes)

```typescript
export const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'usuarios', component: UserListComponent },
      { path: 'productos', component: ProductListComponent },
      { path: 'reportes', component: ReportsComponent }
    ]
  }
];
```

Template para `AdminLayoutComponent`:

```html
<div class="admin-layout">
  <nav>
    <a routerLink="/admin/usuarios">Usuarios</a>
    <a routerLink="/admin/productos">Productos</a>
    <a routerLink="/admin/reportes">Reportes</a>
  </nav>
  <router-outlet></router-outlet>  <!-- Muestra rutas hijas -->
</div>
```

---

## Wildcard route (página 404)

```typescript
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UserListComponent },
  // ... más rutas ...
  { path: '**', component: NotFoundComponent }  // Cualquier otra ruta → 404
];
```

---

## Redirecciones

```typescript
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Redirigir alias
  {
    path: 'inicio',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
```

---

## Referencias útiles

- [Documentación oficial de Angular Routing](https://angular.dev/guide/routing)
- [ActivatedRoute](https://angular.dev/api/router/ActivatedRoute)
- [Router](https://angular.dev/api/router/Router)
- [Route Guards](https://angular.dev/guide/routing/guards)

---

**Proyecto**: Ez-Frontend  
**Configuración**: Standalone components + routing habilitado  
**Angular**: 21.1.0

