import { Component } from "@angular/core";
import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./produc-lists-style.scss"],
})
export class ProductListComponent {
  products = products;

  onNotify() {
    window.alert(
      "You will be notified when the product goes on sale and you can buy it"
    );
  }
}
