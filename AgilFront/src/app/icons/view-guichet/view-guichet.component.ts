import { GuichetService } from './../../_services/guichet.service';
import { Guichet } from './../../model/guichetModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-guichet',
  templateUrl: './view-guichet.component.html',
  styleUrls: ['./view-guichet.component.css']
})
export class ViewGuichetComponent implements OnInit {

  id!: number;
  guichet!: Guichet;
   
  constructor(
    public guichetService: GuichetService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['guichetId'];
      
    this.guichetService.get(this.id).subscribe((data: Guichet)=>{
      this.guichet = data;
    });
  }

}
