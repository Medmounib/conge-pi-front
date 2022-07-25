import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {StoreService} from "../../shared/services/store.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductCategory} from "../../shared/model/productCategory";

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {

  categories: ProductCategory[];

  settings = {
    attr: {
      class: 'table table-bordered',
    },
    actions: {
      position: "right"
    },
    add: {
      addButtonContent: 'Ajouter une categorie',
      createButtonContent: '<i class="fa fa-check"></i>',
      cancelButtonContent: '<i class="fa fa-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="fa fa-edit"></i>',
      saveButtonContent: '<i class="fa fa-check"></i>',
      cancelButtonContent: '<i class="fa fa-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      confirmDelete: true
    },
    columns: {
      name: {
        title: 'Nom de categorie',
        filter: false
      }
    }
  };

  public static updateList: Subject<boolean> = new Subject();

  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.storeService.getAllCategories().subscribe(
      (response: ProductCategory[]) => {
        this.categories = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSaveConfirm(event: any) {
    let category = new ProductCategory();
    category._id = event.data._id;
    category.name = event.newData.name;
    this.storeService.editProductCategory(category).subscribe(
      (response: ProductCategory) => {
        event.confirm.resolve(event.newData);
      },
      (error: HttpErrorResponse) => {
        event.confirm.reject();
      }
    );
  }

  onDeleteConfirm(event: any) {
    this.storeService.deleteProductCategory(event.data._id).subscribe(
      (response: ProductCategory[]) => {
        event.confirm.resolve();
      },
      (error: HttpErrorResponse) => {
        event.confirm.reject();
      }
    );
  }

  onCreateConfirm(event: any) {
    let category = new ProductCategory();
    category.name = event.newData.name;
    this.storeService.addProductCategory(category).subscribe(
      (response: ProductCategory) => {
        event.confirm.resolve(event.newData);
      },
      (error: HttpErrorResponse) => {
        event.confirm.reject();
      }
    );
  }
}

