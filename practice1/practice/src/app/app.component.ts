import { Component } from '@angular/core';
import { ShareddataService } from './shareddata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';

// result :any
// constructor(public srvc:ShareddataService) {}

// loginDetails(useDetails:any) {
//   this.result = this.srvc.verifyuseDetails(useDetails.names, useDetails.pwd) 
//     if(this.result == true) {
//       alert("vaild credentials")
//     } else {
//       alert("invaild credentials")
//     }
  
// }


// onchange hook wish = "rebel star prabhas"


employees = [
  {"emp":1, "ename":"rama","salary":5000, "gender":0},
  {"emp":2, "ename":"rama","salary":5000, "gender":1},
  {"emp":3, "ename":"rama","salary":5000, "gender":0},
  {"emp":4, "ename":"rama","salary":5000, "gender":1}

]


}
