import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent {
  proyectos = [
    {
      id: 1,
      nombre: 'Sistema de Gestión',
      descripcion: 'Desarrollo de plataforma completa',
      estado: 'En Progreso',
      progreso: 65,
      fechaInicio: '2024-01-15',
      fechaFin: '2024-06-30',
      equipo: ['Juan', 'María']
    },
    {
      id: 2,
      nombre: 'App Móvil EZ',
      descripcion: 'Aplicación móvil para clientes',
      estado: 'En Progreso',
      progreso: 40,
      fechaInicio: '2024-02-01',
      fechaFin: '2024-07-31',
      equipo: ['Pedro', 'Ana']
    }
  ];

  constructor() {}
}

