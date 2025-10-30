import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent {
  activeCategoryId:number =0;
  productListByCategory:any[] = [];
constructor(private activatedRoute:ActivatedRoute, private productService:ProductService){
  this.activatedRoute.paramMap.subscribe((res:any)=>{
    this.activeCategoryId = res.params['id']
    // debugger
    // console.log(this.activeCategoryId)
    this.loadProducts()
  })
}
loadProducts(){
  this.productService.getAllProductsByCategory(this.activeCategoryId).subscribe((res:any)=>{
      this.productListByCategory =res.data;
  })
}
}
