import { animation, state, trigger } from "@angular/animations";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDrawerMode, MatSidenav } from "@angular/material/sidenav";
import { MatSidenavModule } from "@angular/material/sidenav";
import { Product } from "./products";
import { CartService } from "./cart-service/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  @ViewChild("sidenav", { static: true })
  sidenav!: MatSidenav;
  // items: ;

  // cartState$ = this.cartService.state$;

  opened = false;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {}

  toggleSidenav() {
    this.sidenav.toggle();
  }
  title(title: any) {
    throw new Error("Method not implemented.");
  }

  onNotify() {
    window.alert("You haven't chosen anything yet");
  }
}
