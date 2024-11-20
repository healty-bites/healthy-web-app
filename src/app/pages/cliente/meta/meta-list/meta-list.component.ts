import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { MetaService } from '../../../../core/services/meta.service';
import { MetaResponseModel } from '../../../../shared/models/meta-response.model';
import { UserProfile } from '../../../../shared/models/user-profile.model';
import { UserProfileService } from '../../../../core/services/user-profile.service';

@Component({
  selector: 'app-meta-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './meta-list.component.html',
  styleUrl: './meta-list.component.css'
})
export class MetaListComponent {

  cliente!: UserProfile;
  meta: MetaResponseModel[] = [];
  filteredMeta: MetaResponseModel[] = [];
  puedeCrearMeta: boolean = true; // Inicialmente se puede crear una meta

  private userProfileService = inject(UserProfileService);
  private metaService = inject(MetaService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.loadMeta();
  }

  loadMeta(): void {
    const clienteId = this.authService.getClienteId();

    if (clienteId) {
      this.userProfileService.getUserProfile(clienteId).subscribe({
        next: (cliente) => {
          this.cliente = cliente;
        }
      })

      this.metaService.getMetasByClienteId(clienteId).subscribe({
        next: (metas) => {
          this.meta = metas;
          this.filteredMeta = metas;
          
          // Deshabilita el botón si ya hay metas
          this.puedeCrearMeta = this.filteredMeta.length === 0;
          
          console.log(metas);
        },
        error: (error) => {
          this.showSnackBar('Error al cargar las metas');
        }
      });
    } else {
      this.showSnackBar('Usuario no autenticado');
      this.router.navigate(['/auth/login']);
    }
  }

  crearMeta(): void {
    this.router.navigate(['/cliente/meta/create']);
  }

  actualizarMeta(metaId: number): void {
    this.router.navigate([`/cliente/meta/update/${metaId}`]);
  }

  eliminarMeta(metaId: number, clienteId: number): void {
    this.metaService.eliminarMeta(metaId, clienteId).subscribe({
      next: () => {
        this.loadMeta();
        this.showSnackBar('Meta eliminada con éxito');

        // Permite crear meta nuevamente si no hay metas después de eliminar
        this.puedeCrearMeta = this.filteredMeta.length === 0;
      },
      error: (error) => {
        this.showSnackBar('Error al eliminar la meta');
      }
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}
