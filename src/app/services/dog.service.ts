import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private apiUrl = `${environment.apiUrl}/api/dogs`;
  private userApiUrl = `${environment.apiUrl}/api/users`;
  private certificateApiUrl = `${environment.apiUrl}/api/certificates`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  registerDog(dogData: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/register`, dogData, { headers });
  }

  getAllDogs(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/all`, { headers });
  }

  getOwnersByRole(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.userApiUrl}/role`, { headers });
  }

  registerVaccine(vaccineData: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.certificateApiUrl}/register`, vaccineData, { headers });
  }

  getDogVaccines(dogId: number): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.certificateApiUrl}/dog/${dogId}`, { headers });
  }

  getCertificateDetails(vaccineId: number): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.certificateApiUrl}/details/${vaccineId}`, { headers });
  }
}
