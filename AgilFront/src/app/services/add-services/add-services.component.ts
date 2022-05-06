import { ServService } from './../../_services/serv.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit {

  form!: FormGroup;

  constructor(public serv: ServService,
    private router: Router) { }

    ngOnInit(): void {
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
      this.serv.create(this.form.value).subscribe(res => {
           console.log('Service created successfully!');
           this.router.navigateByUrl('services');
      })
    }

}
