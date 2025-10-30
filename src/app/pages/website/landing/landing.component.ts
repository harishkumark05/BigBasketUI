import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
constructor(private productService:ProductService){}
productList:any[] = [];
categoryList:any[] = [];
cartItems:any[] = [];
ngOnInit(){
  this.getCartByCustomer();
}
getAllCategories(){
  this.productService.getALlProductsCategory().subscribe((res:any)=>{
    this.categoryList =res.data;
  })
}
getCartByCustomer(){
  this.productService.getCartDataByCustId(2529).subscribe((res:any)=>{
       debugger
       this.cartItems = res.data;
  })
}
getTotalPrice(): number {
  return this.cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
}
}
