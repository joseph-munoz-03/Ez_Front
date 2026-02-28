import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingeniero-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class IngenieroDashboardComponent implements OnInit {
  proyectos = [
    { id: 1, nombre: 'Portal Web', estado: 'en-progreso', avance: 75, fechaEntrega: '2024-03-15' },
    { id: 2, nombre: 'Aplicación Móvil', estado: 'en-progreso', avance: 50, fechaEntrega: '2024-04-01' },
    { id: 3, nombre: 'Sistema Reportes', estado: 'completado', avance: 100, fechaEntrega: '2024-02-20' },
  ];

  tareasPendientes = [
    { id: 1, titulo: 'Implementar autenticación', proyecto: 'Portal Web', prioridad: 'alta', vencimiento: '2024-02-28' },
    { id: 2, titulo: 'Diseño de interfaz', proyecto: 'Aplicación Móvil', prioridad: 'media', vencimiento: '2024-03-05' },
    { id: 3, titulo: 'Tests unitarios', proyecto: 'Portal Web', prioridad: 'media', vencimiento: '2024-03-10' },
  ];

  estadisticas = {
    proyectosActivos: 2,
    tareasCompletadas: 24,
    taskasEnProgreso: 5,
    horas: 180
  };

  constructor() {}

  ngOnInit() {
    console.log('Dashboard Ingeniero cargado');
  }
}

