import { Feedback } from './../model/feedbackModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/feedbacks';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { 

  }

  list(): Observable<any> {
    return this.http.get(baseUrl);
  }

  create(data: Feedback): Observable<any> {
    return this.http.post(baseUrl, data);
  }

}
