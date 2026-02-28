import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-contratos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class AdminContratosComponent implements OnInit {
  contratos = [
    { id: 1, numero: 'CNT-2024-001', cliente: 'Empresa A', monto: 50000, estado: 'activo', fechaInicio: '2024-01-01', fechaFin: '2024-12-31' },
    { id: 2, numero: 'CNT-2024-002', cliente: 'Empresa B', monto: 75000, estado: 'activo', fechaInicio: '2024-02-01', fechaFin: '2025-01-31' },
    { id: 3, numero: 'CNT-2024-003', cliente: 'Empresa C', monto: 30000, estado: 'pendiente', fechaInicio: '2024-03-01', fechaFin: '2024-08-31' },
    { id: 4, numero: 'CNT-2023-004', cliente: 'Empresa D', monto: 100000, estado: 'completado', fechaInicio: '2023-01-01', fechaFin: '2023-12-31' },
  ];

  filtroEstado = '';
  searchTerm = '';
  estados = ['activo', 'pendiente', 'completado', 'cancelado'];

  constructor() {}

  ngOnInit() {
    console.log('Componente Contratos cargado');
  }

  get contratosFiltrados() {
    return this.contratos.filter(c => {
      const matchEstado = !this.filtroEstado || c.estado === this.filtroEstado;
      const matchSearch = !this.searchTerm ||
        c.numero.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        c.cliente.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchEstado && matchSearch;
    });
  }

  editarContrato(contrato: any) {
    console.log('Editar contrato:', contrato);
  }

  eliminarContrato(id: number) {
    this.contratos = this.contratos.filter(c => c.id !== id);
  }

  crearContrato() {
    console.log('Crear nuevo contrato');
  }

  descargarPDF(id: number) {
    console.log('Descargar PDF del contrato:', id);
  }
}

