import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  constructor() { }

verifyDetails(uname:any, pwd:any) {
  if (uname !== null && pwd !== null) {
            return true
  }
  else {
    return false
  }
}

}
