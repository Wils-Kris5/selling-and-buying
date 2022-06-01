import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import {CanactivateGuard} from "./canactivate.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { FooterComponent } from './footer/footer.component';
import {CartComponent} from "./cart/cart.component";
import { UserComponent } from './user/user.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'dashboard',
    component:DashboardComponent,
    children:[],
    canActivate:[CanactivateGuard]
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path: 'products',
    component:ProductsComponent,
    children:[]
  },
  {
    path: 'cart',
    component:CartComponent,
    canActivate:[CanactivateGuard]
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    UserComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
