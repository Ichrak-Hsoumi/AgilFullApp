import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guichet } from '../model/guichetModel';
import { GuichetService } from '../services/guichet.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.page.html',
  styleUrls: ['./notif.page.scss'],
})
export class NotifPage implements OnInit {

  id!: number;
  guichet!: Guichet;

  constructor(public guichetService: GuichetService,
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['guichetId'];
        
      this.guichetService.get(this.id).subscribe((data: Guichet)=>{
        this.guichet = data;
        console.log("guichet data", this.guichet);
      
        this.ticketService.create(this.guichet).subscribe(res =>{
        console.log("rabbit mq");
        this.router.navigateByUrl('ticket');
        });
      });
  
      
    }

}
