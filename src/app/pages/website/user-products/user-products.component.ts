import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent {
  
  constructor(private productService:ProductService){}
productList:any[] = [];
  ngOnInit(){
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe((res:any)=>{
       this.productList = res.data;
    })
  }
  addToCart(productId:number){
    // console.log(productId) //4085 //cus 2529
    const cartObj ={
      "CartId": 0,
      "CustId": 2529,
      "ProductId": productId,
      "Quantity": 1,
      "AddedDate": new Date()
    }
    this.productService.addToCart(cartObj).subscribe((res:any)=>{
      // console.log(res)
      if(res.result){
        console.log('product added to cart')
      }else{
        console.log('error product not added to cart')
      }
    })
  }
}
