import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GrupoCreateRequestModel } from '../../shared/models/grupo-create-request-mode';
import { Observable } from 'rxjs';
import { GrupoResponse } from '../../shared/models/grupo-response.model';

@Injectable({
  providedIn: 'root'
})
export class UnirseService {

    private baseUrl = `${environment.baseUrl}/unirse`;
    private http = inject(HttpClient);

    addClientToGroup(clientId: number, groupId: number): Observable<GrupoResponse> {
        return this.http.post<GrupoResponse>(
        `${this.baseUrl}/${clientId}/add-grupo?groupId=${groupId}`,
        {}
        );
    }

    removeClientFromGroup(clientId: number, groupId: number): Observable<void> {
        return this.http.delete<void>(
        `${this.baseUrl}/${clientId}/remove-grupo/${groupId}`
        );
    }
}
