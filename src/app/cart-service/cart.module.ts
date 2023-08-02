import { ChangeDetectorRef, InjectionToken, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule, MAT_SELECT_TRIGGER } from "@angular/material/select";
import { CartServiceRoutes } from "./cart.service.routing";

@NgModule({
  imports: [CartServiceRoutes],
  exports: [CartServiceRoutes, MatSelectModule, MatSelectModule],
})
export class CartServiceModule {}
