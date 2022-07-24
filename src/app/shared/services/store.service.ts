import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../model/product";
import {ProductCategory} from "../model/productCategory";

@Injectable({providedIn: 'root'})
export class StoreService {
  url: string = "http://localhost:3000";

  constructor(private http: HttpClient){}

  public getAllProducts() {
    return this.http.get<Product[]>(`${this.url}/product/all`);
  }

  public getProductById(id: string) {
    return this.http.get<Product[]>(`${this.url}/product/`+id);
  }

  public getProductsByUser(id: string) {
    return this.http.get<Product[]>(`${this.url}/product/getByUser`+id);
  }

  public addProduct(product: Product) {
    return this.http.post<Product[]>(`${this.url}/product/add`, product);
  }

  public editProduct(product: Product) {
    return this.http.post<Product[]>(`${this.url}/product/update/`+product._id, product);
  }

  public deleteProduct(id: string) {
    return this.http.get<Product[]>(`${this.url}/product/update/`+id);
  }

  public getAllCategories() {
    return this.http.get<ProductCategory[]>(`${this.url}/productCategory/all`);
  }

  public getProductCategoryById(id: string) {
    return this.http.get<Product[]>(`${this.url}/productCategory/`+id);
  }

  public addProductCategory(productCategory: ProductCategory) {
    return this.http.post<Product[]>(`${this.url}/productCategory/add`, productCategory);
  }

  public editProductCategory(productCategory: ProductCategory) {
    return this.http.post<Product[]>(`${this.url}/productCategory/update/`+productCategory._id, productCategory);
  }


}
