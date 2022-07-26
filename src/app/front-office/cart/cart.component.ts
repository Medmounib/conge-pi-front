import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/model/product";
import {HttpErrorResponse} from "@angular/common/http";
import {StoreService} from "../../shared/services/store.service";
import {environment} from "../../../environments/environment";
import {Stripe} from "@stripe/stripe-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  emptyCart: boolean = true;
  cartItems: Product[] = [];
  totalPrice: any = 0;
  paymentHandler: any = null;

  success: boolean = false

  failure:boolean = false

  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {
  }

  getCartProducts() {
    let productList = JSON.parse(localStorage.getItem("cart"));
    if (productList != null) {
      this.emptyCart = false;
      let that = this;
      productList.forEach(function (element: any) {
        that.storeService.getProductById(element).subscribe(
          (response: Product) => {
            if (!that.cartItems.some(e => e._id === element)) {
              that.cartItems.push(response);
              that.totalPrice += response.price;
            }
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      })
    }
  }

  clearCart() {
    localStorage.removeItem("cart");
    this.cartItems = [];
    this.emptyCart = true;
    this.totalPrice = 0;
    var input = document.getElementsByClassName('cart-button');
    for (var i = 0; i < input.length; i++) {
      input[i].removeAttribute('disabled');
    }
  }

  makePayment() {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: environment.stripe_api_key,
      locale: 'auto',
      token: function (stripeToken: any) {
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
      let productList = JSON.parse(localStorage.getItem("cart"));
      this.storeService.makePayment(stripeToken, this.totalPrice, productList).subscribe((data: any) => {
        this.clearCart();
      });
    };

    paymentHandler.open({
      name: 'Achat de produits',
      amount: this.totalPrice * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: environment.stripe_api_key,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
}
