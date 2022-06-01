import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "./product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  product: Product = new Product();
  toDisplay: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        console.log(products);
        this.products=products;
      }
    })
  }

  show() {
    this.toDisplay = !this.toDisplay;
  }

  addProduct(){
    this.productService.addNewProduct().subscribe({
      next: (piece: any) => {

      }
    })
  }
}
