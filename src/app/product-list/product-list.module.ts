import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list.component";
import { ProductListRoutingModule } from "./product-list.routing.module";
import { CommonModule } from "@angular/common";
import { ProductAlertsComponent } from "../product-alerts/product-alerts.component";

@NgModule({
  declarations: [ProductListComponent, ProductAlertsComponent],
  imports: [CommonModule, ProductListRoutingModule],
})
export class ProductListModule {}
