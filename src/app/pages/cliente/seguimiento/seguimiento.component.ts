import { Component, inject } from '@angular/core';
import { HabitosListComponent } from "./habitos-list/habitos-list.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { HabitoService } from '../../../core/services/habito.service';
import { HabitoResponse } from '../../../shared/models/habito-response.model';

@Component({
  selector: 'app-seguimiento',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  templateUrl: './seguimiento.component.html',
  styleUrl: './seguimiento.component.css'
})
export class SeguimientoComponent {

  fechaActual: string = '';

  private formatearFecha(fecha: Date): string {
    const meses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = meses[fecha.getMonth()]; // Obtén el mes como texto
    const año = fecha.getFullYear();
    return `${dia} de ${mes} de ${año}`; // Formato: DD de MES de YYYY
  }

  habito: HabitoResponse[] = [];
  filteredHabito: HabitoResponse[] = [];

  private habitoService = inject(HabitoService);
  private authService = inject(AuthService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  ngOnInit(): void {
    const hoy = new Date();
    this.fechaActual = this.formatearFecha(hoy); // Formatear la fecha
    this.loadHabitos();
  }

  // Cargo los hábitos del cliente
  loadHabitos(): void {
    const clienteId = this.authService.getClienteId();
  
    this.habitoService.getAllHabitosByClienteId(clienteId).subscribe({
      next: (habito) => {
        this.habito = habito;
        // Filtra solo el último registro
        this.filteredHabito = habito.slice(-1); // Obtiene un array con el último elemento
        console.log(this.habito);
        console.log(this.filteredHabito);
      },
      error: (error) => {
        console.error(error);
        this.showSnackBar('Error al cargar los hábitos');
      }
    });
  }

  crearHabito(): void {
    this.router.navigate(['/cliente/seguimiento/habitos/create']);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}
