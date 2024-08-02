import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const rtr = inject(Router)

  if(localStorage.getItem('username')==null) {
     rtr.navigate(['login'])
    return false
  } else {
    return true
  }
};
