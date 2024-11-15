import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../../shared/models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private baseURL = `${environment.baseUrl}/user/profile`;  // Ajusta el endpoint según tu API

  private http = inject(HttpClient);


  getUserProfile(userId: number): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.baseURL}/${userId}`);
  }


  updateUserProfile(userId: number, profileData: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(`${this.baseURL}/${userId}`, profileData);
  }

}
