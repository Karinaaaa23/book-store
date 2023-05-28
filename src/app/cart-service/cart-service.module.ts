import {NgModule,CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CartComponent} from "./cart-service.components";
import {CartRoutingModule} from "./cart-service.routing.module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { MaterialModule } from "../material.module";

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  declarations: [CartComponent]
})

export class CartModule{}
