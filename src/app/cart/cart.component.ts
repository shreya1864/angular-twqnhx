import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {    
  }

  routeToError() {
    this.router.navigateByUrl("error");
  }
}
