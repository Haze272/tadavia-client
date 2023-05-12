import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const cartRoutes: Routes = [
  {path: '', component: CartPageComponent}
]

@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes)
  ]
})
export class CartModule { }
