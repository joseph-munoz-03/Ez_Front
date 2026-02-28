import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.scss'
})
export class HerramientasComponent {
  herramientas = [
    {
      id: 1,
      nombre: 'Git Repository',
      descripcion: 'Acceso al repositorio de código',
      icono: '📊',
      url: '#',
      disponible: true
    },
    {
      id: 2,
      nombre: 'Jira',
      descripcion: 'Gestión de proyectos y tareas',
      icono: '📋',
      url: '#',
      disponible: true
    },
    {
      id: 3,
      nombre: 'Slack',
      descripcion: 'Comunicación del equipo',
      icono: '💬',
      url: '#',
      disponible: true
    },
    {
      id: 4,
      nombre: 'Documentación',
      descripcion: 'Guías técnicas y referencias',
      icono: '📚',
      url: '#',
      disponible: true
    },
    {
      id: 5,
      nombre: 'API Docs',
      descripcion: 'Documentación de APIs internas',
      icono: '🔌',
      url: '#',
      disponible: true
    },
    {
      id: 6,
      nombre: 'Recursos',
      descripcion: 'Librerías y recursos técnicos',
      icono: '🛠️',
      url: '#',
      disponible: true
    }
  ];

  constructor() {}

  accederHerramienta(herramienta: any) {
    if (herramienta.disponible) {
      console.log('Accediendo a:', herramienta.nombre);
      // window.open(herramienta.url, '_blank');
    }
  }
}

