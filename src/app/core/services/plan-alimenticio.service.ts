import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PlanAlimenticioCreateUpdateRequest } from '../../shared/models/plan-alimenticio-create-update-request.model';
import { Observable } from 'rxjs';
import { PlanAlimenticioResponse } from '../../shared/models/plan-alimenticio-response.model';

@Injectable({
  providedIn: 'root'
})
export class PlanAlimenticioService {

  private baseURL = `${environment.baseUrl}/plan-alimenticio`;
  private http = inject(HttpClient);

  getPlanAlimenticio(id: number): Observable<PlanAlimenticioResponse[]> {
    return this.http.get<PlanAlimenticioResponse[]>(`${this.baseURL}/nutricionista/${id}`);
  }

  createPlanAlimenticio(planAlimenticio: PlanAlimenticioCreateUpdateRequest): Observable<PlanAlimenticioResponse> {
    return this.http.post<PlanAlimenticioResponse>(`${this.baseURL}`, planAlimenticio);
  }

  updatePlanAlimenticio(planId: number, updatedPlan: PlanAlimenticioCreateUpdateRequest, nutricionistaId: number): Observable<PlanAlimenticioResponse> {
    return this.http.put<PlanAlimenticioResponse>(`${this.baseURL}/${planId}/nutricionista/${nutricionistaId}`, updatedPlan);
  }  
  

  deletePlanAlimenticio(planId: number, nutricionistaId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${planId}/nutricionista/${nutricionistaId}`);
  }
}