import { Injectable } from "@angular/core";
import { resolve } from "@angular/compiler-cli";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface Product_details {
  name: string;
  price: number;
}
