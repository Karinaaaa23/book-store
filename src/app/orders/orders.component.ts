import { Component } from "@angular/core";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.html",
  styleUrls: ["./orders-style.scss"],
})
export class OrdersComponent {
  constructor() {
    console.log("OrdersComponent");
  }
}
