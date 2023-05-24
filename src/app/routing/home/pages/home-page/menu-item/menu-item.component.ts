import {Component, Input} from '@angular/core';
import {MenuItem} from "../../../../../models/menu-item.model";
import {CartService} from "../../../../../services/cart.service";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() item!: MenuItem;

  constructor(private cartService: CartService) {
  }

  addItemToCart() {
    this.cartService.addToCart(this.item, 1);
  }
}
