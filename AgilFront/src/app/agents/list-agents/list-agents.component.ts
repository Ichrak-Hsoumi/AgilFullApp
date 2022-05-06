import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/userModel';
import { AgentService } from 'app/_services/agent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-agents',
  templateUrl: './list-agents.component.html',
  styleUrls: ['./list-agents.component.css']
})
export class ListAgentsComponent implements OnInit {

  agents: User[] = [];
  searchText: string;
  p: number = 1;

  constructor(public agentService: AgentService) { }

  ngOnInit(): void {
    this.agentService.list().subscribe((data: User[])=>{
      this.agents = data;
      console.log(this.agents);
    }) 
  }

  deletePost(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.agentService.delete(id).subscribe(res => {
          this.agents = this.agents.filter(item => item.id !== id);
          /* console.log('Post deleted successfully!'); */
     })
        Swal.fire(
          'Deleted!',
          'Agent has been deleted.',
          'success'
        )
      }else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'This agent is safe',
          'info'
        )
        }
    })
  }

}
