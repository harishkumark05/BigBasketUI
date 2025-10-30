import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

productList:any[] = [];
categoryList:any[] = [];
cartItems:any[] = [];
constructor(private productService:ProductService){
  this.productService.cartUpdated$?.subscribe((res:any)=>{
    this.getCartByCustomer()
  })
}
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
      //  debugger
       this.cartItems = res.data;
  })
}
getTotalPrice(): number {
  return this.cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
}
remove(id:any){
  this.productService.removeProductByCartId(id).subscribe((res:any)=>{
        this.getCartByCustomer()
  })
}
}
