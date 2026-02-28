import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  statistics = {
    totalUsers: 1240,
    activeContracts: 45,
    pendingApprovals: 12,
    totalRevenue: 125000
  };

  chartData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    users: [120, 150, 180, 160, 200, 240],
    contracts: [30, 35, 42, 38, 45, 52]
  };

  recentActivity = [
    { id: 1, type: 'Usuario', action: 'Nuevo usuario registrado', user: 'Juan Pérez', date: '2024-02-24 14:30' },
    { id: 2, type: 'Contrato', action: 'Contrato aprobado', user: 'María García', date: '2024-02-24 13:15' },
    { id: 3, type: 'Correo', action: 'Correo enviado', user: 'Sistema', date: '2024-02-24 12:00' },
    { id: 4, type: 'Usuario', action: 'Rol actualizado', user: 'Carlos López', date: '2024-02-23 16:45' },
  ];

  constructor() {}

  ngOnInit() {
    // Aquí irán llamadas a la API para obtener datos reales
    console.log('Dashboard Admin cargado');
  }
}

