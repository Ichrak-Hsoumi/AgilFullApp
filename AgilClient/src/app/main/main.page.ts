import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('login');
  }

}
