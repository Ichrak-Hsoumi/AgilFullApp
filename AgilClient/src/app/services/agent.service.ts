import { User } from './../model/userModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/agents';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) {
    
   }

  list(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: User): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: number, data: User): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
