import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComidaCreateUpdateRequest } from '../../shared/models/comida-create-update-request.model';
import { ComidaResponse } from '../../shared/models/comida-response.model';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  private baseURL = `${environment.baseUrl}/plan-alimenticio`;
  private http = inject(HttpClient);

  createComida(planId: number, comida: ComidaCreateUpdateRequest): Observable<ComidaResponse> {
    return this.http.post<ComidaResponse>(`${this.baseURL}/${planId}/comidas`, comida);
  }

  getAllComida(planId: number): Observable<ComidaResponse[]> {
    return this.http.get<ComidaResponse[]>(`${this.baseURL}/${planId}/comidas`);
  }
}