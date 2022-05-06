import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Services } from 'app/model/servicesModel';

const baseUrl = 'http://localhost:8080/api/services';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http: HttpClient) { 

  }

  list(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: Services): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: number, data: Services): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  
}
