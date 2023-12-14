import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto1',
  templateUrl: './proyecto1.component.html',
  styleUrl: './proyecto1.component.css'
})
export class Proyecto1Component {
  item!: Item;
  tareas: Item[] = [];
  isCompletedArray:boolean[] = [];
  eliminadasArray: Item[] = [];

  filtro = '';

  agregar(){
    this.tareas.unshift(this.item);
    this.item.nombre = '';
    this.isCompletedArray.push(false);
  }

  completar(i: number){
    console.log(this.tareas);
    
    this.item = this.tareas.splice(i,1)[0];
    this.item.filtro = "completa";
    this.tareas.push(this.item);
    this.isCompletedArray.splice(0,1);
    this.isCompletedArray.push(true);    
  }

  borrar(i:number){
    this.item = this.tareas.splice(i,1)[0];
    this.eliminadasArray.push(this.item);
    
  }

  todas(){
    this.filtro = "todas";
  }

  completas(){
    this.filtro = "completa";
  }

  incompletas(){
    this.filtro = "incompleta"; 
  }

  eliminadas(){
    this.filtro = "eliminada"
    console.log("pase");
  }
}

type Item = {nombre: string, filtro: string};
