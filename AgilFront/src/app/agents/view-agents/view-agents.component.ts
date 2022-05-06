import { AgentService } from './../../_services/agent.service';
import { User } from 'app/model/userModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-agents',
  templateUrl: './view-agents.component.html',
  styleUrls: ['./view-agents.component.css']
})
export class ViewAgentsComponent implements OnInit {

  id!: number;
  agent!: User;
   
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
  }

}
