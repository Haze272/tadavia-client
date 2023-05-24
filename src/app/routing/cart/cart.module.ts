import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import {SharedModule} from "../../shared/shared.module";
import { CartItemComponent } from './pages/cart-page/cart-item/cart-item.component';

const cartRoutes: Routes = [
  {path: '', component: CartPageComponent}
]

@NgModule({
  declarations: [
    CartPageComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes),
    SharedModule
  ]
})
export class CartModule { }
