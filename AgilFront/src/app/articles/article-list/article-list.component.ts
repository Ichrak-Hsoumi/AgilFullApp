import { ArticleService } from './../../_services/article.service';
import { Article } from './../../model/articleModel';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];
  searchText: string;
  p: number = 1;
  
  constructor(public articleService: ArticleService) { }
  
  ngOnInit(): void {
    this.articleService.list().subscribe((data: Article[])=>{
      this.articles = data;
      console.log(this.articles);
    })  
  }
  
  deletePost(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.articleService.delete(id).subscribe(res => {
          this.articles = this.articles.filter(item => item.id !== id);
          /* console.log('Post deleted successfully!'); */
     })
        Swal.fire(
          'Deleted!',
          'Your article has been deleted.',
          'success'
        )
      }else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your article file is safe',
          'info'
        )
        }
    })
  }
}
