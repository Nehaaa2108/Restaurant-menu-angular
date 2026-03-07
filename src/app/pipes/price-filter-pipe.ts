import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter',
  standalone: true
})
export class PriceFilterPipe implements PipeTransform {

  transform(items: any[], maxPrice: number): any[] {
    if (!items || !maxPrice) {
      return items;
    }

    return items.filter(item => item.price <= maxPrice);
  }
}
