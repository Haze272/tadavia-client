import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { HomePageComponent } from './pages/home-page/home-page.component';
import {SharedModule} from "../../shared/shared.module";
import { MenuItemComponent } from './pages/home-page/menu-item/menu-item.component';

const homeRoutes: Routes = [
  {path: '', component: HomePageComponent}
]

@NgModule({
  declarations: [
    HomePageComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SharedModule
  ]
})
export class HomeModule { }
