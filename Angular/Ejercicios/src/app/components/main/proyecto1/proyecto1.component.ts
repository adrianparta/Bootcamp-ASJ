import { Component, OnInit } from '@angular/core';
import { Tarea } from './model/tarea';
import { TodoServiceService } from './services/todo-service.service';

@Component({
  selector: 'app-proyecto1',
  templateUrl: './proyecto1.component.html',
  styleUrl: './proyecto1.component.css'
})
export class Proyecto1Component implements OnInit{

  constructor(public serv: TodoServiceService) {}

  item: Tarea = {
    nombre: "",
    descripcion: "",
    estado: true
  }

  tareas!: Tarea[];
  filtro: string = "todas";

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(){
    this.serv.getTareas().subscribe((data:any)=>{
      this.tareas = data;
    });
  }

  agregar(){
    this.serv.addTarea(this.item).subscribe(()=>{
      console.log("pase por aca");
      
      this.obtenerTareas();
    });
    this.item.nombre = "";
  }
  
  borrar(id:number | undefined){
    if(id !== undefined){
      this.serv.deleteTarea(id).subscribe(()=>{
        this.obtenerTareas();
      });
    }
  }
  completar(i: number | undefined){
    console.log(this.tareas);
    
    if(i !== undefined){
    this.item = this.tareas.splice(i,1)[0];
    this.tareas.push(this.item);
    }
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

