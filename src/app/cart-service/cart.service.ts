import { HttpClient } from '@angular/common/http';
import {Product, products} from "../products";
import { Injectable } from '@angular/core';
// import {products} from "../products";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product [] = [];
  constructor(
    private http: HttpClient
  ) {}
  addToCart(product: Product){
  this.items.push(product);
  }
  getItems (){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
    }
}
