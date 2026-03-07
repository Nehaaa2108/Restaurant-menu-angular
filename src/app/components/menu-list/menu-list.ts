import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { MenuService } from '../../services/menu';

import { PriceFilterPipe } from '../../pipes/price-filter-pipe';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PriceFilterPipe,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './menu-list.html',
  styleUrls: ['./menu-list.css']
})
export class MenuListComponent implements OnInit {

  maxPrice = 300;
  showFilter = false;

  menuItems: MenuItem[] = [];

  constructor(
    public cartService: CartService,
    private menuService: MenuService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    this.menuService.getMenuItems().subscribe(data => {
      console.log("MENU DATA:", data);
      this.menuItems = data;
    });

  }

  toggleFilter(){
    this.showFilter = !this.showFilter;
  }

  addToCart(item: MenuItem){
    this.cartService.addItem(item);

    this.snackBar.open(
      `${item.name} added to cart`,
      'OK',
      { duration: 2000 }
    );
  }

  increaseQuantity(item: MenuItem){
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: MenuItem){
    this.cartService.decreaseQuantity(item);
  }

  getQuantity(item: MenuItem){
    const existing = this.cartService.getItems().find(i => i.id === item.id);
    return existing ? existing.quantity : 0;
  }

  
}