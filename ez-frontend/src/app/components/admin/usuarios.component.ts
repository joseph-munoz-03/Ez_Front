import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class AdminUsuariosComponent implements OnInit {
  usuarios = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', rol: 'Ingeniero', estado: 'activo', fechaRegistro: '2024-01-15' },
    { id: 2, nombre: 'María García', email: 'maria@example.com', rol: 'Usuario', estado: 'activo', fechaRegistro: '2024-01-20' },
    { id: 3, nombre: 'Carlos López', email: 'carlos@example.com', rol: 'Admin', estado: 'activo', fechaRegistro: '2024-01-10' },
    { id: 4, nombre: 'Ana Martínez', email: 'ana@example.com', rol: 'Ingeniero', estado: 'inactivo', fechaRegistro: '2023-12-20' },
  ];

  filtroRol = '';
  filtroEstado = '';
  searchTerm = '';

  roles = ['Admin', 'Ingeniero', 'Usuario'];
  estados = ['activo', 'inactivo'];

  constructor() {}

  ngOnInit() {
    console.log('Componente Usuarios cargado');
  }

  get usuariosFiltrados() {
    return this.usuarios.filter(u => {
      const matchRol = !this.filtroRol || u.rol === this.filtroRol;
      const matchEstado = !this.filtroEstado || u.estado === this.filtroEstado;
      const matchSearch = !this.searchTerm ||
        u.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchRol && matchEstado && matchSearch;
    });
  }

  editarUsuario(usuario: any) {
    console.log('Editar usuario:', usuario);
  }

  eliminarUsuario(id: number) {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }

  crearUsuario() {
    console.log('Crear nuevo usuario');
  }
}

