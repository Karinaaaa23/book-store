import { HttpClient } from "@angular/common/http";
import { Product, products } from "../products";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, filter } from "rxjs";
import { count, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CartService {
  getTotalSumCart() {
    throw new Error("Method not implemented.");
  }
  //items: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(products);
  items: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  // selectedQuantity: BehaviorSubject<number> = new BehaviorSubject<number>(1);
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
  }

  getShippingItems() {
    return this.http.get<{ id: number; name: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
