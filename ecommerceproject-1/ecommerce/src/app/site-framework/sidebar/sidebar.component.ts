import { Component } from '@angular/core';
import { SharedproductService } from '../../products/sharedproduct.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  listOfCategories :any

  constructor(public srvc:SharedproductService) {}

  ngOnInit() {
       this.srvc.getAllCategories().subscribe((data) => {
        this.listOfCategories = data
       })
  }
}
