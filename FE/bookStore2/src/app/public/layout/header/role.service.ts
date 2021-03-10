import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleService implements CanActivate{

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if("admin" == localStorage.getItem('admin')) {
      return true;
    }else if("user" == localStorage.getItem('user')){
      return true;
    }else{
      this.router.navigate(['/shared/signin'])
    }
    return false;
  }
}
