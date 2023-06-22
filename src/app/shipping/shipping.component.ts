import { Component, Inject } from "@angular/core";
import { Observable } from "rxjs";
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
  // firstName: string | undefined;
  // lastName: string | undefined;
  @Inject(CartService)
  public service!: CartService;

  shippingCosts!: Observable<{ type: string; price: number }[]>;
  items: Product[] = [];
  products = products;
  constructor(public dialog: MatDialog, private cartService: CartService) {}

  getItems(): void {
    this.items = this.cartService.getItems();
  }
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}

// openDialog(): void {
//   const dialogRef = this.dialog.open(
//     ShippingDialog
//     // ,
//     // data:{firstName: this.firstName, lastName: this.lastName}
//   );

// dialogRef.afterClosed().subscribe((result) => {
//   console.log("The dialog was closed");
//   // this.firstName = result;
// });
//}

// @Component({
//   selector: "shipping-dialog",
//   templateUrl: "shipping.component.html",
// })
// export class ShippingDialog {
//   constructor(
//     public dialogRef: MatDialogRef<ShippingDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: MatDialog,
//     @Inject(CartService) public service: CartService
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }}
