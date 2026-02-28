import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class UsuarioDashboardComponent {
  usuario = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    telefono: '+34 612 345 678',
    empresa: 'EZ Solutions',
    estado: 'Activo'
  };

  solicitudes = [
    {
      id: 1,
      tipo: 'Soporte Técnico',
      estado: 'Abierta',
      fecha: '2024-02-20',
      asunto: 'Error en módulo de reportes'
    },
    {
      id: 2,
      tipo: 'Consulta',
      estado: 'En Revisión',
      fecha: '2024-02-15',
      asunto: 'Información sobre nuevas features'
    },
    {
      id: 3,
      tipo: 'Cambio de Datos',
      estado: 'Completada',
      fecha: '2024-02-10',
      asunto: 'Actualización de teléfono'
    }
  ];

  constructor() {}
}

