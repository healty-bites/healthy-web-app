import { Routes } from '@angular/router';

import { GrupoComponent } from './grupo/grupo.component';
import { MetaComponent } from './meta/meta.component';

import { UserProfileComponent } from '../../shared/components/user-profile/user-profile.component';
import { ClienteLayoutComponent } from './cliente-layout/cliente-layout.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { UpdateProfileComponent } from '../../shared/components/update-profile/update-profile.component';

export const clienteRoutes: Routes = [
    {
        path: '',
        component: ClienteLayoutComponent,
        children: [
            {path: 'perfil', component: UserProfileComponent},
            {path: 'perfil/update', component: UpdateProfileComponent},
            {path: 'meta', component: MetaComponent},
            {path: 'seguimiento', component: SeguimientoComponent},
            {path: 'contenido', component: ContenidoComponent},
            {path: 'grupo', component: GrupoComponent},
        ]
    }
];