import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../user/user";
import {Product} from "../products/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient/*, private user: User*/) { }

  getCart(): Observable<Product[]>{
    return this.httpClient.get<any[]>("http://localhost:9001/api/v1/cart/"/*+this.user.accountNumber*/);
  }
  addToCart(product: Product): Observable<Product>{
    return this.httpClient.post<Product>("http://localhost:9001/api/v1/cart/"/*+this.user.accountNumber*/,product);
  }
  removeFromCart(){}
}
