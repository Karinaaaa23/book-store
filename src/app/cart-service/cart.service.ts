import { HttpClient } from "@angular/common/http";
import { Product, products } from "../products";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, filter } from "rxjs";
// import {products} from "../products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(products);

  constructor(private http: HttpClient) {}

  addToCart(product: Product): void {
    const newData = [...this.items.value];
    this.items.next(newData);
  }

  getItems(): Observable<Product[]> {
    return this.items;
  }

  removeItems(itemToRemove: Product): void {
    const value = this.items.value.filter(
      (item) => item.id !== itemToRemove.id
    );
    this.items.next(value);
  }

  clearCart(): void {
    console.log("clearCart");
    this.items.next([]);
  }

  getShippingPrices() {
    return this.http.get<{ id: number; name: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
