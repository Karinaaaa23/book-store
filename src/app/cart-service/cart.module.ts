import { InjectionToken, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart.component";
import { CartService } from "./cart.service";
import { MatPaginatorModule } from "@angular/material/paginator";

const routes: Routes = [
  {
    path: "",
    component: CartComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MatPaginatorModule],
})
export class CartRoutingModule {}
