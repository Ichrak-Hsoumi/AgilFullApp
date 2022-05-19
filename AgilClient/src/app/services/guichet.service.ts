import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/guichets';

@Injectable({
  providedIn: 'root'
})
export class GuichetService {

  constructor(private http: HttpClient) { 

  }

  list(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

}
