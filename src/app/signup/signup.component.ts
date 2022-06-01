import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { UserService } from '../services/user.service';
import {User} from "../user/user";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  errorMessage : String="";
  message : String="";

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  
  }
  registerUser(){
    if(this.user.username == ""||this.user.firstName == ""|| this.user.lastName == ""|| this.user.password == ""){
    this.errorMessage="fields cannot be empty"
    }else{
      this.userService.addNewUser(this.user).subscribe({
        next: (newUser) => {
          this.errorMessage="";
          this.message="User is registered";
          this.user.username="";
          this.user.firstName="";
          this.user.lastName="";
          this.user.password="";
        },
        error:()=>{
          this.errorMessage="user registration failed";
          this.message="";
        }
      })
      
      
    }
  }

}
