import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShareddataService } from '../shareddata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

result:any

 constructor(public srvc:ShareddataService, public rtr:Router){}

  loginForm = new FormGroup({
    username : new FormControl(),
    pwd : new FormControl()
  })


  loginDetails() {
this.result = this.srvc.verifyDetails(this.loginForm.controls['username'].value, this.loginForm.controls['pwd'].value)
if(this.result == true) {
  localStorage.setItem('username', this.loginForm.controls['username'].value)
  this.rtr.navigate(['home'])
}
  }

}
