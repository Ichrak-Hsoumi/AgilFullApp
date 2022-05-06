import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/model/userModel';
import { AgentService } from 'app/_services/agent.service';
import { TokenStorageService } from '../_services/token-storage.service';

declare var $:any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser: any;
  id!: number;
  agent!: User;
  form!: FormGroup;

  constructor(private token: TokenStorageService,
    public agentService: AgentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

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

  submit(){
    console.log(this.form.value);
    this.agentService.update(this.currentUser.id, this.form.value).subscribe(res => {
         console.log('Profile updated successfully!');
         /* this.router.navigateByUrl('user'); */
         this.reloadPage();
    })
  }

  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    var color = Math.floor((Math.random() * 4) + 1);
    $.notify({
        icon: "pe-7s-gift",
        message: "Profile updated successfully!"
    },{
        type: type[2],
        timer: 1000,
        placement: {
            from: from,
            align: align
        }
    });
}
reloadPage(): void {
  window.location.reload();
}

}
