import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  displayedColumns: string[] = ['position', 'categoryName', 'parentCategoryId', 'userId'];
  categoryList:any[] =[];
  constructor(private productService:ProductService){
    this.productService.getALlProductsCategory().subscribe((res:any)=>{
      if(res.data){
        this.categoryList = res.data;
      }else{
        console.error('Category failed')
      }
    })
  }
  dataSource:any[]  = [ ];
}
