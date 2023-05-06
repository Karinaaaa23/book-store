import { Injectable } from '@angular/core';
import {resolve} from "@angular/compiler-cli";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
// import {Observable} from "rxjs";

export interface Product_details{
  name: string;
  price:number;
}
// @Injectable({
//   providedIn: 'root'
// })
// export class ProductDetailsService implements Resolve<Product_details>{
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
//     Observable <Product_details> {
//       return null;
//   }
//
// }
