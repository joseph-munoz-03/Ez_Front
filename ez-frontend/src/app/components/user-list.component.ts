import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

/**
 * Componente de ejemplo: Lista de usuarios
 *
 * Este componente demuestra cómo:
 * 1. Inyectar ApiService
 * 2. Hacer llamadas GET al backend
 * 3. Manejar estados de carga, datos y errores
 * 4. Mostrar los datos en el template
 *
 * Uso en app.routes.ts:
 * {
 *   path: 'usuarios',
 *   component: UserListComponent
 * }
 */
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Lista de Usuarios</h1>

      <div class="controls">
        <button (click)="cargarUsuarios()" [disabled]="cargando">
          {{ cargando ? 'Cargando...' : 'Cargar Usuarios' }}
        </button>
      </div>

      <!-- Estado de carga -->
      <div *ngIf="cargando" class="loading">
        <p>Cargando usuarios...</p>
      </div>

      <!-- Mensaje de error -->
      <div *ngIf="error" class="error">
        <p>Error al cargar usuarios: {{ error }}</p>
      </div>

      <!-- Lista de usuarios -->
      <div *ngIf="!cargando && !error && usuarios.length > 0" class="user-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let usuario of usuarios">
              <td>{{ usuario.id }}</td>
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sin datos -->
      <div *ngIf="!cargando && !error && usuarios.length === 0" class="no-data">
        <p>No hay usuarios disponibles. Haz clic en "Cargar Usuarios" para obtenerlos.</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1000px;
      margin: 20px auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    h1 {
      color: #333;
      text-align: center;
    }

    .controls {
      margin: 20px 0;
      text-align: center;
    }

    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    button:hover:not(:disabled) {
      background-color: #0056b3;
    }

    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    .loading, .error, .no-data {
      text-align: center;
      padding: 20px;
      border-radius: 4px;
      margin: 20px 0;
      font-size: 16px;
    }

    .loading {
      background-color: #e7f3ff;
      color: #0066cc;
    }

    .error {
      background-color: #ffe7e7;
      color: #cc0000;
    }

    .no-data {
      background-color: #f0f0f0;
      color: #666;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    table, th, td {
      border: 1px solid #ddd;
    }

    th {
      background-color: #007bff;
      color: white;
      padding: 12px;
      text-align: left;
    }

    td {
      padding: 10px;
    }

    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tbody tr:hover {
      background-color: #f0f0f0;
    }
  `]
})
export class UserListComponent implements OnInit {
  usuarios: any[] = [];
  cargando = false;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Optionally: cargar usuarios automáticamente al inicializar
    // this.cargarUsuarios();
  }

  /**
   * Carga la lista de usuarios del backend
   *
   * Llamada a: GET /api/usuarios
   * Esperado: Array de objetos con: { id, nombre, email, ... }
   */
  cargarUsuarios(): void {
    this.cargando = true;
    this.error = null;

    this.apiService.get<any[]>('/usuarios').subscribe({
      next: (data) => {
        this.usuarios = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = err.message || 'Error desconocido';
        this.cargando = false;
        console.error('Error cargando usuarios:', err);
      }
    });
  }
}

