import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario-soporte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './soporte.component.html',
  styleUrl: './soporte.component.scss'
})
export class UsuarioSoporteComponent {
  formularioSoporte = {
    asunto: '',
    categoria: 'Soporte Técnico',
    descripcion: '',
    archivo: null as File | null
  };

  categorias = [
    'Soporte Técnico',
    'Consulta General',
    'Cambio de Datos',
    'Reportar Error',
    'Sugerencia'
  ];

  preguntas_frecuentes = [
    {
      pregunta: '¿Cómo resetear mi contraseña?',
      respuesta: 'Puedes resetear tu contraseña desde la página de login haciendo clic en "¿Olvidaste tu contraseña?"'
    },
    {
      pregunta: '¿Qué navegadores son compatibles?',
      respuesta: 'EZ soporta Chrome, Firefox, Safari y Edge en sus versiones más recientes.'
    },
    {
      pregunta: '¿Cuánto tiempo tarda una respuesta?',
      respuesta: 'Normalmente respondemos dentro de 24 horas en días hábiles.'
    },
    {
      pregunta: '¿Cómo reporto un error?',
      respuesta: 'Usa la opción "Reportar Error" en el formulario de soporte adjuntando detalles y capturas.'
    }
  ];

  constructor() {}

  enviarSolicitud() {
    if (this.formularioSoporte.asunto && this.formularioSoporte.descripcion) {
      console.log('Solicitud enviada:', this.formularioSoporte);
      alert('Solicitud enviada correctamente. Te contactaremos pronto.');
      this.resetearFormulario();
    }
  }

  resetearFormulario() {
    this.formularioSoporte = {
      asunto: '',
      categoria: 'Soporte Técnico',
      descripcion: '',
      archivo: null
    };
  }

  manejarArchivo(event: any) {
    this.formularioSoporte.archivo = event.target.files[0];
  }
}

