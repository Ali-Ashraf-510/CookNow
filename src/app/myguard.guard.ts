import { inject } from '@angular/core';
import { DataService } from './data.service';
import { CanActivateFn, Router } from '@angular/router';

export const myguardGuard: CanActivateFn = (route, state) => {
  let dataService =inject(DataService)
  let _Router =inject(Router)
  if(dataService.isLogined.getValue()==true){
    return true
  } else{
    _Router.navigate(['/login'])
    return false
  }
};
