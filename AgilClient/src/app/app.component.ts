import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Services', url: '/serviices', icon: 'storefront' },
    { title: 'Ticket', url: '/ticket', icon: 'ticket' },
    { title: 'FeedBack', url: '/feed-back', icon: 'chatbox-ellipses' }, 
    { title: 'Settings', url: '/settings', icon: 'settings' }, 
  ];

  public appFooter = [
    { title: 'Account', url: '/account', icon: 'person' },
    { title: 'Log Out', url: '/main', icon: 'log-out' },
  ];
  constructor(private tokenStorageService: TokenStorageService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.username = user.username;
      this.router.navigateByUrl('home');
    }
  }
}
