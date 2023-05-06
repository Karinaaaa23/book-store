import { NgModule } from '@angular/core';
import {ShippingComponent} from "./shipping.component";
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: ShippingComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShippingRoutingModule{}
