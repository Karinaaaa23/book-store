import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailsComponent} from './product-details.component'
//import {ProductDetailsService} from "../product-details.service";

const routes: Routes = [{
  path: '',
  component: ProductDetailsComponent,
  // resolve:{
  //   productDetails: ProductDetailsService
  // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductDetailsRoutingModule{}
