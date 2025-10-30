import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getALlProductsCategory(){
    return this.http.get(`/api/${Constant.METHODS.GET_ALL_CATEGORY}`);
  }
  getAllProducts(){
    return this.http.get(`/api/${Constant.METHODS.GET_ALL_PRODUCTS}`);

  }
  getAllProductsByCategory(id:number){
    return this.http.get(`/api/${Constant.METHODS.GET_ALL_PRODUCTS_BY_CATEGORY}${id}`);

  }
  saveProduct(obj:any){
    return this.http.post(`/api/${Constant.METHODS.CREATE_PRODUCT}`,obj);

  }
  updateProduct(obj:any){
    return this.http.post(`/api/${Constant.METHODS.UPDATE_PRODUCT}`,obj);

  }
  deleteProduct(id:number){
    return this.http.get(`/api/${Constant.METHODS.DELETE_PRODUCT}?id=${id}`)
  }
  addToCart(obj:any){
    return this.http.post(`/api/${Constant.METHODS.ADD_TO_CART}`,obj)
  }
  getCartDataByCustId(id:number){
    return this.http.get(`/api/${Constant.METHODS.GET_CART_BY_CUSTOMER_ID}${id}`)
  }

}
