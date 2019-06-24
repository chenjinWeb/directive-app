import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MyGuardGuard implements CanActivate, CanActivateChild, CanLoad {
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    console.info(state)
    return true;
  }
  canActivateChild(next: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    console.info(state)
    return this.canActivate(next,state)
  }
  canLoad(route: Route,segments: UrlSegment[]){
    return true;
  }

}
