import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(environment.baseApi+'products')

  }
  getAllCategories(){
    return this.http.get(environment.baseApi+'products/categories')


  }
  getProductsByCategory(keyword:string){
    return this.http.get(environment.baseApi+'products/category/'+keyword)


  }
}
