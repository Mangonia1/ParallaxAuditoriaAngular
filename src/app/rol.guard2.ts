import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RolGuard2 implements CanActivate {

  constructor(private router:Router){ }
   
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(!localStorage.getItem('token')){
      
      return true;
  }
  this.router.navigate(['listacuestionario'])
  return false;
}


  //   if(localStorage.getItem('tipo') === 'Administrador' || localStorage.getItem('tipo') === 'Empresa'){
  //     return true;
  //   }
  //   this.router.navigate(['/'])
  //   return false;
  // }
}