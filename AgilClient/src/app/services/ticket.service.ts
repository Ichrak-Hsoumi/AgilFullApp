
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  public uri = 'http://localhost:8080/api/ticket';

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(baseUrl);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  truncate(): Observable<any> {
    return this.http.get(this.uri + "/truncate");
  }

}
