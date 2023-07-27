import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrdersRoutingModule } from "./orders-routing.module";
import { OrdersComponent } from "./orders.component";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { CartComponent } from "../cart-service/cart.component";
import { CartModule } from "../cart-service/cart-service.module";
import { MatSidenavModule } from "@angular/material/sidenav";
@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
    CartModule,
  ],
})
export class OrdersModule {}
