import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrl: './child4.component.css'
})
export class Child4Component {
  
//   constructor(public srvc:DataserviceService, public rtr:Router)  {}
 

//   result :any
  
//   loginForm = new FormGroup({
//   firstname : new FormControl(),
//   pwd : new FormControl()
// })



  

// loginDetails(){
//   alert(this.loginForm.controls["firstname"].value)
 
// this.result = this.srvc.verifyUsersDetails(this.loginForm.controls["firstname"].value, this.loginForm.controls["pwd"].value)

// if(this.result == true) {
//   localStorage.setItem("username", this.loginForm.controls["firstname"].value)
//   this.rtr.navigate(["home"])
// }

// alert(this.result)
// }

}
