import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {

  transform(items:any[], category:string){

    if(!items) return [];

    if(category === 'All') return items;

    return items.filter(item => item.category === category);

  }

}