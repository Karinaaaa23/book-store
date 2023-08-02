import { HttpClient } from "@angular/common/http";
import { Product, products } from "../products";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, filter } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CartService {
  getTotalSumCart() {
    throw new Error("Method not implemented.");
  }
  // private selectedProduct: BehaviorSubject<Product | undefined> =
  //   new BehaviorSubject<Product | undefined>(undefined);

  items: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  total = 0;

  constructor(private http: HttpClient) {
    const serializedItems = localStorage.getItem("cart");

    if (!serializedItems) {
      console.warn("No cart");
      return;
    }
    const saveProducts = JSON.parse(serializedItems);
    this.items.next(saveProducts);
  }

  getItems(): Observable<Product[]> {
    return this.items;
  }

  private saveItems() {
    console.info("adding items");
    const storageKey = JSON.stringify(this.items.value);
    localStorage.setItem("cart", storageKey);
  }

  addToCart(product: Product) {
    const currentData = [...this.items.value, product];
    const amountProduct = product.amount;
    const existingProduct = this.items.value.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.amount += amountProduct;
    } else {
      product.amount = amountProduct;
      this.items.next(currentData);
    }

    this.saveItems();
    this.getTotalSum();
    this.getTotalNumOfItems();
    // this.updateSelectedProduct(product);
    // this.changeDetectorRef.detectChanges();
  }

  updateCartItem(product: Product, quantity: number): void {
    const cartItems = this.items.value;

    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.amount = quantity;
    }

    this.items.next(cartItems);
    this.saveItems();
    this.getTotalSum();
    this.getTotalNumOfItems();
  }

  removeItems(itemToRemove: Product): void {
    const value = this.items.value.filter(
      (item) => item.id !== itemToRemove.id
    );
    this.items.next(value);
    this.saveItems();
    this.getTotalSum();
    this.getTotalNumOfItems();
  }

  getTotalSum(): Observable<number> {
    return this.items.pipe(
      map((items) =>
        items.reduce((sum, item) => sum + item.price * item.amount, 0)
      )
    );
  }

  getTotalNumOfItems(): Observable<number> {
    return this.items.pipe(
      map((item) =>
        this.items.value.reduce((count, item) => count + item.amount, 0)
      )
    );
  }

  clearCartCache(): void {
    console.log("clearCart");
    this.items.next([]);
    this.saveItems();
  }

  getShippingItems() {
    return this.http.get<{ id: number; name: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
