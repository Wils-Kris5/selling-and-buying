import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  getCart(): Observable<any[]>{
    return this.httpClient.get<any[]>("http://localhost:9001/api/v1/carts/{userId}")
  }
  addToCart(){}
  removeFromCart(){}
}
