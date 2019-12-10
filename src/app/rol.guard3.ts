import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RolGuard3 implements CanActivate {

  constructor(private router:Router){ }
   
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(localStorage.getItem('tipo') === 'Administrador' || localStorage.getItem('tipo') === 'Auditor'){
      return true;
    }
    this.router.navigate(['/'])
    return false;
  }
}