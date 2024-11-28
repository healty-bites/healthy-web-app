import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SuscripcionCreateRequest } from '../../shared/models/suscripcion-create-request.model';
import { Observable } from 'rxjs';
import { SuscripcionResponse } from '../../shared/models/suscripcion-response.model';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  private baseURL = `${environment.baseUrl}/suscripcion`;
  private http = inject(HttpClient);
  private suscripcionId?: number;

  crearSuscripcion(suscripcion: SuscripcionCreateRequest): Observable<SuscripcionResponse> {
      return this.http.post<SuscripcionResponse>(`${this.baseURL}`, suscripcion);
  }

  eliminarSuscripcion(suscripcionId: number): Observable<void> {
      return this.http.delete<void>(`${this.baseURL}/${suscripcionId}`);
  }
}
