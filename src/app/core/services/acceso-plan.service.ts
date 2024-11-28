import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanAlimenticioResponse } from '../../shared/models/plan-alimenticio-response.model';

@Injectable({
  providedIn: 'root'
})
export class AccesoPlanService {

    private baseURL = `${environment.baseUrl}/acceso-contenido`;
    private http = inject(HttpClient);

    addPlanAlimenticioToCliente(planAlimenticioId: number, clienteId: number): Observable<PlanAlimenticioResponse> {
        return this.http.post<PlanAlimenticioResponse>(`${this.baseURL}/${planAlimenticioId}/cliente/${clienteId}`, null);
    }

    isClientePremiumOrVip(clienteId: number): Observable<boolean> {
        return this.http.get<boolean>(`${this.baseURL}/${clienteId}/is-premium-or-vip`);
    }
}