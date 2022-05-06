import { ArticleService } from './../../_services/article.service';
import { Article } from './../../model/articleModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  id!: number;
  article!: Article;
   
  constructor(
    public articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['articleId'];
      
    this.articleService.get(this.id).subscribe((data: Article)=>{
      this.article = data;
    });
  }

}
