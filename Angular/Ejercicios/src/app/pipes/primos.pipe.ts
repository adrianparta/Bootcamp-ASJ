import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primos'
})
export class PrimosPipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): any {
    value.forEach(e => {
      for (let i = 2; i < e; i++) {
        if(e%i==0){
          value.splice(value.indexOf(e),1);
        }
      }
    });
    return value;
  }

}
