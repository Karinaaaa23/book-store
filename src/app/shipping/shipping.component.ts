import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {CartService} from "../cart-service/cart.service";

 @Component({
  selector: 'app-shipping',
  templateUrl: 'shipping.component.html',
   styleUrls: ['./shipping-style.scss']
})
//
//
 export class ShippingComponent {
  constructor(
    private cartService: CartService
  ) { }
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }
}
