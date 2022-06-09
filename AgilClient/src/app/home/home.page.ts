import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ArticleService } from './../services/article.service';
import { Article } from './../model/articleModel';
import { TokenStorageService } from './../services/token-storage.service';
import { Router } from "@angular/router";
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  articles: Article[] = [];
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(private router: Router, private tokenStorageService: TokenStorageService, 
    public articleService: ArticleService,public agentservice: AgentService, 
    private menu: MenuController) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.username = user.username;

      console.log("user id", user.id);
      
    }

    this.articleService.sorted().subscribe((data: Article[])=>{
      this.articles = data;
      console.log(this.articles);
    })  

    this.agentservice.currentUser().subscribe(res => {
      console.log('Current U ser!', res);
      /* this.router.navigateByUrl('user'); */
    });
  }

 
}