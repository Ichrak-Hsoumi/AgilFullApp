import { GuichetService } from './../../_services/guichet.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Guichet } from 'app/model/guichetModel';
import { Services } from 'app/model/servicesModel';
import { ServService } from 'app/_services/serv.service';
import { AgentService } from 'app/_services/agent.service';
import { User } from 'app/model/userModel';

@Component({
  selector: 'app-add-guichet',
  templateUrl: './add-guichet.component.html',
  styleUrls: ['./add-guichet.component.css']
})
export class AddGuichetComponent implements OnInit {

  form!: FormGroup;
  services: Services[] = [];
  agents: User[] = [];
  guichets: Guichet[] = [];

  constructor(public guichetService: GuichetService,
    private router: Router,
    public serv: ServService,
    public agentService: AgentService) { }

    ngOnInit(): void {
      this.serv.list().subscribe((data: Services[])=>{
        this.services = data;
        console.log(this.services);
      })  

      this.guichetService.list().subscribe((data: Guichet[])=>{
        this.guichets = data;
        console.log(this.guichets);
      }) 

      this.agentService.list().subscribe((data: User[])=>{
        this.agents = data;
        console.log(this.agents);
      }) 

      this.form = new FormGroup({
        number: new FormControl('', [Validators.required]),
        open: new FormControl('', [Validators.required]),
        close: new FormControl('', [Validators.required]),
        service: new FormControl('', [Validators.required]), 
        agent: new FormControl('', [Validators.required])
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
