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
}
