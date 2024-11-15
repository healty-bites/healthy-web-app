import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { ComidaService } from '../../../../core/services/comida.service';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-comida-anadir',
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule
  ],
  templateUrl: './comida-anadir.component.html',
  styleUrls: ['./comida-anadir.component.css'],
})
export class ComidaAnadirComponent {
  comidaForm!: FormGroup;
  planAlimenticioId!: number;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private comidaService = inject(ComidaService);
  private route = inject(ActivatedRoute);

  constructor() {
    // Obtener el ID del plan alimenticio de la URL
    const planId = this.route.snapshot.paramMap.get('planId');
    if (!planId) {
      this.showSnackBar('Error: no se encontró el ID del plan alimenticio en la URL.');
      this.router.navigate(['/nutricionista/plan-alimenticio/list']);
      return;
    }

    this.planAlimenticioId = Number(planId);

    // Inicializar el formulario
    this.comidaForm = this.fb.group({
      nombreComida: ['', Validators.required],
      calorias: ['', [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required],
      planAlimenticioId: [this.planAlimenticioId, Validators.required],
    });
  }

  controlHasError(controlName: string, errorName: string): boolean {
    return this.comidaForm.controls[controlName]?.hasError(errorName) ?? false;
  }

  onSubmit() {
    if (!this.planAlimenticioId) {
      this.showSnackBar('Error: no se encontró el ID del plan alimenticio.');
      return;
    }

    if (this.comidaForm.valid) {
      const comidaData = this.comidaForm.value;
      this.comidaService.createComida(this.planAlimenticioId, comidaData).subscribe({
        next: () => {
          this.showSnackBar('Comida añadida correctamente');
          this.router.navigate(['/nutricionista/plan-alimenticio/list']);
        },
        error: (error) => {
          console.error('Error al añadir la comida:', error);
          this.showSnackBar('Error al añadir la comida');
        },
      });
    } else {
      this.showSnackBar('Por favor, completa correctamente todos los campos.');
    }
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 2000 });
  }
}
