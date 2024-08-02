import { Component } from '@angular/core';
import { SharedproductService } from '../sharedproduct.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrl: './view-all-products-by-category.component.css'
})
export class ViewAllProductsByCategoryComponent {

  listofProducts : any
  catid:any
  constructor(public srvc: SharedproductService, public actroute:ActivatedRoute){}

  ngOnInit() {
    this.actroute.params.subscribe((data)=> {
      this.catid = data["id"]
      
    })

    this.srvc.getAllproductsByCategory(this.catid).subscribe((data) => {
      this.listofProducts = data
     
    })
  }
  
  

}
