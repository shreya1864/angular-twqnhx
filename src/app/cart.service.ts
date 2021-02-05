import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
@Injectable()
export class CartService implements OnInit {
items = [];
constructor(
@Inject(LOCAL_STORAGE) private storage: StorageService,
private http: HttpClient
) { }
ngOnInit(){
this.items = this.storage.get('myCart') ? this.storage.get('myCart') : [];
}
//Adding data to cart
addToCart(product){
this.items.push(product);
this.storage.set("myCart", this.items);
}
//getting data from the cart
getItems(){
this.storage.get("myCart");
return this.items;
}
//clear the cart data
clearCart(){
this.items = [];
this.storage.remove("myCart");
return this.items;
}
getShippingPrices(){
return this.http.get('./assets/shipping.json');
}
}
