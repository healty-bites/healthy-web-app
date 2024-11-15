import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-nutricionista-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './nutricionista-layout.component.html',
  styleUrl: './nutricionista-layout.component.css'
})
export class NutricionistaLayoutComponent {
  private authService = inject(AuthService);
  isAuthenticated: boolean = false;

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
