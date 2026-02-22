import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Servicio para comunicación con el backend Spring Boot
 *
 * Ejemplo de uso en componentes:
 *
 * constructor(private apiService: ApiService) {}
 *
 * ngOnInit() {
 *   this.apiService.get('/usuarios').subscribe(data => {
 *     console.log('Usuarios:', data);
 *   });
 * }
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Base URL del backend (sin /api porque el proxy lo añade)
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  /**
   * GET genérico
   * @param endpoint Ruta del endpoint (ej: '/usuarios', '/productos/1')
   * @returns Observable con los datos
   */
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${endpoint}`);
  }

  /**
   * POST genérico
   * @param endpoint Ruta del endpoint
   * @param data Cuerpo de la solicitud
   * @returns Observable con la respuesta
   */
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, data);
  }

  /**
   * PUT genérico
   * @param endpoint Ruta del endpoint
   * @param data Cuerpo de la solicitud
   * @returns Observable con la respuesta
   */
  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${endpoint}`, data);
  }

  /**
   * DELETE genérico
   * @param endpoint Ruta del endpoint
   * @returns Observable con la respuesta
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${endpoint}`);
  }

  // ========== EJEMPLOS ESPECÍFICOS ==========
  // Descomenta y adapta según tus endpoints reales

  /*
  // Ejemplo: obtener lista de usuarios
  getUsuarios(): Observable<any[]> {
    return this.get('/usuarios');
  }

  // Ejemplo: obtener un usuario por ID
  getUsuario(id: number): Observable<any> {
    return this.get(`/usuarios/${id}`);
  }

  // Ejemplo: crear un usuario
  crearUsuario(usuario: any): Observable<any> {
    return this.post('/usuarios', usuario);
  }

  // Ejemplo: actualizar un usuario
  actualizarUsuario(id: number, usuario: any): Observable<any> {
    return this.put(`/usuarios/${id}`, usuario);
  }

  // Ejemplo: eliminar un usuario
  eliminarUsuario(id: number): Observable<any> {
    return this.delete(`/usuarios/${id}`);
  }

  // Ejemplo: obtener productos
  getProductos(): Observable<any[]> {
    return this.get('/productos');
  }

  // Ejemplo: búsqueda con parámetros query
  buscarProductos(nombre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/productos`, {
      params: { q: nombre }
    });
  }
  */
}

