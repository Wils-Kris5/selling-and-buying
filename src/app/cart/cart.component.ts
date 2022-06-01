import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Product} from "../products/product";
import {CartService} from "../services/cart.service";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = []


  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe({
      next:(products) => {
        this.products = products;
      }
    });
  }

  removeFromCart(product: any) {

  }
}
