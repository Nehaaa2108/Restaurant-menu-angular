import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CartService } from '../services/cart';

export const cartGuard: CanActivateFn = () => {

  const cartService = inject(CartService);

  if (cartService.getItems().length > 0) {
    return true;
  }

  alert("Cart is empty!");
  return false;
};