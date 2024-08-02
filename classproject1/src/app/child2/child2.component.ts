import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

// latestname = "super star"

// total :any

// age = 20;
// @Input() n:any



// @Output() p = new EventEmitter

// child2Method() {
//   alert('child method')

//   this.p.emit()
  
// }
// result :any

// constructor(public srvc:DataserviceService) {}

// loginDetails(details:any) {

// this.result = this.srvc.verifyUsersDetails(details.names , details.pwd ) 
// alert(this.result)
// if(this.result == true) 
//   alert("vaild credentials")


// else 
//   alert("invaild credentials")



// }


// constructor(public httpsrvc : DataserviceService) {
//  this.httpsrvc.getAllPosts().subscribe(
//   (data:any) =>{
//     this.total = data
//   }
// )
// }



constructor(public rtr :Router) {}
logoutUser() {
localStorage.clear()
this.rtr.navigate(["login"])
}


}
