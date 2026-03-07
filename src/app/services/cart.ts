import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:any[] = [];

  addItem(item:any){

    const existing = this.items.find(i => i.id === item.id);

    if(existing){
      existing.quantity++;
    }else{
      this.items.push({...item, quantity:1});
    }
  }

  increaseQuantity(item:any){

    const existing = this.items.find(i => i.id === item.id);

    if(existing){
      existing.quantity++;
    }else{
      this.items.push({...item, quantity:1});
    }

  }

  decreaseQuantity(item:any){

    const existing = this.items.find(i => i.id === item.id);

    if(existing){
      existing.quantity--;

      if(existing.quantity <= 0){
        this.removeItem(item);
      }
    }

  }

  removeItem(item:any){
    this.items = this.items.filter(i => i.id !== item.id);
  }

  getItems(){
    return this.items;
  }

  getTotal(){
    return this.items.reduce((total,item)=>
      total + item.price * item.quantity
    ,0);
  }

  getCount(){
  return this.items.reduce((count,item)=>count + item.quantity,0);
}
}