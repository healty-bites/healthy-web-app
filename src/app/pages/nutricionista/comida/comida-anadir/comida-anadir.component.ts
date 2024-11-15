import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { ComidaService } from '../../../../core/services/comida.service';
import { ComidaCreateUpdateRequest } from '../../../../shared/models/comida-create-update-request.model';

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
  styleUrls: ['./comida-anadir.component.css']
})
export class ComidaAnadirComponent {
  comidaForm: FormGroup;
  planAlimenticioId: number;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private comidaService = inject(ComidaService);
  private route = inject(ActivatedRoute);

  constructor() {
    this.comidaForm = this.fb.group({
      nombreComida: ['', Validators.required],
      calorias: ['', Validators.required, Validators.min(0)],
      categoria: ['', Validators.required],
      planAlimenticioId: [this.route.snapshot.paramMap.get('planId')]
    });

    // Obtener el ID del plan alimenticio de la URL
    this.planAlimenticioId = Number(this.route.snapshot.paramMap.get('planId'));
  }

  controlHasError(controlName: string, errorName: string): boolean {
    return this.comidaForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (this.comidaForm.valid) {
      const comidaData = this.comidaForm.value;
  
      this.comidaService.createComida(this.planAlimenticioId, comidaData).subscribe({
        next: () => {
          this.snackBar.open('Comida añadida correctamente');
          // Redirigir al detalle de la comida creada
          this.router.navigate(['/nutricionista/plan-alimenticio/list']);
        },
        error: () => {
          this.snackBar.open('Error al añadir la comida');
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
