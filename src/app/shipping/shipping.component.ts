import { Component, Inject } from "@angular/core";
import { Observable } from "rxjs";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { CartService } from "../cart-service/cart.service";

export interface DialogData {
  firstName: string;
  lastName: string;
}

@Component({
  selector: "app-shipping",
  templateUrl: "shipping.component.html",
  styleUrls: ["./shipping-style.scss"],
})
export class ShippingComponent {
  firstName: string | undefined;
  lastName: string | undefined;

  shippingCosts!: Observable<{ type: string; price: number }[]>;
  constructor(public dialog: MatDialog, private cartService: CartService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(
      ShippingDialog
      // ,
      // data:{firstName: this.firstName, lastName: this.lastName}
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.firstName = result;
    });
  }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}

@Component({
  selector: "shipping-dialog",
  templateUrl: "shipping.component.html",
})
export class ShippingDialog {
  constructor(
    public dialogRef: MatDialogRef<ShippingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
