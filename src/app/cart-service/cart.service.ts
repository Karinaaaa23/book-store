import { HttpClient } from "@angular/common/http";
import { Product, products } from "../products";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, filter } from "rxjs";

// import {products} from "../products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  //items: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(products);
  items: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
    const serializedItems = localStorage.getItem("cart");
    if (!serializedItems) {
      console.warn("No cart");
      return;
    }
    const saveProducts = JSON.parse(serializedItems);
    this.items.next(saveProducts);
  }

  private saveItems() {
    console.info("adding items");
    const storageKey = JSON.stringify(this.items.value);
    localStorage.setItem("cart", storageKey);
  }

  addToCart(product: Product): void {
    // const currentData = [...this.items.getValue(), product];
    // this.items.next(currentData);

    const existingProduct = this.items.value.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.amount += 1;
    } else {
      product.amount = 1;
      this.items.next([...this.items.value, product]);
    }
    this.saveItems();
  }

  getItems(): Observable<Product[]> {
    return this.items;
  }

  removeItems(itemToRemove: Product): void {
    const value = this.items.value.filter(
      (item) => item.id !== itemToRemove.id
    );
    this.items.next(value);
    this.saveItems();
  }

  clearCart(): void {
    console.log("clearCart");
    this.items.next([]);
  }

  getShippingItems() {
    return this.http.get<{ id: number; name: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
