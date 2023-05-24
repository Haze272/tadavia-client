import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../../../services/cart.service";
import {Subscription} from "rxjs";
import {CartItem} from "../../../../models/cart-item";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  cart: CartItem[] = [];
  cartSub!: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartSub = this.cartService.getCart().subscribe((data: CartItem[]) => {
      this.cart = data;
      console.log('Change detected', data);
    })
  }

  ngOnDestroy() {
    this.cartSub.unsubscribe();
  }
}
