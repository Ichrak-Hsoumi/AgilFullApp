import { Ticket } from './../model/ticketModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  create(data: Ticket): Observable<any> {
    return this.http.post(baseUrl, data);
  }

}
