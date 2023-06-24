import { Component, OnInit } from "@angular/core";
import { Product, products } from "../products";
import { CartService } from "../cart-service/cart.service";
import { ActivatedRoute } from "@angular/router";
import { Product_details } from "../product-details.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details-style.scss"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("This product has been added to the cart");
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
    this.route.data.subscribe((data) => {
      const productDetails: Product_details = data["Product_details"];
    });
  }
}
