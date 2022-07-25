import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../shared/services/store.service";
import {Product} from "../../shared/model/product";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductCategory} from "../../shared/model/productCategory";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  productCategories: ProductCategory[];
  selectedCategories: any[] = [];

  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories()
  }

  getAllProducts() {
    this.storeService.getAllProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getAllCategories() {
    this.storeService.getAllCategories().subscribe(
      (response: ProductCategory[]) => {
        this.productCategories = response;
        console.log(this.productCategories)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  handleCategoryCheckBox(id: string) {
    if (this.selectedCategories.indexOf(id) == -1) {
      this.selectedCategories.push(id);
    } else {
      let that = this;
      this.selectedCategories.forEach(function (value, key) {
          if (value == id) {
          that.selectedCategories.splice(key, 1);
        }
      })
    }
  }

}
