import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder, Validator } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  routeToError() {
    this.router.navigateByUrl("error");
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn(
      "Items Submitted",
      this.checkoutForm.value,
      this.checkoutForm.value
    );
    this.checkoutForm.reset();
  }
}
