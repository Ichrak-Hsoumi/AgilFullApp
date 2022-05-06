import { FeedbackService } from './../_services/feedback.service';
import { Feedback } from './../model/feedbackModel';
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  feedBacks: Feedback[] = [];
  searchText: string;
  p: number = 1;

  constructor(public feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbackService.list().subscribe((data: Feedback[])=>{
      this.feedBacks = data;
      console.log(this.feedBacks);
    })
  }
  /* showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      var color = Math.floor((Math.random() * 4) + 1);
      $.notify({
          icon: "pe-7s-gift",
          message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
      },{
          type: type[color],
          timer: 1000,
          placement: {
              from: from,
              align: align
          }
      });
  } */
}
