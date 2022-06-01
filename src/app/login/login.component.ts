import { Component, OnInit } from '@angular/core';
import {RoutingService} from "../services/routing.service";
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string="";
  username: string="";

  constructor(private routeService: RoutingService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(){
    if(this.username == "" || this.password == ""){
      throw new Error("Username and Password cannot be empty");
    }
    let user = {username:this.username, password:this.password};
    this.authService.authenticateUser(user).subscribe({
      next:(response)=>{
        console.log(response);
        this.authService.setToken(response['token']);
        this.routeService.gotoDashboard();
      },
      error:()=>{
        console.log("Invalid credentials");
      }
    })

  }
}
