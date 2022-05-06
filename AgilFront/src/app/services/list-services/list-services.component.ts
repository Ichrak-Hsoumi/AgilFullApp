import { ServService } from './../../_services/serv.service';
import { Component, OnInit } from '@angular/core';
import { Services } from 'app/model/servicesModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  services: Services[] = [];
  searchText: string;
  p: number = 1;

  constructor(public serv: ServService) { }

  ngOnInit(): void {
    this.serv.list().subscribe((data: Services[])=>{
      this.services = data;
      console.log(this.services);
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
        this.serv.delete(id).subscribe(res => {
          this.services = this.services.filter(item => item.id !== id);
          /* console.log('Post deleted successfully!'); */
     })
        Swal.fire(
          'Deleted!',
          'Your service has been deleted.',
          'success'
        )
      }else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your service is safe',
          'info'
        )
        }
    })
  }

}
