import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

    private baseURL = `${environment.baseUrl}/suscripcion`;
    private http = inject(HttpClient);

    crearSuscripcion(usuarioId: number, tipoSuscripcion: string) {
        const body = {
            usuarioId: usuarioId,
            tipoSuscripcion: tipoSuscripcion
        };
        return this.http.post(`${this.baseURL}`, body);
    }
}
