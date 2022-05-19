import { FeedbackService } from './../services/feedback.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.page.html',
  styleUrls: ['./feed-back.page.scss'],
})
export class FeedBackPage implements OnInit {

  form!: FormGroup; 

  constructor( public feedbackService: FeedbackService, private router: Router, public alertController: AlertController) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      content: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
  /* async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
    
  submit(){
    console.log(this.form.value);
    this.feedbackService.create(this.form.value).subscribe(res => {
         console.log('Feedback created successfully!');
         this.router.navigateByUrl('home');
    })
  } */
  async submit(){
    console.log(this.form.value);
    this.feedbackService.create(this.form.value).subscribe(res => {
         console.log('Feedback created successfully!');
         this.router.navigateByUrl('home');
    })
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      animated: true,
      header: 'SENT',
      message: '<ion-icon name="checkmark-done-circle-outline" slot="start" color="success"></ion-icon> Feedback sent successfully!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
}
