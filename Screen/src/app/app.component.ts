import { TicketService } from './_services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from './model/ticketModel';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myDate = new Date();

  title = 'Screen';
  date : Date = new Date();
  ticket: Ticket[] = [];
  ticketFirst: Ticket[] = [];
  ticketFirstInit: Ticket[] = [];
  firstTicket!:Ticket;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private ticketService: TicketService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.username = user.username;
    }

    this.ticketService.list().subscribe((data: Ticket[])=>{
      this.ticket = data;
      console.log(this.ticket);
      
      //first letter
      for (let index = 0; index < this.ticket.length; index++) {
        this.ticket[index].guichet.service.nom = this.ticket[index].guichet.service.nom.slice(0,1);
      }

      //3 First tickets
      this.ticketFirstInit = this.ticket.slice(0, -1);
      this.ticketFirst = this.ticketFirstInit.slice(-3).reverse();
      console.log("Sliced", this.ticketFirst);

      //return the first Ticket
      this.firstTicket = this.ticket[this.ticket.length-1];
    });
    
    
  }
}
