import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'app/model/ticketModel';
import { TicketService } from 'app/_services/ticket.service';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  ticket: Ticket[] = [];
  ticketGuichet = new Array();
  firstTicket:Ticket;

  constructor(private router: Router, public ticketService: TicketService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    this.ticketService.list().subscribe((data: Ticket[])=>{
      this.ticket = data;
      console.log(this.ticket);

      const user = this.tokenStorageService.getUser();

      //Ticket per Window
      for (let index = 0; index < this.ticket.length; index++) {
        if (user.id == this.ticket[index].guichet.agent.id) {
          this.ticketGuichet.push(this.ticket[index]);
        }
      }
      console.log("ticketGuichet", this.ticketGuichet);
      
      //return the first Ticket
      this.firstTicket = this.ticketGuichet[0];
    });
  }

  getNext(id:number) {
    /* for (let index = 0; index < this.ticketGuichet.length; index++) {  
      this.firstTicket = this.ticketGuichet[index];
      console.log("this.firstTicket", this.firstTicket);
    } */
    this.firstTicket = this.ticketGuichet[0+1];
    this.ticketService.delete(id).subscribe(res => {
    this.ticketGuichet = this.ticketGuichet.filter(item => item.id !== id);
    })
  }

}
