import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: ['',Validators.required],
    address: ['',Validators.required]
  })
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
  }

  routeTo400(){
    this.router.navigateByUrl('page-not-found');
  }

  routeTo500(){
    this.router.navigateByUrl('internal-server-error');
  }

  routeToGenericError(){
    this.router.navigateByUrl('error');
  }

  onSubmit(): void{
    //Clear the Cart
    this.items = this.cartService.clearCart();
    console.warn('Your oder has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}