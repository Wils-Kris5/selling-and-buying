import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

}
