import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any[]>{
    return this.httpClient.get<any[]>("http://localhost:9001/api/v1/products/")
  }
  addNewProduct(){}
  updateProduct(){}
  getProductById(){}
  deleteProduct(){}
}
