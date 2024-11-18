import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { PlanAlimenticioService } from '../../../../core/services/plan-alimenticio.service';
import { PlanAlimenticioResponse } from '../../../../shared/models/plan-alimenticio-response.model';

@Component({
  selector: 'app-plan-alimenticio-form-edit',
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
  ],
  templateUrl: './plan-alimenticio-form-edit.component.html',
  styleUrl: './plan-alimenticio-form-edit.component.css',
})
export class PlanAlimenticioFormEditComponent {
  planAlimenticioForm: FormGroup;

  // Inyección de servicios
  private fb = inject(FormBuilder);
  private planAlimenticioService = inject(PlanAlimenticioService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private route = inject(ActivatedRoute);

  constructor() {
    this.planAlimenticioForm = this.fb.group({
      id: [null],
      planObjetivo: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      duracionDias: ['', [Validators.required, Validators.min(1)]],
      esGratis: [null, Validators.required],
      nutricionistaId: [this.authService.getNutricionistaId()],
    });
  }

  controlHasError(controlName: string, errorName: string): boolean {
    return this.planAlimenticioForm.controls[controlName].hasError(errorName);
  }

  ngOnInit(): void {
    const planId = this.route.snapshot.paramMap.get('id'); // Obtener el ID de la ruta
  
    if (planId) {
      this.loadPlanAlimenticio(Number(planId)); // Carga el plan específico
    } else {
      this.showSnackBar('No se proporcionó un ID válido para el plan');
      this.router.navigate(['/nutricionista/plan-alimenticio/list']);
    }
  }
  
  /**
   * Carga los datos de un plan alimenticio específico desde el servicio.
   * @param planId Identificador del plan a cargar.
   */
  loadPlanAlimenticio(planId: number): void {
    const userId = this.authService.getNutricionistaId();

    this.planAlimenticioService.getPlanAlimenticioById(planId, userId).subscribe({
      next: (planAlimenticio) => {
        if (planAlimenticio) {
          this.planAlimenticioForm.patchValue(planAlimenticio); // Carga los datos al formulario
        } else {
          this.showSnackBar('No se encontró el plan alimenticio');
          this.router.navigate(['/nutricionista/plan-alimenticio/list']);
        }
      },
      error: () => {
        this.showSnackBar('Error al cargar el plan alimenticio');
      },
    });
  }

  /**
   * Método para enviar los datos del formulario y actualizar el plan alimenticio.
   */
  onSubmit(): void {
    if (this.planAlimenticioForm.valid) {
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
    } else {
      this.showSnackBar('Por favor, complete correctamente los campos.');
    }
  }

  /**
   * Método para mostrar mensajes al usuario usando `MatSnackBar`.
   * @param message Mensaje a mostrar.
   */
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}
