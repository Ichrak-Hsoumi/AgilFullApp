import { ArticleService } from './../../_services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  form!: FormGroup;
   
  constructor(
    public articleService: ArticleService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
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
    this.articleService.create(this.form.value).subscribe(res => {
         console.log('Article created successfully!');
         this.router.navigateByUrl('articles');
    })
  }

}
