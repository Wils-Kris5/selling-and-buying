import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) { }

  gotoLogin() {
    this.router.navigate(['login'])
  }

  gotoDashboard() {
    this.router.navigate(['dashboard']);
  }
  
  gotoSignup() {
    this.router.navigate(['signup'])
  }

  gotoProducts() {
    this.router.navigate(['products']);
  }
  
}
