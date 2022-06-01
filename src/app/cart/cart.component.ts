import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Product} from "../products/product";
import {CartService} from "../services/cart.service";
import {ProductService} from "../services/product.service";
import {Cart} from "./cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] =[];
  product: Product = new Product();
  cart: Cart = new Cart();

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe({
      next:(products) => {
        console.log(products)
        this.products=products;
      }
    });
    console.log(this.products);
  }

  removeFromCart(product: Product) {
    console.log(product.id)
    this.cartService.removeFromCart(product).subscribe(()=>console.log("Product removed from cart"));
    this.ngOnInit();
  }

}
