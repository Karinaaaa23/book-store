import { NgModule } from '@angular/core';
import {ProductDetailsComponent} from './product-details.component'
import {ProductDetailsRoutingModule} from './product-details-routing.module'
import {CommonModule, CurrencyPipe} from "@angular/common";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  imports:[
    CommonModule,
    MatExpansionModule,
    ProductDetailsRoutingModule,
  ],

  declarations:[ProductDetailsComponent],

})

export class ProductDetailsModule{}
