import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.scss'
})
export class TareasComponent {
  tareas = [
    {
      id: 1,
      titulo: 'Desarrollar módulo de autenticación',
      proyecto: 'Sistema de Gestión',
      estado: 'En Progreso',
      prioridad: 'Alta',
      fechaVencimiento: '2024-03-15',
      asignado: 'Juan'
    },
    {
      id: 2,
      titulo: 'Revisar código del API',
      proyecto: 'App Móvil EZ',
      estado: 'Pendiente',
      prioridad: 'Media',
      fechaVencimiento: '2024-03-10',
      asignado: 'Pedro'
    },
    {
      id: 3,
      titulo: 'Testing de componentes UI',
      proyecto: 'Sistema de Gestión',
      estado: 'Completado',
      prioridad: 'Media',
      fechaVencimiento: '2024-03-05',
      asignado: 'María'
    }
  ];

  filtroEstado = 'Todos';
  estados = ['Todos', 'Pendiente', 'En Progreso', 'Completado'];

  constructor() {}

  get tareasFiltered() {
    if (this.filtroEstado === 'Todos') {
      return this.tareas;
    }
    return this.tareas.filter(t => t.estado === this.filtroEstado);
  }

  filtrar(estado: string) {
    this.filtroEstado = estado;
  }

  actualizarEstado(id: number, nuevoEstado: string) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.estado = nuevoEstado;
    }
  }
}

