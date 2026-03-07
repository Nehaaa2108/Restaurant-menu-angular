import { Routes } from '@angular/router';
import { cartGuard } from './guards/cart-guard';
export const routes: Routes = [

  
  {
path: '',
loadComponent: () =>
import('./components/home/home')
.then(m => m.HomeComponent)
},
{
path: '',
loadComponent: () =>
import('./components/home/home')
.then(m => m.HomeComponent)
},
  {
    path: 'menu',
    loadComponent: () =>
      import('./components/menu-list/menu-list')
        .then(m => m.MenuListComponent)
  },

  {
    path: 'menu/:id',
    loadComponent: () =>
      import('./components/menu-detail/menu-detail')
        .then(m => m.MenuDetailComponent)
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('./components/cart/cart')
        .then(m => m.CartComponent)
  },

  {
    path: 'checkout',
    loadComponent: () =>
      import('./components/checkout/checkout')
        .then(m => m.CheckoutComponent),
    canActivate: [cartGuard]
  },

  {
    path: 'success',
    loadComponent: () =>
      import('./components/order-success/order-success')
        .then(m => m.OrderSuccessComponent)
  },

  {
    path: 'order',
    loadComponent: () =>
      import('./components/order-form/order-form')
        .then(m => m.OrderFormComponent)
  }

];
