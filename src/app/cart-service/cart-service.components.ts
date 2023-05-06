import {Component} from "@angular/core";
import {CartService} from "./cart.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart-service.components.html',
  styleUrls: ['./cart-service-style.scss']
})

export class CartComponent{
  items = this.cartService.getItems();

  clearItems = this.cartService.clearCart()

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void{
  this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted',
      this.checkoutForm.value);
    this.checkoutForm.reset();

  }
}

