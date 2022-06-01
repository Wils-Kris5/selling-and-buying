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
  addNewProduct(){
    return this.httpClient.get<Product[]>("http://localhost:9001/api/v1/products/")
  }
  updateProduct(){
    return this.httpClient.get<any[]>("http://localhost:9001/api/v1/products/")
  }
  getProductById(){
    return this.httpClient.get<any[]>("http://localhost:9001/api/v1/products/")
  }
  deleteProduct(){
    return this.httpClient.get<any[]>("http://localhost:9001/api/v1/products/")
  }
}
