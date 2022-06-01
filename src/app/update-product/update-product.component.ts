import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "../products/product";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../services/product.service";


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  errorMessage: string ="";
  product: Product = this.data;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private productService:ProductService,
              private dialogRef:MatDialogRef<UpdateProductComponent>) { }

  ngOnInit(): void {
  }

  edit(): Product{
    this.productService.updateProduct(this.product).subscribe({
      next: ()=>{
        this.dialogRef.close()
      }
    })
    return this.product;
  }
}
