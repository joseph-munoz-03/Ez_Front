import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-correos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './correos.component.html',
  styleUrls: ['./correos.component.scss']
})
export class AdminCorreosComponent implements OnInit {
  correos = [
    { id: 1, destinatario: 'admin@empresa.com', asunto: 'Bienvenida Sistema', fechaEnvio: '2024-02-24 14:30', estado: 'enviado', tipo: 'Sistema' },
    { id: 2, destinatario: 'usuario@empresa.com', asunto: 'Contrato Aprobado', fechaEnvio: '2024-02-24 13:15', estado: 'enviado', tipo: 'Notificación' },
    { id: 3, destinatario: 'gerente@empresa.com', asunto: 'Reporte Mensual', fechaEnvio: '2024-02-23 10:00', estado: 'enviado', tipo: 'Reporte' },
    { id: 4, destinatario: 'cliente@empresa.com', asunto: 'Confirmación de Solicitud', fechaEnvio: null, estado: 'pendiente', tipo: 'Notificación' },
  ];

  plantillas = ['Bienvenida', 'Confirmación', 'Rechazo', 'Reporte', 'Personalizado'];
  filtroEstado = '';
  searchTerm = '';

  constructor() {}

  ngOnInit() {
    console.log('Componente Correos cargado');
  }

  get correosFiltrados() {
    return this.correos.filter(c => {
      const matchEstado = !this.filtroEstado || c.estado === this.filtroEstado;
      const matchSearch = !this.searchTerm ||
        c.destinatario.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        c.asunto.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchEstado && matchSearch;
    });
  }

  enviarCorreo() {
    console.log('Enviar nuevo correo');
  }

  reenviarCorreo(id: number) {
    const correo = this.correos.find(c => c.id === id);
    if (correo) {
      console.log('Reenviar correo:', correo);
    }
  }

  eliminarCorreo(id: number) {
    this.correos = this.correos.filter(c => c.id !== id);
  }
}

