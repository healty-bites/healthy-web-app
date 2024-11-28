import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { MetaService } from '../../../../core/services/meta.service';
import { MetaResponseModel } from '../../../../shared/models/meta-response.model';
import { UserProfile } from '../../../../shared/models/user-profile.model';
import { UserProfileService } from '../../../../core/services/user-profile.service';
import { SeguimientoResponse } from '../../../../shared/models/seguimiento-response.model';
import { SeguimientoService } from '../../../../core/services/seguimiento.service';
import { FormatTimePipe } from '../../../../core/pipes/format-time.pipe';
import { GraficoPesoComponent } from "../grafico-peso/grafico-peso.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PageableResponse } from '../../../../shared/models/pageable-response.model';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-meta-list',
  standalone: true,
  imports: [
    CommonModule,
    GraficoPesoComponent,
    MatTableModule,
    MatFormFieldModule,
    FormatTimePipe,
    MatPaginatorModule,
    NgApexchartsModule
],
  templateUrl: './meta-list.component.html',
  styleUrl: './meta-list.component.css'
})
export class MetaListComponent implements OnInit {

  cliente!: UserProfile;

  meta: MetaResponseModel[] = [];
  filteredMeta: MetaResponseModel[] = [];

  seguimiento: SeguimientoResponse[] = [];
  filteredSeguimiento: SeguimientoResponse[] = [];

  puedeCrearMeta: boolean = true; // Inicialmente se puede crear una meta
  
  totalElements = 0;
  pageSize = 5;
  pageIndex = 0;

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  private userProfileService = inject(UserProfileService);
  private metaService = inject(MetaService);
  private seguimientoService = inject(SeguimientoService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Peso Diario",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      title: {
        text: "Visualizacion de progreso"
      },
      xaxis: {
        categories: []
      },
    };
  }

  displayedColumns: string[] = [
    'id',
    'observaciones',
    'pesoDelDia',
    'fecha',
    'acciones'
  ]

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
          
          // Cargar seguimientos para la primera meta
          if (this.filteredMeta.length > 0) {
            this.loadSeguimiento(this.filteredMeta[1].id, clienteId);
          }
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

  loadSeguimiento(metaId: number, clienteId: number, pageIndex: number = 0, pageSize: number = 5): void {
    this.seguimientoService.paginateSeguimientosByClienteId(metaId, clienteId, pageIndex, pageSize).subscribe({
      next: (response: PageableResponse<SeguimientoResponse>) => {
        // Filtra los seguimientos para incluir solo los que pertenecen a la meta actual
        this.seguimiento = response.content;
        this.filteredSeguimiento = response.content;
        this.totalElements = response.totalElements;
        this.pageSize = response.size;
        this.pageIndex = response.number;
  
        this.chartOptions.series = [
          {
            name: "Peso Diario",
            data: this.seguimiento.map((seguimiento) => seguimiento.pesoDelDia)
          }
        ];
        this.chartOptions.xaxis = {
          categories: this.seguimiento.map((seguimiento) => seguimiento.fecha)
        }
      },
      error: (error) => {
        this.showSnackBar('Error al cargar los seguimientos');
      }
    });
  }

  crearMeta(): void {
    this.router.navigate(['/cliente/meta/create']);
  }

  actualizarMeta(metaId: number): void {
    this.router.navigate([`/cliente/meta/update/${metaId}`]);
  }

  crearSeguimiento(metaId: number): void {
    this.router.navigate([`/cliente/meta/${metaId}/seguimiento/create`]);
  }

  editarSeguimiento(metaId: number, seguimientoId: number): void {
    this.router.navigate([`/cliente/meta/${metaId}/seguimiento/update/${seguimientoId}`]);
  }

  eliminarSeguimiento(seguimientoId: number, metaId: number): void {
    this.seguimientoService.eliminarSeguimiento(metaId, seguimientoId).subscribe({
      next: () => {
        this.loadSeguimiento(metaId, this.cliente.id);
        this.showSnackBar('Seguimiento eliminado con éxito');
      },
      error: (error) => {
        this.showSnackBar('Error al eliminar el seguimiento');
      }
    });
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

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    const metaId = this.filteredMeta.length > 0 ? this.filteredMeta[0].id : 0;
    this.loadSeguimiento(metaId, this.cliente.id, this.pageIndex, this.pageSize);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}