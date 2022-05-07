import { Guichet } from './../model/guichetModel';
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

  create(data: Guichet): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: number, data: Guichet): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
