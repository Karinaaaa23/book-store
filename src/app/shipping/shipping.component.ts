import { Component, Inject, Input } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
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

  shippingCosts!: Observable<{ name: string; price: number }[]>;
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
