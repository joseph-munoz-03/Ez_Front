import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userRole: string = '';
  userName: string = '';
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Obtener rol del usuario (puede venir de localStorage o servicio de autenticación)
    this.userRole = localStorage.getItem('userRole') || 'usuario';
    this.userName = localStorage.getItem('userName') || 'Usuario';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  navigateTo(route: string) {
    this.isMenuOpen = false;
    this.router.navigate([route]);
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}

