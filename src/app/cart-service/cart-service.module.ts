import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CartComponent } from "./cart.component";
import { CartServiceModule } from "./cart.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";

@NgModule({
  imports: [
    CommonModule,
    CartServiceModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartModule {}
