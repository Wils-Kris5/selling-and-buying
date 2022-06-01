import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  authenticateUser(user:any): Observable<any>{
    return this.httpClient.post<any>("http://localhost:8090/api/v1/users/login",user);
  }

  isUserAuthenticated(token:any): Observable<any>{

    return this.httpClient.post<any>
    ("http://localhost:8090/api/v1/users/isAuthenticated",
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
