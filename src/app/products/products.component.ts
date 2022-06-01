import {Component, Inject, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "./product";
import {CartService} from "../services/cart.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {UpdateProductComponent} from "../update-product/update-product.component";
import {CartComponent} from "../cart/cart.component";
import {FooterComponent} from "../footer/footer.component";

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
        console.log(this.count);
      }
    })
  }

  show() {
    this.toDisplay = !this.toDisplay;
  }

  deleteProduct(product: Product){
    this.productService.deleteProduct(product);
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

  viewProduct(){
      this.dialog.open(ProductsComponent,{
        width:'250px',
        data:this.product})
    }


  moveToCart(product: Product) {
    console.log(product)
    this.cartService.addToCart(product).subscribe(()=>console.log("Product added to cart"))
  }

  updateProduct(productUpdate: Product){
    let productCopy = Object.assign({},productUpdate)
    this.dialog.open(UpdateProductComponent,{
      width:'250px',
      data: productCopy}).afterClosed().subscribe(()=> this.ngOnInit())
  }

}
