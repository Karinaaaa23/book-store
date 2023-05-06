import {NgModule} from "@angular/core";
import {CartComponent} from "./cart-service.components";
import {CartRoutingModule} from "./cart-service.routing.module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule],
  declarations: [CartComponent]
})

export class CartModule{}
