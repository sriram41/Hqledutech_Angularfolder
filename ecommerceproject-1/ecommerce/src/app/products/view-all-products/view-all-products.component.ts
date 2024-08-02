import { Component } from '@angular/core';
import { SharedproductService } from '../sharedproduct.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrl: './view-all-products.component.css'
})
export class ViewAllProductsComponent {

  listOfAllProducts:any

  constructor(public srvc:SharedproductService) {}

  ngOnInit(){
    this.srvc.getAllProducts().subscribe((data)=> {
      this.listOfAllProducts= data
    })
  }



}
