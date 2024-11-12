import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private apiUrl = 'http://54.172.127.28:3000/api/dogs';
  private userApiUrl = 'http://54.172.127.28:3000/api/users';
  private certificateApiUrl = 'http://54.172.127.28:3000/api/certificates';

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
    const token = this.authService.getToken();  // Obtén el token del AuthService
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.certificateApiUrl}/details/${vaccineId}`, { headers });
  }
}
