import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class MyResolveService implements Resolve<any>{

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.info(route.data)
    console.info(state)
    return {
      name:'1111',
      age:'2222'
    };
  }
}
