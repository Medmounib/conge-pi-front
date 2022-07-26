import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/model/product";
import {ActivatedRoute, Router} from '@angular/router';
import {StoreService} from "../../shared/services/store.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductCategory} from "../../shared/model/productCategory";


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productCategories: ProductCategory[];
  product: Product = new Product();
  editForm: boolean = false;
  categorySelected: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private storeService: StoreService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    if (id != null) {
      this.editForm = true;
      this.getProduct(id);
    }
    this.getAllCategories();
  }

  getProduct(id: string) {
    this.storeService.getProductById(id).subscribe(
      (response: Product) => {
        this.product = response;
        this.categorySelected = this.product.category;
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
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  save() {
    this.product.category = this.categorySelected;

    let date = new Date();
    if (this.editForm) {
      this.product.dateUpdate = date;
      this.storeService.editProduct(this.product).subscribe(
        (response: Product) => {
          this.product = response;
          this.router.navigate(['/back-office/produit'])
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    } else {
      this.product.inStock = true;
      this.product.dateCreation = date;
      this.storeService.addProduct(this.product).subscribe(
        (response: Product) => {
          this.product = response;
          this.router.navigate(['/back-office/produit'])
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    // TODO Add user

  }
}
