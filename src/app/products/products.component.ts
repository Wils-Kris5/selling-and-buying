import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "./product";
import {CartService} from "../services/cart.service";
import {MatDialog} from "@angular/material/dialog";
import {UpdateProductComponent} from "../update-product/update-product.component";
import {CartComponent} from "../cart/cart.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  product: Product = new Product();
  toDisplay: boolean = false;
  errorMessage: string = "";
  count: number =0;

  constructor(private productService: ProductService, private cartService: CartService,
              private dialog:MatDialog) { }

  ngOnInit(){
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.count = products.length;
        this.products=products;
        console.log(this.count)
      }
    })
  }

  show() {
    this.toDisplay = !this.toDisplay;
  }

  addProduct() {
    if (this.product.name != "" && this.product.price != 0 && this.product.brand != "") {
      this.count+=1;
      this.product.id=this.count;
      this.productService.addNewProduct(this.product).subscribe({
        next: (product: Product) => {
          this.products.push(product);
          this.errorMessage = "Listing created successfully.";
        }
      });
    }
    else{
      this.errorMessage = "Only the description is optional.  Listing not created, please try again."
    }
  }

  moveToCart(product: Product) {
    this.dialog.open(CartComponent,
      {data: product})
    this.cartService.addToCart(product)

  }

  updateProduct(productUpdate: Product){
    let productCopy = Object.assign({},productUpdate)
    this.dialog.open(UpdateProductComponent,{
      width:'250px',
    data: productCopy}).afterClosed().subscribe(()=> this.ngOnInit())
  }
}
