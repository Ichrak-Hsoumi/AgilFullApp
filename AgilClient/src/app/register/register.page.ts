import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, nom, prenom, dateNaissance, numTel, address, password } = this.form;

    this.authService.register(username, email, nom, prenom, dateNaissance, numTel, address, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('login');
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }

}
