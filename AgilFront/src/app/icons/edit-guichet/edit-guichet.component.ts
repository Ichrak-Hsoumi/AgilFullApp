import { GuichetService } from './../../_services/guichet.service';
import { Guichet } from './../../model/guichetModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Services } from 'app/model/servicesModel';
import { User } from 'app/model/userModel';
import { AgentService } from 'app/_services/agent.service';
import { ServService } from 'app/_services/serv.service';

@Component({
  selector: 'app-edit-guichet',
  templateUrl: './edit-guichet.component.html',
  styleUrls: ['./edit-guichet.component.css']
})
export class EditGuichetComponent implements OnInit {

  id!: number;
  guichet!: Guichet;
  form!: FormGroup;
  services: Services[] = [];
  agents: User[] = [];

  constructor(public guichetService: GuichetService,
    public serv: ServService,
    public agentService: AgentService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.serv.list().subscribe((data: Services[])=>{
        this.services = data;
        console.log(this.services);
      })  

      this.agentService.list().subscribe((data: User[])=>{
        this.agents = data;
        console.log(this.agents);
      }) 


      this.id = this.route.snapshot.params['guichetId'];
      this.guichetService.get(this.id).subscribe((data: Guichet)=>{
        this.guichet = data;
      });
      
      this.form = new FormGroup({
        number: new FormControl('', [Validators.required]), 
        open: new FormControl('', Validators.required),
        close: new FormControl('', Validators.required),
        service: new FormControl('', [Validators.required]), 
        agent: new FormControl('', [Validators.required])
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
