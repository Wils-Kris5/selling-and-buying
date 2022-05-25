import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class CanactivateGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    let token = this.authService.getToken();
    return this.authService.isUserAuthenticated(token).pipe(map((res:any)=>{
      return res['isAuthenticated'];
    }))
  }

}
