import {Component, Input} from '@angular/core';
import {CartItem} from "../../../../../models/cart-item";
import {CartService} from "../../../../../services/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item!: CartItem;

  constructor(private cartService: CartService) {
  }

  changeQuantity($event: number) {
    this.item.quantity = $event;
  }

  deleteItemFromCart() {
    this.cartService.deleteItem(this.item.menuItem.id);
  }
}
