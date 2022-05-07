import { GuichetService } from './../../_services/guichet.service';
import { Guichet } from './../../model/guichetModel';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-guichet',
  templateUrl: './list-guichet.component.html',
  styleUrls: ['./list-guichet.component.css']
})
export class ListGuichetComponent implements OnInit {

  guichets: Guichet[] = [];
  searchText: string;
  p: number = 1;

  constructor(public guichetService: GuichetService) { }
  
  ngOnInit(): void {
    this.guichetService.list().subscribe((data: Guichet[])=>{
      this.guichets = data;
      console.log(this.guichets);
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
        this.guichetService.delete(id).subscribe(res => {
          this.guichets = this.guichets.filter(item => item.id !== id);
          /* console.log('Post deleted successfully!'); */
     })
        Swal.fire(
          'Deleted!',
          'Your window has been deleted.',
          'success'
        )
      }else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your window is safe',
          'info'
        )
        }
    })
  }

}
