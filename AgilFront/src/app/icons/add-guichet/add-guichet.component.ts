import { GuichetService } from './../../_services/guichet.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-guichet',
  templateUrl: './add-guichet.component.html',
  styleUrls: ['./add-guichet.component.css']
})
export class AddGuichetComponent implements OnInit {

  form!: FormGroup;

  constructor(public guichetService: GuichetService,
    private router: Router) { }

    ngOnInit(): void {
      this.form = new FormGroup({
        number: new FormControl('', [Validators.required]),
        open: new FormControl('', [Validators.required]),
        close: new FormControl('', Validators.required)
      });
    }
     
    get f(){
      return this.form.controls;
    }
      
    submit(){
      console.log(this.form.value);
      this.guichetService.create(this.form.value).subscribe(res => {
           console.log('Window created successfully!');
           this.router.navigateByUrl('guichets');
      })
    }

}
