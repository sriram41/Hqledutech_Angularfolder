import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  // posts:any 

  // constructor() { }

// verifyUsersDetails(firstname:any, pwd:any) {
// alert(firstname)
 


//   if(firstname != null && pwd != null ) {
//     return true
//   }
//  else {
//     return false
//  }

  
// }

verifyDetails(username:any, pwd:any) {
  if(username === "admin" && pwd === "admin") {
    return true;
  } else{
  return false}
}




// //  constructor(public srvc:HttpClient) {
// //   srvc.get('https://jsonplaceholder.typicode.com/posts').subscribe(
// //     (data:any) => {
// //       this.posts = data
// //     }
// //   )
//  }

// constructor(public srvc:HttpClient) {}

//  getAllPosts() {
//   return this.srvc.get('https://jsonplaceholder.typicode.com/posts')
//  }

//   orgnization : string = "hql edutech";
//   getOriganization() {
//     return this.orgnization
//   }

//   moviesList = [
//     {
//       "hero":"doctor strange",
//       "movie":"doctor strange madness",
//       "wood":"some",
//       "gender" : 1
//     },
//     {
//       "hero":"serlock homes",
//       "movie":"serlock",
//       "wood":"some",
//       "gender" : 0
//     },
//     {
//       "hero":" IT",
//       "movie":"lastload",
//       "wood":"some",
//       "gender" : 1
//     }
//   ]

//   last =  {
//     "hero":"serlock homes",
//     "movie":"serlock",
//     "wood":"some",
//     "gender" : 0
//   }

// moviedetails() {
//   return this.moviesList
// }

}
