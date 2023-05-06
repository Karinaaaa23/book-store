import { NgModule } from '@angular/core';
import {ShippingComponent} from "./shipping.component";
import {ShippingRoutingModule} from "./shipping-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    ShippingRoutingModule
  ],

  declarations:[ShippingComponent]
})

export class ShippingModule{}
