import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/model/product";
import {HttpErrorResponse} from "@angular/common/http";
import {StoreService} from "../../shared/services/store.service";
import {ProductListActionsComponent} from "../product-list-actions/product-list-actions.component";
import {Subject} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  settings = {
    attr: {
      class: 'table table-bordered',
    },
    hideSubHeader: true,
    actions: false,
    columns: {
      title: {
        title: 'Titre',
        filter: false
      },
      description: {
        title: 'Description',
        filter: false,
        type: 'html',
        valuePrepareFunction: (cell: any) => {
          return '<span class="d-inline-block text-truncate element-max-width">'+cell+'</span>';
        }
      },
      dateCreation: {
        title: 'Date de creation',
        filter: false
      },
      inStock: {
        title: 'Disponibilité',
        filter: false
      },
      _id: {
        title: 'Actions',
        filter: false,
        type: 'custom',
        valuePrepareFunction: (cell: any, row: any) => {
          return row;
        },
        renderComponent: ProductListActionsComponent
      }
    }
  };

  public static updateList: Subject<boolean> = new Subject();

  constructor(private storeService: StoreService) {
    ProductListComponent.updateList.subscribe(res => {
      this.getAllProducts();
    })
  }

  ngOnInit(): void {
    this.getAllProducts();
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
}
