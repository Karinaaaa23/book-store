import { Component, Input } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { CartService } from "../cart-service/cart.service";
import { Product, products } from "../products";

// export interface DialogData {
//   firstName: string;
//   lastName: string;
// }

@Component({
  selector: "app-shipping",
  templateUrl: "shipping.component.html",
  styleUrls: ["./shipping-style.scss"],
})
export class ShippingComponent {
  items!: Observable<Product[]>;

  shippingCosts!: Observable<{ id: number; name: string; price: number }[]>;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
    this.items = this.cartService.getItems();
    // this.items.subscribe((items: any) => {
    //   (name: string) => {
    //     number;
    //   };
    // });
  }

  completeOrder() {
    this.cartService.getItems();
  }
}
