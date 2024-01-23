import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../models/video';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Video[], key: string, args?: any):any{
    if(args === '' || args === undefined){
        return value;
    }
    if(key == 'titulo'){
      return value.filter((item) =>
          JSON.stringify(item.title).toLowerCase().includes(args.toLowerCase()));
    }
    if(key == 'categoria'){
      return value.filter((item) =>
          JSON.stringify(item.category).toLowerCase().includes(args.toLowerCase()));
    }
}

}
