import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Product_details } from "../product-details.service";
import { Product } from "../products";

@Component({
  selector: "app-cart",
  templateUrl: "./cart-service.components.html",
  styleUrls: ["./cart-service-style.scss"],
})
export class CartComponent implements OnInit {
  product: Product | undefined;
  items = this.cartService.getItems();
  clearItems = this.cartService.clearCart();

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("This product has been added to the cart");
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    // this.product = product.find((product: { id: number; }) => product.id === productIdFromRoute);
    this.route.data.subscribe((data) => {
      const productDetails: Product_details = data["Product_details"];
    });
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
}

// onSubmit(): void {
//   this.items = this.cartService.clearCart();
//   console.warn("Your order has been submitted");
// }
// }
