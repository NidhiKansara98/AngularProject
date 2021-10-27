import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'search'
})
export class SearchingPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    return value.filter(function(search:Employee){
      return search.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
  }

}
