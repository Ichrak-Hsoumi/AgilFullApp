import { Injectable } from '@angular/core';
import { Ticket } from 'app/model/ticketModel';
import { TicketService } from './ticket.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardAgService {
  ticket: Ticket[] = [];
  ticketGuichet = new Array();

  total = 0;
  passed = 0;
  waiting = 0;

  constructor(public ticketService: TicketService, private tokenStorageService: TokenStorageService) { }

  getTotal(){
    this.total=this.passed+this.waiting;
    return (this.total);
  } 
}
