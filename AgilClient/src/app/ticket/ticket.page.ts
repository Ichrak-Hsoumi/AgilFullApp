import { Services } from './../model/servicesModel';
import { TicketService } from './../services/ticket.service';
import { Ticket } from './../model/ticketModel';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { SettiingsService } from '../services/settiings.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  ticket: Ticket[] = [];
  ticketClient = new Array();
  card:any;

  constructor(private router: Router, public ticketService: TicketService, private tokenStorageService: TokenStorageService,
    private settiingsService: SettiingsService) { }

  ngOnInit(): void {
    //Change card color based on dark or light mode
    if (this.settiingsService.getLast()==true) {
      this.card="cardDark";
    } else {
      this.card="card";
    }
    

    this.ticketService.list().subscribe((data: Ticket[])=>{
      this.ticket = data;
      console.log(this.ticket);

      
      const user = this.tokenStorageService.getUser();
    
      //Ticket per Client
      for (let index = 0; index < this.ticket.length; index++) {
        if (user.id == this.ticket[index].client.id) {
          this.ticketClient.push(this.ticket[index]);
        }
      }
      console.log("ticketClient", this.ticketClient);

      //First letter of each service
      for (let j = 0; j < this.ticketClient.length; j++) {
        this.ticketClient[j].guichet.service.nom = this.ticketClient[j].guichet.service.nom.slice(0,1);
      }

      //Get Time of ticket
      for (let j = 0; j < this.ticketClient.length; j++) {
        this.ticketClient[j].date= new Date(this.ticketClient[j].date)
        let t = new Date(this.ticketClient[j].date);
        let m = t.getMinutes();
        let h = t.getHours();
        m=this.ticketClient[j].date.getMinutes()+(5*j);
        if ((this.ticketClient[j].date.getMinutes())>=60) {
          h=this.ticketClient[j].date.getHours()+1;
          m=this.ticketClient[j].date.getMinutes()-60;        
        }
        this.ticketClient[j].date=h +":"+ m;
      }

    });
    
  }

  goToServices() {
    this.router.navigateByUrl('serviices');
  }

}
