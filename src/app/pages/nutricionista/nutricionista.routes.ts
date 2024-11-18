import { Routes } from '@angular/router';
import { NutricionistaLayoutComponent } from './nutricionista-layout/nutricionista-layout.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { RecompensasComponent } from './recompensas/recompensas.component';
import { PlanAlimenticioListComponent } from './plan-alimenticio/plan-alimenticio-list/plan-alimenticio-list.component';
import { PlanAlimenticioFormCreateComponent } from './plan-alimenticio/plan-alimenticio-form-create/plan-alimenticio-form-create.component';
import { PlanAlimenticioFormEditComponent } from './plan-alimenticio/plan-alimenticio-form-edit/plan-alimenticio-form-edit.component';
import { ComidaListComponent } from './comida/comida-list/comida-list.component';
import { ComidaAnadirComponent } from './comida/comida-anadir/comida-anadir.component';
import { ComidaEditComponent } from './comida/comida-edit/comida-edit.component';

export const nutricionistaRoutes: Routes = [
    {
        path: '',
        component: NutricionistaLayoutComponent,
        children: [
            {path: 'plan-alimenticio/list', component: PlanAlimenticioListComponent},
            {path: 'plan-alimenticio/create', component: PlanAlimenticioFormCreateComponent},
            {path: 'plan-alimenticio/edit/:id', component: PlanAlimenticioFormEditComponent},
            {path: 'plan-alimenticio/comida/:planId/agregar', component: ComidaAnadirComponent},
            {path: 'plan-alimenticio/comida/:planId/editar/:comidaId', component: ComidaEditComponent},
            
            {path: 'comida/list', component: ComidaListComponent},
            {path: 'contenido', component: ContenidoComponent},
            {path: 'recompensa', component: RecompensasComponent}
        ]
    }
];