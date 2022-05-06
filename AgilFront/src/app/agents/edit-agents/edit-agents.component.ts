import { AgentService } from './../../_services/agent.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from 'app/model/userModel';

@Component({
  selector: 'app-edit-agents',
  templateUrl: './edit-agents.component.html',
  styleUrls: ['./edit-agents.component.css']
})
export class EditAgentsComponent implements OnInit {

  id!: number;
  agent!: User;
  form!: FormGroup;
  
  constructor(
    public agentService: AgentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['agentId'];
    this.agentService.get(this.id).subscribe((data: User)=>{
      this.agent = data;
    });
    
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      dateNaissance: new FormControl('', [Validators.required]),
      numTel: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]), 
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.agentService.update(this.id, this.form.value).subscribe(res => {
         console.log('Agent updated successfully!');
         this.router.navigateByUrl('agents');
    })
  }

}
