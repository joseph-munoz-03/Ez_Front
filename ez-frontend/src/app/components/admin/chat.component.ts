import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class AdminChatComponent implements OnInit {
  conversaciones = [
    { id: 1, usuario: 'Juan Pérez', ultimoMensaje: '¿Cuál es el estado del contrato?', fecha: '2024-02-24 14:30', noLeidos: 2, estado: 'en-línea' },
    { id: 2, usuario: 'María García', ultimoMensaje: 'Gracias por la información', fecha: '2024-02-24 13:15', noLeidos: 0, estado: 'en-línea' },
    { id: 3, usuario: 'Carlos López', ultimoMensaje: 'Necesito una cita para mañana', fecha: '2024-02-23 16:45', noLeidos: 5, estado: 'fuera-línea' },
    { id: 4, usuario: 'Ana Martínez', ultimoMensaje: '¿Puedes revisar el documento?', fecha: '2024-02-23 10:00', noLeidos: 0, estado: 'fuera-línea' },
  ];

  mensajes = [
    { id: 1, remitente: 'Juan Pérez', contenido: '¿Cuál es el estado del contrato?', hora: '14:30', tipo: 'recibido' },
    { id: 2, remitente: 'Sistema', contenido: 'El contrato está en revisión', hora: '14:35', tipo: 'enviado' },
    { id: 3, remitente: 'Juan Pérez', contenido: '¿Cuándo estará listo?', hora: '14:40', tipo: 'recibido' },
  ];

  conversacionSeleccionada: any = null;
  nuevoMensaje = '';

  constructor() {}

  ngOnInit() {
    console.log('Componente Chat cargado');
  }

  seleccionarConversacion(conversacion: any) {
    this.conversacionSeleccionada = conversacion;
    conversacion.noLeidos = 0;
  }

  enviarMensaje() {
    if (this.nuevoMensaje.trim()) {
      this.mensajes.push({
        id: this.mensajes.length + 1,
        remitente: 'Sistema',
        contenido: this.nuevoMensaje,
        hora: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
        tipo: 'enviado'
      });
      this.nuevoMensaje = '';
    }
  }
}

