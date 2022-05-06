import { ServService } from './../../_services/serv.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from 'app/model/servicesModel';

@Component({
  selector: 'app-view-services',
  templateUrl: './view-services.component.html',
  styleUrls: ['./view-services.component.css']
})
export class ViewServicesComponent implements OnInit {

  id!: number;
  service!: Services;

  constructor(public serv: ServService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['serviceId'];
        
      this.serv.get(this.id).subscribe((data: Services)=>{
        this.service = data;
      });
    }
  

}
