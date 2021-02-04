import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable()
export class CartService {
  items = [];
  constructor(
    private http: HttpClient
  ) {}

  //Adding data to cart
  addToCart(product) {
    this.items.push(product);
  }

  //getting data from the cart
  getItems() {
    return this.items;
  }

  //clear the cart data
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('./assets/shipping.json')
  }
}
