import { TicketService } from './../services/ticket.service';
import { SettiingsService } from './../services/settiings.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  date = new Date();
  check:any; 
  activation:string; 
  constructor(private renderer: Renderer2, private settiingsService: SettiingsService, private ticketService: TicketService) { }

  ngOnInit() {
    /* console.log("values",this.settiingsService.getAll());
    console.log("last",this.settiingsService.getLast()); */
    if (this.settiingsService.getLast()==true) {
      this.check=true;
      this.activation="Desactivate";
    } else {
      this.check=false;
      this.activation="Activate";
    }

    /* this.ticketService.truncate().subscribe(res => {
      console.log('truncate!', res);
    }); */
  }

  onToggleColorTheme(event){
    console.log(event.detail.checked);
    if (event.detail.checked) {
      /* document.body.setAttribute('color-theme', 'dark'); */
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      this.check=true;
      event.detail.checked=true;
      this.activation="Desactivate";
      this.settiingsService.add(event.detail.checked);
    } else {
      /* document.body.setAttribute('color-theme', 'light'); */
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
      this.check=false;
      event.detail.checked=false;
      this.activation="Activate";
      this.settiingsService.add(event.detail.checked);
    }
  }

}
