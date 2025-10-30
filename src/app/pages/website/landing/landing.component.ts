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
ngOnInit(){
  this.getAllProducts();
}
getAllProducts(){
  this.productService.getAllProducts().subscribe((res:any)=>{
     this.productList = res.data;
  })
}
getAllCategories(){
  this.productService.getALlProductsCategory().subscribe((res:any)=>{
    this.categoryList =res.data;
  })
}
}
