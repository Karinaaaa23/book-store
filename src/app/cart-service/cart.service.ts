import { HttpClient } from "@angular/common/http";
import { Product, products } from "../products";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
// import {products} from "../products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  products = products;
  constructor(private http: HttpClient) {}

  addToCart(product: Product): void {
    const newData = [...this.items.value, product];
    this.items.next(newData);
  }

  getItems(): Observable<Product[]> {
    return this.items;
  }

  // removeItems(): Observable<Product[]>{
  //   this.items.subscribe(data => {i});
  // }

  clearCart(): void {
    this.items.next([]);
  }

  getShippingPrices() {
    return this.http.get<{ name: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
