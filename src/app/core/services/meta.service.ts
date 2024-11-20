import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MetaCreateRequestModel } from '../../shared/models/meta-create-request-model';
import { MetaResponseModel } from '../../shared/models/meta-response.model';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

    private baseURL = `${environment.baseUrl}/meta`;
    private http = inject(HttpClient);

    createMeta(meta: MetaCreateRequestModel): Observable<MetaResponseModel> {
        return this.http.post<MetaResponseModel>(`${this.baseURL}`, meta);
    }

    getMetasByClienteId(clienteId: number): Observable<MetaResponseModel[]> {
        return this.http.get<MetaResponseModel[]>(`${this.baseURL}/cliente/${clienteId}`);
    }

    getMetaById(metaId: number, clienteId: number): Observable<MetaResponseModel> {
        return this.http.get<MetaResponseModel>(`${this.baseURL}/${metaId}/cliente/${clienteId}`);
    }      

    updateMeta(metaId: number, clienteId: number, updateMeta: MetaCreateRequestModel): Observable<MetaResponseModel> {
        return this.http.put<MetaResponseModel>(`${this.baseURL}/${metaId}/cliente/${clienteId}`, updateMeta);
    }

    eliminarMeta(metaId: number, clienteId: number): Observable<void> {
        return this.http.delete<void>(`${this.baseURL}/${metaId}/cliente/${clienteId}`);
    }
}
