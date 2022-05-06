import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/agents', title: 'Agents',  icon:'pe-7s-users', class: '' },
    { path: '/articles', title: 'Articles',  icon:'pe-7s-news-paper', class: '' },
    { path: '/services', title: 'Services',  icon:'pe-7s-display1', class: '' },
    { path: '/icons', title: 'Ticket Window',  icon:'pe-7s-way', class: '' },
    { path: '/notifications', title: 'FeedBacks',  icon:'pe-7s-comment', class: '' },
    { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
