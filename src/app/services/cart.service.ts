import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {MenuItem} from "../models/menu-item.model";
import {CartItem} from "../models/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly _cart = new BehaviorSubject<CartItem[]>([]);
  cart: CartItem[] = new Array<CartItem>();

  constructor() {
    this._cart = new BehaviorSubject<CartItem[]>(new Array<CartItem>());
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      this._cart.next(this.cart);
    }
  }

  addToCart(menuItem: MenuItem, quantity: number) {

    if (localStorage.getItem('cart') !== null) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
    }

    let isItemExists: boolean = false;
    for (let item of this.cart) {
      if (item.menuItem.id === menuItem.id) {
        item.quantity += quantity;
        isItemExists = true;
      }
    }
    if (!isItemExists) {
      this.cart.push({
        menuItem: menuItem,
        quantity: quantity
      });
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
    this._cart.next(this.cart);
  }

  increaseCartItemQuantity(id: number) {

  }

  descreaseCartItemQuantity(id: number) {

  }

  setCartItemQuantity(menuItem: MenuItem, quantity: number) {

  }

  deleteItem(id: number) {

  }

  getCart(): Subject<CartItem[]> {
    return this._cart;
  }
}
