import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  constructor() { }

  verifyuseDetails(uname:any, pwd:any) {
    if (uname === "admin" && pwd === "admin") {
      return true;
    } else {
      return false
    }
  }
}
