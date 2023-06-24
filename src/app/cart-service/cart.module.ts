import { InjectionToken, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart.component";
import { CartService } from "./cart.service";

const routes: Routes = [
  {
    path: "",
    component: CartComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
