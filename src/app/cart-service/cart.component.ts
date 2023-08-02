import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { CartService } from "./cart.service";
import { ActivatedRoute } from "@angular/router";
import { Product_details } from "../product-details.service";
import { Product, products } from "../products";
import { Observable } from "rxjs";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.service.html",
  styleUrls: ["./cart-style.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  product: Product | undefined;
  items!: Observable<Product[]>;
  cartItems = 0;

  numbersOfItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  totalAmount: Observable<number> = this.cartService.getTotalSum();
  totalCartItems: Observable<number> = this.cartService.getTotalNumOfItems();

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.items = this.cartService.items.asObservable();
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));
    this.route.data.subscribe((data) => {
      const productDetails: Product_details = data["Product_details"];
    });
  }

  numOfItems(numOfItems: number, product: Product): void {
    this.cartService.updateCartItem(product, numOfItems);
  }

  addToCart(product: Product, amount: number): void {
    this.cartService.addToCart(product);

    window.alert("This product has been added to the cart");

    this.changeDetectorRef.detectChanges();
  }

  removeItems(productToRemove: Product) {
    this.cartService.removeItems(productToRemove);
  }

  getTotalSumCart() {
    return this.cartService.getTotalSum();
  }
}
