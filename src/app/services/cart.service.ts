import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../user/user";
import {Product} from "../products/product";
import {Cart} from "../cart/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient/*, private user: User*/) { }

  getCartProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:9001/api/v1/cart/1"/*+this.user.accountNumber*/);
  }
  addToCart(product: Product): Observable<Product>{
    return this.httpClient.put<Product>("http://localhost:9001/api/v1/cart/1"/*+this.user.accountNumber*/,product);
  }
  removeFromCart(product: Product){
    // console.log("http://localhost:9001/api/v1/cart/1/"+product.id.toString());
    return this.httpClient.delete("http://localhost:9001/api/v1/cart/1/"+product.id.toString());
  }
}
