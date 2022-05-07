import { GuichetService } from './../../_services/guichet.service';
import { Guichet } from './../../model/guichetModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-guichet',
  templateUrl: './edit-guichet.component.html',
  styleUrls: ['./edit-guichet.component.css']
})
export class EditGuichetComponent implements OnInit {

  id!: number;
  guichet!: Guichet;
  form!: FormGroup;

  constructor(public guichetService: GuichetService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['guichetId'];
      this.guichetService.get(this.id).subscribe((data: Guichet)=>{
        this.guichet = data;
      });
      
      this.form = new FormGroup({
        number: new FormControl('', [Validators.required]), 
        open: new FormControl('', Validators.required),
        close: new FormControl('', Validators.required)
      });
    }
     
    get f(){
      return this.form.controls;
    }
       
    submit(){
      console.log(this.form.value);
      this.guichetService.update(this.id, this.form.value).subscribe(res => {
           console.log('Window updated successfully!');
           this.router.navigateByUrl('guichets');
      })
    }

}
