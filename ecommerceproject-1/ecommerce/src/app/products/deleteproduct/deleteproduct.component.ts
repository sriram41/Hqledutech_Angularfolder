import { Component } from '@angular/core';
import { SharedproductService } from '../sharedproduct.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrl: './deleteproduct.component.css'
})
export class DeleteproductComponent {

  deleteproductId :any

  constructor(public srvc:SharedproductService, public actroute:ActivatedRoute) {}

  ngOnInit() {
    this.actroute.params.subscribe((data)=>{
      this.deleteproductId = data["id"]
    })

    this.srvc.deleteproduct(this.deleteproductId).subscribe(() =>{})
  }

}
