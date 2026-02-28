import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-solicitudes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.scss'
})
export class UsuarioSolicitudesComponent {
  solicitudes = [
    {
      id: 1,
      tipo: 'Soporte Técnico',
      estado: 'Abierta',
      fecha: '2024-02-20',
      asunto: 'Error en módulo de reportes',
      descripcion: 'El módulo de reportes genera error al intentar exportar PDF',
      prioridad: 'Alta'
    },
    {
      id: 2,
      tipo: 'Consulta',
      estado: 'En Revisión',
      fecha: '2024-02-15',
      asunto: 'Información sobre nuevas features',
      descripcion: 'Me gustaría conocer cuáles son las nuevas funcionalidades disponibles',
      prioridad: 'Media'
    },
    {
      id: 3,
      tipo: 'Cambio de Datos',
      estado: 'Completada',
      fecha: '2024-02-10',
      asunto: 'Actualización de teléfono',
      descripcion: 'He actualizado mi número de teléfono',
      prioridad: 'Baja'
    }
  ];

  filtroEstado = 'Todas';
  estados = ['Todas', 'Abierta', 'En Revisión', 'Completada'];

  get solicitudesFiltradas() {
    if (this.filtroEstado === 'Todas') {
      return this.solicitudes;
    }
    return this.solicitudes.filter(s => s.estado === this.filtroEstado);
  }

  filtrar(estado: string) {
    this.filtroEstado = estado;
  }

  abrirDetalle(solicitud: any) {
    console.log('Abriendo solicitud:', solicitud.id);
  }
}

