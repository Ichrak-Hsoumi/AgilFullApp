import { User } from './../model/userModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../services/token-storage.service';
import { AgentService } from '../services/agent.service';
import { AlertController } from '@ionic/angular';

declare var $:any;

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  public folder: string;
  currentUser: any;
  id!: number;
  agent!: User;
  form!: FormGroup;

  constructor(private token: TokenStorageService, private activatedRoute: ActivatedRoute,
    public agentService: AgentService,private router: Router,
    public alertController: AlertController) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      dateNaissance: new FormControl('', [Validators.required]),
      numTel: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]), 
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.form.controls;
  }

  async submit(){
    console.log(this.form.value);
    this.agentService.update(this.currentUser.id, this.form.value).subscribe(res => {
         console.log('Profile updated successfully!');
         this.router.navigateByUrl('account');
         /* this.reloadPage(); */
    })
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      animated: true,
      header: 'Update Profile',
      message: '<ion-icon name="checkmark-done-circle-outline" slot="start" color="success"></ion-icon> Profile updated successfully!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  
reloadPage(): void {
  window.location.reload();
}

}
