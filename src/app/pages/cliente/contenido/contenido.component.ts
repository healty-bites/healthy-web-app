import { Component, inject } from '@angular/core';
import { ContenidoResponse } from '../../../shared/models/contenido-response.model';
import { PlanAlimenticioResponse } from '../../../shared/models/plan-alimenticio-response.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContenidoService } from '../../../core/services/contenido.service';
import { PlanAlimenticioService } from '../../../core/services/plan-alimenticio.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ApiImgPipe } from '../../../core/pipes/api-img.pipe';
import { FormatPlanObjetivoPipe } from '../../../core/pipes/format-plan-objetivo.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    ApiImgPipe,
    FormatPlanObjetivoPipe
  ],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {
  contenido: ContenidoResponse[] = [];
  filteredContenido: ContenidoResponse[] = [];
  uniqueTiposContenido: string[] = [];
  uniqueCategoriasContenido: string[] = [];
  selectedTipoContenido: string | null = null;
  selectedCategoriaContenido: string | null = null;

  planAlimenticio: PlanAlimenticioResponse[] = [];
  filteredPlanAlimenticio: PlanAlimenticioResponse[] = [];
  uniquePlanObjetivos: string[] = [];
  selectedPlanObjetivo: string | null = null;

  private contenidoService = inject(ContenidoService);
  private planAlimenticioService = inject(PlanAlimenticioService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  ngOnInit(): void {
    this.loadContenido();
    this.loadPlanAlimenticio();
  }

  loadContenido() {
    this.contenidoService.getAllContenidos().subscribe({
      next: (contenido) => {
        this.contenido = contenido;
        this.filteredContenido = contenido;
        this.uniqueTiposContenido = [...new Set(contenido.map(item => item.tipoContenido))];
        this.uniqueCategoriasContenido = [...new Set(contenido.map(item => item.categoriaContenido))];
        console.log(contenido);
      },
      error: (error) => {
        this.snackBar.open('Error al cargar los contenidos', 'Cerrar');
        console.error(error);
      }
    })
  }

  loadPlanAlimenticio() {
    this.planAlimenticioService.getAllPlanAlimenticio().subscribe({
      next: (planAlimenticio) => {
        this.planAlimenticio = planAlimenticio;
        this.filteredPlanAlimenticio = planAlimenticio;
        this.uniquePlanObjetivos = [...new Set(planAlimenticio.map(plan => plan.planObjetivo))];
        console.log(planAlimenticio);
      },
      error: (error) => {
        this.snackBar.open('Error al cargar los planes alimenticios', 'Cerrar');
        console.error(error);
      }
    })
  }

  filterContenido() {
    this.filteredContenido = this.contenido.filter(item => {
      return (!this.selectedTipoContenido || item.tipoContenido === this.selectedTipoContenido) &&
        (!this.selectedCategoriaContenido || item.categoriaContenido === this.selectedCategoriaContenido);
    });
  }

  filterPlanAlimenticio() {
    this.filteredPlanAlimenticio = this.planAlimenticio.filter(plan => {
      return !this.selectedPlanObjetivo || plan.planObjetivo === this.selectedPlanObjetivo;
    });
  }

  verDetalles(item: ContenidoResponse) {
    if (item.esGratis) {
      this.router.navigate(['cliente/contenido', 'contenido', item.id]);
    } else {
      this.snackBar.open('Este contenido no es gratuito', 'Cerrar');
    }
  }

  verPlanDetalles(plan: PlanAlimenticioResponse) {
    this.router.navigate(['cliente/contenido', 'plan', plan.id]);
  }
}