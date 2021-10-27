import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(searchTerm == undefined) return value;

    return value.filter(function(search:Employee){
      return search.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase() );
    });
  }

}
