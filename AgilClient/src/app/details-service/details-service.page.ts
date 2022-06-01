import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from '../model/servicesModel';
import { ServService } from '../services/serv.service';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Guichet } from '../model/guichetModel';
import { GuichetService } from '../services/guichet.service';

@Component({
  selector: 'app-details-service',
  templateUrl: './details-service.page.html',
  styleUrls: ['./details-service.page.scss'],
})
export class DetailsServicePage implements OnInit {

  id!: number;
  service: Services = new Services();
  guichets: Guichet[] = [];

  constructor(public serv: ServService, public guichetService: GuichetService,
    private route: ActivatedRoute, private router: Router,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['serviceId'];
        
      this.serv.get(this.id).subscribe((data: Services)=>{
        this.service = data;
      }); 

      this.guichetService.list().subscribe((data: Guichet[])=>{
        this.guichets = data;
        console.log(this.guichets);
      })
    }

    /* Current Time */
    getCurrentTime() {
      var today = new Date();
      var hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
      var minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
      var seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
      return hours + ':' + minutes + ':' + seconds;
    } 

    async presentActionSheet() {

      /* for (let index = 0; index < this.guichets.length; index++) {
        console.log(this.guichets[index].service.id);
      } */

      var now = new Date();

      var nowH = now.getHours();
      console.log(this.getCurrentTime());

      if ((nowH < 7)||(nowH > 16)){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Warning!',
          subHeader: 'Time out',
          message: 'You can not book a ticket now, the ticket window is closed.',
          buttons: ['OK']
        });
        await alert.present();

        const { role } = await alert.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
      } else{
        const actionSheet = await this.actionSheetController.create({
          header: 'Are you sure?',
          cssClass: 'my-custom-class',
          buttons: [{
            text: 'Yes Get Ticket',
            icon: 'ticket-outline', 
            id: 'ticket',
            handler: () => {
              console.log('Get Ticket clicked');
              this.router.navigateByUrl('ticket');
            }
          },{
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]
        });
        await actionSheet.present();
    
        const { role, data } = await actionSheet.onDidDismiss();
        console.log('onDidDismiss resolved with role and data', role, data);
      }
      
    }

}
