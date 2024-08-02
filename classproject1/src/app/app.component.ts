import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'classproject1';
//   date = new Date()
//   normal() {
//    return "supers star mahesh babu"
// }
// total = this.normal()

//   listbatch = {
//     "hero":"doctor strange",
//     "movie":"doctor strange madness",
//     "wood":"some"
//   }

  // moviesList = [
  //   {
  //     "hero":"doctor strange",
  //     "movie":"doctor strange madness",
  //     "wood":"some",
  //     "gender" : 1
  //   },
  //   {
  //     "hero":"serlock homes",
  //     "movie":"serlock",
  //     "wood":"some",
  //     "gender" : 0
  //   },
  //   {
  //     "hero":" IT",
  //     "movie":"lastload",
  //     "wood":"some",
  //     "gender" : 1
  //   }
  // ]

//   toggle = true
//   negative = false
//   negatives = true
//   weekday = 6

//   website = {
//     url:"http://www.google.com",
//     name: "google"
//   }


// public color = "textColor";

// public required = true;

// public group = {
//   "textColor" : this.required,
//   'fonts' : this.required
// }

// demo(n:any) {
//   alert("his name is " + n )

// }


// latestname = 'super star mahesh babu'
// price = 8834534.4353
// today = new Date()

// org = ""
// lists :any
// constructor(public services:DataserviceService) {
//   this.org = services.getOriganization()
//   this.lists = services.moviedetails()
  
// }

// allposts : any;
// constructor(public srvc:DataserviceService) {
//   this.allposts = this.srvc.getAllPosts()
// }


// allposts : any;
// constructor(public srvc:DataserviceService) {
//   this.srvc.getAllPosts().subscribe(
//     (data:any) => {
//       this.allposts = data;
//     }
//   )
// }


// name = "raja is a gentelmen"




// parentMethod() {
//   alert("parentMethod")
// }


result:any

constructor(public srvc:DataserviceService) {}


loginDetails(userDetails:any) {
  
this.result = this.srvc.verifyDetails(userDetails.usename, userDetails.pwd) 

if (this.result == true) {
  alert("valid")
}
 else{
alert('invalid')}

}






}



