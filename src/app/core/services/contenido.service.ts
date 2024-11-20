import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContenidoResponse } from '../../shared/models/contenido-response.model';
import { ContenidoRequest } from '../../shared/models/contenido-request.model';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

    private baseURL = `${environment.baseUrl}/contenido`;
    private http = inject(HttpClient);

    getAllContenidos(): Observable<ContenidoResponse[]> {
        return this.http.get<ContenidoResponse[]>(`${this.baseURL}`);
    }

    getAllContenidosByNutricionistaId(nutricionistaId: number): Observable<ContenidoResponse[]> {
        return this.http.get<ContenidoResponse[]>(`${this.baseURL}/nutricionista/${nutricionistaId}`);
    }

    getContentById(contenidoId: number): Observable<ContenidoResponse> {
        return this.http.get<ContenidoResponse>(`${this.baseURL}/${contenidoId}`);
    }

    crearContenido(contenido: ContenidoRequest): Observable<ContenidoResponse> {
        return this.http.post<ContenidoResponse>(`${this.baseURL}`, contenido);
    }

    deleteContenido(contenidoId: number): Observable<void> {
        return this.http.delete<void>(`${this.baseURL}/${contenidoId}`);
    }

    updateContenido(contenidoId: number, updateContenido: ContenidoRequest): Observable<ContenidoResponse> {
        return this.http.put<ContenidoResponse>(`${this.baseURL}/${contenidoId}`, updateContenido)
    }
}