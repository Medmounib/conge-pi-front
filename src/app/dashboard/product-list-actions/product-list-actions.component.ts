import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from "ng2-smart-table";
import {StoreService} from "../../shared/services/store.service";
import {Product} from "../../shared/model/product";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductListComponent} from "../product-list/product-list.component";
import {Router} from "@angular/router"

@Component({
  selector: 'app-product-list-actions',
  templateUrl: './product-list-actions.component.html',
  styleUrls: ['./product-list-actions.component.css']
})
export class ProductListActionsComponent implements OnInit, ViewCell {

  @Input() value: any;
  @Input() rowData: any;

  constructor(private storeService: StoreService, private router: Router) {
  }

  ngOnInit(): void {
  }

  editProduct() {
    this.router.navigate(['/back-office/product/edit', this.rowData._id])
  }

  deleteProduct() {
    this.storeService.deleteProduct(this.rowData._id).subscribe(
      (response: Product[]) => {
        ProductListComponent.updateList.next(true);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
