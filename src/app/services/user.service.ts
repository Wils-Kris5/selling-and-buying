import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}
  addNewUser(user: User): Observable<User>{
    return this.httpClient.post<User>("http://localhost:8090/api/v1/users",user);
  }

}
//needs constructs for user service
//http://localhost:8090/api/v1/users (registerbutton has to invoke methods, for getUsers itll be by username)