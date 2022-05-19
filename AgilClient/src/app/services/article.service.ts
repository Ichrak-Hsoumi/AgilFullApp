import { Article } from './../model/articleModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public uri = 'http://localhost:8080/api/articles';

  constructor(private http: HttpClient) { 

  }

  list(): Observable<any> {
    return this.http.get(baseUrl);
  }

  sorted(): Observable<any> {
    return this.http.get(this.uri + "/sorted");
  }

}
