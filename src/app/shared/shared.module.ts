import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {RouterLink} from "@angular/router";
import { HeadingUnderlineComponent } from './components/heading-underline/heading-underline.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { QuantityControlComponent } from './components/quantity-control/quantity-control.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HeadingUnderlineComponent,
    MainButtonComponent,
    QuantityControlComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HeadingUnderlineComponent,
    MainButtonComponent,
    QuantityControlComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage
  ]
})
export class SharedModule { }
