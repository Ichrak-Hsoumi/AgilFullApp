import { ArticleService } from './../../_services/article.service';
import { Article } from './../../model/articleModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  id!: number;
  article!: Article;
  form!: FormGroup;
  
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
    
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]), 
      contenu: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.articleService.update(this.id, this.form.value).subscribe(res => {
         console.log('Article updated successfully!');
         this.router.navigateByUrl('articles');
    })
  }

}
