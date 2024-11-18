import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { ComidaService } from '../../../../core/services/comida.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-comida-edit',
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
    ReactiveFormsModule, 
  ],
  templateUrl: './comida-edit.component.html',
  styleUrl: './comida-edit.component.css'
})
export class ComidaEditComponent {
  comidaForm: FormGroup;
  planAlimenticioId!: number;

  private fb = inject(FormBuilder);
  private comidaService = inject(ComidaService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private route = inject(ActivatedRoute);

  constructor() {
    // Inicializar el formulario
    this.comidaForm = this.fb.group({
      nombreComida: ['', Validators.required],
      calorias: ['', [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required],
      planAlimenticioId: [this.planAlimenticioId, Validators.required],
    });
  }

  controlHasError(controlName: string, errorName: string): boolean {
    return this.comidaForm.controls[controlName].hasError(errorName);
  }

  ngOnInit(): void {
    this.loadComida();
  }

  loadComida(): void {

    const userId = this.authService.getNutricionistaId();

    const planId = this.route.snapshot.paramMap.get('planId');
    const comidaId = this.route.snapshot.paramMap.get('comidaId');

    if (userId) {
      this.comidaService.getComidaById(Number(planId), Number(comidaId)).subscribe({
        next: (comida) => {
          this.comidaForm.patchValue(comida);
        },
        error: (error) => {
          this.showSnackBar('Error al cargar la comida');
        },
      })
    } else {
      this.showSnackBar('Usuario no autenticado.');
      this.router.navigate(['/auth/login']);
    }
  }

  onSubmit(): void {

    if (this.comidaForm.valid) {
      const comidaData = this.comidaForm.value;
      const planId = this.route.snapshot.paramMap.get('planId');
      const comidaId = this.route.snapshot.paramMap.get('comidaId');

      this.comidaService.editComida(Number(planId), Number(comidaId), comidaData).subscribe({
        next: () => {
          this.showSnackBar('Comida actualizada correctamente');
          this.router.navigate(['/nutricionista/comida/list']);
        },
        error: (error) => {
          console.error('Error al actualizar la comida:', error);
          this.showSnackBar('Error al actualizar la comida');
        },
      });
    } else {
      this.showSnackBar('Por favor, completa correctamente todos los campos.');
    }
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}
