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
import {HttpClientModule} from "@angular/common/http";



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
    children:[],
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
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        RouterModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
