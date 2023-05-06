import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from "@angular/material/expansion";
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
//import {ProductListModule} from "./product-list/product-list.module";
import {CartModule} from "./cart-service/cart-service.module";
//import {ProductDetailsModule} from "./product-details/product-details.module";



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatExpansionModule,
        CartModule,
],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
