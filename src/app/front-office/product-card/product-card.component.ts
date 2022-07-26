import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/model/product";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  disabledButton: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.checkCart();
  }

  checkCart() {
    let productList = localStorage.getItem("cart");
    if (productList != null) {
      let itemsInCart = JSON.parse(productList);
      if (itemsInCart.indexOf(this.product._id) != -1) {
        this.disabledButton = true;
      }
    }
  }

  addToCart() {
    let productList = localStorage.getItem("cart");
    let itemsInCart: any;
    itemsInCart = [];
    if (productList == null) {
      itemsInCart.push(this.product._id);
    } else {
      itemsInCart = JSON.parse(productList);
      if (itemsInCart.indexOf(this.product._id) == -1) {
        itemsInCart.push(this.product._id);
      }
    }
    localStorage.setItem('cart', JSON.stringify(itemsInCart));
    this.checkCart();
  }

}
