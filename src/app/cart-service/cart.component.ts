import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Product_details } from "../product-details.service";
import { Product, products } from "../products";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.html",
  styleUrls: ["./cart-style.scss"],
})
export class CartComponent implements OnInit {
  product: Product | undefined;
  items!: Observable<Product[]>;
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    // console.log("sssss", cartService.items.value);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("This product has been added to the cart");
  }

  // getCountItems(product: Product): number {
  //   this.items.subscribe();
  // }

  removeItems(productToRemove: Product) {
    this.cartService.removeItems(productToRemove);
  }

  ngOnInit(): void {
    this.items = this.cartService.items.asObservable();
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));
    this.route.data.subscribe((data) => {
      const productDetails: Product_details = data["Product_details"];
    });
  }
}
