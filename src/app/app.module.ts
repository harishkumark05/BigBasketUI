import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { CartComponent } from './pages/admin/cart/cart.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { CustomerComponent } from './pages/admin/customer/customer.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { CustomerOrdersComponent } from './pages/website/customer-orders/customer-orders.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { UserProductsComponent } from './pages/website/user-products/user-products.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    CartComponent,
    CategoriesComponent,
    CustomerComponent,
    OrderComponent,
    ProductsComponent,
    LandingComponent,
    CustomerCartComponent,
    CheckoutComponent,
    CustomerOrdersComponent,
    CategoryProductsComponent,
    UserProductsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule ,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
