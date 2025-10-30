import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {




  // isSidePanelVisible:Boolean = false;

  // openSidePanel(){
  //   this.isSidePanelVisible = true;
  // }
  // closeSidePanel(){
  //   this.isSidePanelVisible = false;
  // }
  isSidePanelVisible = false;
  constructor(private productService:ProductService){}

  cards = [
    { title: 'Card 1', text: 'Example text for card 1.' },
    { title: 'Card 2', text: 'Example text for card 2.' },
    { title: 'Card 3', text: 'Example text for card 3.' },
    { title: 'Card 4', text: 'Example text for card 4.' }
  ];
  
  openSidePanel() {
    this.isSidePanelVisible = true;
  }
  
  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
  productObj = {
    "ProductId": 0,
    "ProductSku": "",
    "ProductName": "",
    "ProductPrice": 0,
    "ProductShortName": "",
    "ProductDescription": "",
    "CreatedDate": new Date(),
    "DeliveryTimeSpan": "",
    "CategoryId": 0,
    "ProductImageUrl": "",
    "UserId": 0
  }
  ngOnInit(){
    // console.log('prodyct ngonint')
    this.getCategory()
    this.getProducts()

  }
categoryList:any[] = [];
productsList:any[] = [];
  getCategory(){
    this.productService.getALlProductsCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
      // console.log(res.data)
      
  })
  }

    getProducts(){
      this.productService.getAllProducts().subscribe((res:any)=>{
        console.log('products', res)
        this.productsList = res.data;
        // console.log(this.productsList)
    })
    }
    onSave() {
      console.log(this.productObj)
        this.productService.saveProduct(this.productObj).subscribe((res :any)=>{
          
          if(res.result){
              this.getProducts();
          }else{
            alert(res.message)
          }
        })
      }
      onUpdate() {
          
        this.productService.updateProduct(this.productObj).subscribe((res:any)=>{
          console.log('products', res)
          this.productsList = res.data;
          // console.log(this.productsList)
      })
  
        }
    // onDelete(_t18: any) {
    //   this.productService.delteProduct(_t18.productId).subscribe((res:any)=>{
    //     console.log(res.data,'deleted')
    // })
    //   }
      onDelete(product: any) {
        const isDelete = confirm('Are you sure to delete');
        if(isDelete){
          this.productService.deleteProduct(product.productId).subscribe((res:any)=>{
            console.log(res,'deleted')
            if(res.result){
              this.getProducts()
            }else{
              console.log('Not deleted Error')
            }
        },err =>{
          console.log(err)
        })
        }
        }
      onEdit(_t18: any) {
        this.productObj = {
          
  ProductId: _t18.productId,
  ProductSku:_t18.productSku ,
  ProductName: _t18.productName,
  ProductPrice: _t18.productPrice,
  ProductShortName: _t18.productShortName,
  ProductDescription:_t18.productDescription,
  CreatedDate: _t18.createdDate,
  DeliveryTimeSpan:_t18.deliveryTimeSpan ,
  CategoryId:_t18.categoryId ,
  ProductImageUrl:_t18.productImageUrl ,
  UserId: 0
        }
        
        this.openSidePanel()

      }
      
      
  
}
