import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { PlanObjetivo } from '../../../../shared/models/plan-alimenticio-create-update-request.model';
import { MatOptionModule } from '@angular/material/core';
import { PlanAlimenticioService } from '../../../../core/services/plan-alimenticio.service';
import { FormatPlanObjetivoPipe } from '../../../../core/pipes/format-plan-objetivo.pipe';
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-plan-alimenticio-form-create',
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
  templateUrl: './plan-alimenticio-form-create.component.html',
  styleUrl: './plan-alimenticio-form-create.component.css'
})
export class PlanAlimenticioFormCreateComponent {
  planAlimenticioForm: FormGroup;
  objetivos = Object.values(PlanObjetivo);


  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private authService = inject(AuthService);
  private planAlimenticioService = inject(PlanAlimenticioService);

  constructor() {
    this.planAlimenticioForm = this.fb.group({
      planObjetivo: [''],
      descripcion: [''],
      duracionDias: [''],
      esGratis: [null],
      nutricionistaId: [this.authService.getNutricionistaId()]
    })
  }

  controlHasError(controlName: string, errorName: string): boolean {
    return this.planAlimenticioForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (this.planAlimenticioForm.valid) {
      const planAlimenticioData = this.planAlimenticioForm.value;

      this.planAlimenticioService.createPlanAlimenticio(planAlimenticioData).subscribe({
        next: () => {
          this.showSnackBar('Plan alimenticio creado correctamente');
          this.router.navigate(['/nutricionista/plan-alimenticio/list']);
        },
        error: () => {
          this.showSnackBar('Error al crear el plan alimenticio');
        }
      });
    }
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 2000
    });
  }
}
