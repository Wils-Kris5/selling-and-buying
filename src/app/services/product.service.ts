import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../products/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:9001/api/v1/products/")
  }
  addNewProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>("http://localhost:9001/api/v1/products/",product);
  }
  updateProduct(productUpdate: Product){
    return this.httpClient.put<Product>("http://localhost:9001/api/v1/products/",productUpdate)
  }
  getProductById(id: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:9001/api/v1/products/"+id.toString())
  }
  deleteProduct(product: Product){
    return this.httpClient.delete<Product>("http://localhost:9001/api/v1/products/")
  }
  moveToCart(product: Product): Observable<Product>{
    return this.httpClient.put<Product>("http://localhost:9001/api/v1/cart/1",product)
  }
}
