import { ServService } from './../../_services/serv.service';
import { Services } from './../../model/servicesModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.css']
})
export class EditServicesComponent implements OnInit {

  id!: number;
  service!: Services;
  form!: FormGroup;

  constructor(public serv: ServService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['serviceId'];
      this.serv.get(this.id).subscribe((data: Services)=>{
        this.service = data;
      });
      
      this.form = new FormGroup({
        nom: new FormControl('', [Validators.required]), 
        category: new FormControl('', Validators.required)
      });
    }
     
    get f(){
      return this.form.controls;
    }
       
    submit(){
      console.log(this.form.value);
      this.serv.update(this.id, this.form.value).subscribe(res => {
           console.log('Service updated successfully!');
           this.router.navigateByUrl('services');
      })
    }

}
