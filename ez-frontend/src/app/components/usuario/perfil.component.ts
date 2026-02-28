import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class UsuarioPerfilComponent {
  edicionMode = false;

  perfil = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    telefono: '+34 612 345 678',
    empresa: 'EZ Solutions',
    puesto: 'Analista',
    departamento: 'Soporte',
    fechaRegistro: '2023-01-15'
  };

  perfilEdit = { ...this.perfil };

  constructor() {}

  activarEdicion() {
    this.edicionMode = true;
    this.perfilEdit = { ...this.perfil };
  }

  cancelarEdicion() {
    this.edicionMode = false;
  }

  guardarCambios() {
    this.perfil = { ...this.perfilEdit };
    this.edicionMode = false;
    console.log('Perfil actualizado:', this.perfil);
  }
}

