import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("Canactivate called");

    // 1. reading token from the localstorage
    let token = this.authService.getToken();
    //2. verifying token
    let isValid = this.authService.isAuthenticated(token);
    // 3. Returning true or false
    return isValid;
  }

}

// route will be activated only when canactivate return true
// route will not be activated if canactivate return false




// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import {map, Observable} from 'rxjs';
// import {AuthService} from "./auth.service";

// @Injectable({
//   providedIn: 'root'
// })

// export class CanactivateGuard implements CanActivate {
//   constructor(private authService: AuthService) {
//   }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean>{
//     let token = this.authService.getToken();
//     return this.authService.isUserAuthenticated(token).pipe(map((res:any)=>{
//       return res['isAuthenticated'];
//     }))
//   }

// }
