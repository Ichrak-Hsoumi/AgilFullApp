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
    { path: '/guichets', title: 'Ticket Windows',  icon:'pe-7s-way', class: '' },
    { path: '/notifications', title: 'FeedBacks',  icon:'pe-7s-comment', class: '' },
    /* { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' }, */
];

export const ROUTESAgent: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/queue', title: 'Queue',  icon:'pe-7s-more', class: '' },
  { path: '/notifications', title: 'FeedBacks',  icon:'pe-7s-comment', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  currentUser: any;
  menuItems: any[];
  menuItemsAgent: any[];

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.currentUser = this.tokenStorageService.getUser();
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItemsAgent = ROUTESAgent.filter(menuItemsAgent => menuItemsAgent);
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
