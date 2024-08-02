import { Component } from '@angular/core';
import { SharedproductService } from '../sharedproduct.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent {

  productDetails:any;
  productid:any;

  constructor(public srvc:SharedproductService, public actroute:ActivatedRoute) {}

  ngOnInit() {
    this.actroute.params.subscribe((data)=> {
      this.productid = data["id"]
    })

    this.srvc.getViewproduct(this.productid).subscribe((data)=> {
      this.productDetails = data
      
    })
  }

}
