import { Injectable, signal } from '@angular/core';

export interface CartItem {
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  addItem(item: CartItem) {
    this.cartItems.update(items => [...items, item]);
  }

  removeItem(index: number) {
    this.cartItems.update(items => items.filter((_, i) => i !== index));
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
