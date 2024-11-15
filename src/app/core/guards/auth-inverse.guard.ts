import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authInverseGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verifica si el usuario esta autenticado
  if(authService.isAuthenticated()) {
    const userRole = authService.getUserRole();

    // Redirige segun el rol del usuario
    if(userRole === 'CLIENTE') {
      router.navigate(['/cliente']);
    } else if (userRole === 'NUTRICIONISTA') {
      router.navigate(['/nutricionista']);
    }

    // Bloquea el acceso a la ruta de autenticacion
    return false;
  }

  // Permite el acceso a la ruta de autenticacion
  return true;
};
