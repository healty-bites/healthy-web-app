import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { authInverseGuard } from './core/guards/auth-inverse.guard';

export const routes: Routes = [

    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},

    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(a => a.authRoutes),
        canActivate: [authInverseGuard]
    },
    {
        path: 'cliente',
        loadChildren: () => import('./pages/cliente/cliente.routes').then(c => c.clienteRoutes),
        canActivate: [authGuard]
    },
    {
        path: 'nutricionista',
        loadChildren: () => import('./pages/nutricionista/nutricionista.routes').then(n => n.nutricionistaRoutes),
        canActivate: [authGuard]
    }
];
