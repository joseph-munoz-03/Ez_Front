import { Routes } from '@angular/router';

// Admin Components
import { AdminDashboardComponent } from './components/admin/dashboard.component';
import { AdminUsuariosComponent } from './components/admin/usuarios.component';
import { AdminContratosComponent } from './components/admin/contratos.component';
import { AdminCorreosComponent } from './components/admin/correos.component';
import { AdminChatComponent } from './components/admin/chat.component';

// Ingeniero Components
import { IngenieroDashboardComponent } from './components/ingeniero/dashboard.component';
import { ProyectosComponent } from './components/ingeniero/proyectos.component';
import { TareasComponent } from './components/ingeniero/tareas.component';
import { HerramientasComponent } from './components/ingeniero/herramientas.component';

// Usuario Components
import { UsuarioDashboardComponent } from './components/usuario/dashboard.component';
import { UsuarioSolicitudesComponent } from './components/usuario/solicitudes.component';
import { UsuarioPerfilComponent } from './components/usuario/perfil.component';
import { UsuarioSoporteComponent } from './components/usuario/soporte.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/dashboard',
    pathMatch: 'full'
  },
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
  },
  // INGENIERO ROUTES
  {
    path: 'ingeniero',
    children: [
      { path: 'dashboard', component: IngenieroDashboardComponent },
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'tareas', component: TareasComponent },
      { path: 'herramientas', component: HerramientasComponent }
    ]
  },
  // USUARIO ROUTES
  {
    path: 'usuario',
    children: [
      { path: 'dashboard', component: UsuarioDashboardComponent },
      { path: 'solicitudes', component: UsuarioSolicitudesComponent },
      { path: 'perfil', component: UsuarioPerfilComponent },
      { path: 'soporte', component: UsuarioSoporteComponent }
    ]
  },
  // Wildcard route
  {
    path: '**',
    redirectTo: '/admin/dashboard'
  }
];
