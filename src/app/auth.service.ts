import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httclient: HttpClient) { }

  authenticateUser(user:any): Observable<any>{
    return this.httclient.post<any>("http://localhost:3000/auth/v1",user);
  }

  isUserAuthenticated(token:any): Observable<any>{

    return this.httclient.post<any>
    ("http://localhost:3000/auth/v1/isAuthenticated",
      {},
      {headers:new HttpHeaders().set("Authorization","Bearer "+token)}
    )
  }

  setToken(token:string){
    localStorage.setItem("bearerToken",token);
  }

  getToken(){
    return localStorage.getItem("bearerToken");
  }
}
