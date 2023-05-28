import {NgModule} from '@angular/core';
import {PreloadAllModules} from '@angular/router';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {CartComponent} from "./cart-service/cart-service.components";
import {ProductDetailsComponent} from "./product-details/product-details.component";

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule),
  },

  {
    path: 'product-list',
    // component: ProductListComponent
    loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule),
  },

  {
    path: 'products/:productId',
    loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule),
  },
  {
    path: 'cart',
    // loadChildren: ()=> import ('./cart-service/cart-service.module').then(m => m.CartModule)
    component: CartComponent
  },
  {
    path: 'shipping',
    loadChildren: () => import('./shipping/shipping.module').then(m => m.ShippingModule)
  },

  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],


  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
