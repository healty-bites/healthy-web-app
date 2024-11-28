import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ContenidoService } from '../../../../core/services/contenido.service';
import { PlanAlimenticioService } from '../../../../core/services/plan-alimenticio.service';
import { ComidaService } from '../../../../core/services/comida.service';
import { ContenidoResponse } from '../../../../shared/models/contenido-response.model';
import { PlanAlimenticioResponse } from '../../../../shared/models/plan-alimenticio-response.model';
import { ComidaResponse } from '../../../../shared/models/comida-response.model';
import { ApiImgPipe } from '../../../../core/pipes/api-img.pipe';
import { FormatPlanObjetivoPipe } from '../../../../core/pipes/format-plan-objetivo.pipe';

@Component({
  selector: 'app-contenido-detalle',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, ApiImgPipe, FormatPlanObjetivoPipe],
  templateUrl: './contenido-detalle.component.html',
  styleUrls: ['./contenido-detalle.component.css']
})
export class ContenidoDetalleComponent {
  contenido: ContenidoResponse | undefined;
  planAlimenticio: PlanAlimenticioResponse | undefined;
  comidas: ComidaResponse[] = [];
  displayedColumns: string[] = ['Orden', 'nombreComida', 'categoria', 'calorias'];
  private route = inject(ActivatedRoute);
  private contenidoService = inject(ContenidoService);
  private planAlimenticioService = inject(PlanAlimenticioService);
  private comidaService = inject(ComidaService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const type = this.route.snapshot.paramMap.get('type');
    if (id && type) {
      if (type === 'contenido') {
        this.contenidoService.getContentById(+id).subscribe({
          next: (contenido) => {
            this.contenido = contenido;
          },
          error: (error) => {
            console.error('Error al cargar el contenido', error);
          }
        });
      } else if (type === 'plan') {
        this.planAlimenticioService.getPlanById(+id).subscribe({
          next: (planAlimenticio) => {
            this.planAlimenticio = planAlimenticio;
            this.loadComidas(planAlimenticio.id);
          },
          error: (error) => {
            console.error('Error al cargar el plan alimenticio', error);
          }
        });
      }
    }
  }

  loadComidas(planId: number): void {
    this.comidaService.getAllByPlanId(planId).subscribe({
      next: (comidas) => {
        this.comidas = comidas;
      },
      error: (error) => {
        console.error('Error al cargar las comidas', error);
      }
    });
  }
}