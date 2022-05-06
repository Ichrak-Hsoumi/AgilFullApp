import { AgentService } from './../../_services/agent.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAgentService } from 'app/_services/auth-agent.service';

@Component({
  selector: 'app-add-agents',
  templateUrl: './add-agents.component.html',
  styleUrls: ['./add-agents.component.css']
})
export class AddAgentsComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    nom: null,
    prenom: null,
    dateNaissance: null,
    numTel: null,
    address: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthAgentService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, nom, prenom, dateNaissance, numTel, address, password } = this.form;

    this.authService.register(username, email, nom, prenom, dateNaissance, numTel, address, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log('Agent created successfully!');
         this.router.navigateByUrl('agents');
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


}
