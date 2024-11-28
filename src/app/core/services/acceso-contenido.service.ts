import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContenidoResponse } from '../../shared/models/contenido-response.model';
import { ContenidoRequest } from '../../shared/models/contenido-request.model';

@Injectable({
  providedIn: 'root'
})
export class AccesoContenido {

    private baseURL = `${environment.baseUrl}/acceso-contenido`;
    private http = inject(HttpClient);

    addContenidoToCliente(contenidoId: number, clienteId: number): Observable<ContenidoResponse> {
        return this.http.post<ContenidoResponse>(`${this.baseURL}/${contenidoId}/cliente/${clienteId}`, null);
    }

    isClientePremiumOrVip(clienteId: number): Observable<boolean> {
        return this.http.get<boolean>(`${this.baseURL}/${clienteId}/is-premium-or-vip`);
    }
}