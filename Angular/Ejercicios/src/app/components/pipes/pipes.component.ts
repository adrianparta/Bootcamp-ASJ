import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  array: number[] = [1,2,3,4,5,6,7,8,9,10,11];
  elemento!:number; 
  agregarElemento() {
    this.array.push(this.elemento);
    console.log(this.array);
  }
}
