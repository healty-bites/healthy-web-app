import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { FormatPlanObjetivoPipe } from '../../../../core/pipes/format-plan-objetivo.pipe';
import { AuthService } from '../../../../core/services/auth.service';
import { PlanAlimenticioService } from '../../../../core/services/plan-alimenticio.service';
import { PlanAlimenticioResponse } from '../../../../shared/models/plan-alimenticio-response.model';

@Component({
  selector: 'app-plan-alimenticio-form-edit',
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatOptionModule,
    FormatPlanObjetivoPipe,
    MatRadioModule,
    MatSelectModule
  ],
  templateUrl: './plan-alimenticio-form-edit.component.html',
  styleUrl: './plan-alimenticio-form-edit.component.css'
})
export class PlanAlimenticioFormEditComponent {
  planAlimenticioForm: FormGroup;

  private fb = inject(FormBuilder);
  private planAlimenticioService = inject(PlanAlimenticioService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.planAlimenticioForm = this.fb.group({
      id: [null],
      planObjetivo: [''],
      descripcion: [''],
      duracionDias: [''],
      esGratis: [null],
      nutricionistaId: [this.authService.getNutricionistaId()]
    });
  }

  controlHasError(controlName: string, errorName: string): boolean {
    return this.planAlimenticioForm.controls[controlName].hasError(errorName);
  }

  ngOnInit(): void {
    this.loadPlanAlimenticio();
  }

  loadPlanAlimenticio(): void {
    const userId = this.authService.getNutricionistaId();
  
    if (userId) {
      this.planAlimenticioService.getPlanAlimenticio(userId).subscribe({
        next: (planAlimenticioArray) => {
          // Obtiene el primer plan si existe en el array.
          const planAlimenticio = planAlimenticioArray[0]; 
  
          if (planAlimenticio && planAlimenticio.id) {
            // Almacena todos los campos y el ID en el formulario
            this.planAlimenticioForm.patchValue({
              ...planAlimenticio,
              id: planAlimenticio.id
            });
          } else {
            this.showSnackBar('No se encontró un plan alimenticio');
          }
        },
        error: () => {
          this.showSnackBar('Error al cargar el plan alimenticio');
        }
      });
    } else {
      this.showSnackBar('Usuario no autenticado.');
      this.router.navigate(['/auth/login']);
    }
  }
  

  onSubmit(): void {
    if (this.planAlimenticioForm.valid) {
      // Obtener el ID del plan desde el formulario
      const planId = this.planAlimenticioForm.value.id;
      const updatedPlan = this.planAlimenticioForm.value;

      this.planAlimenticioService.updatePlanAlimenticio(planId, updatedPlan, this.authService.getNutricionistaId()).subscribe({
        next: () => {
          this.showSnackBar('Plan alimenticio actualizado correctamente');
          this.router.navigate(['/nutricionista/plan-alimenticio/list']);
        },
        error: () => {
          this.showSnackBar('Error al actualizar el plan alimenticio');
        },
      });
    }
  }
  

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}
