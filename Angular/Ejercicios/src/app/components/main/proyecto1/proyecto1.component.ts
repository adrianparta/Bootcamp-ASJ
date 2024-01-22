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
    id: 0,
    nombre: "",
    descripcion: "",
    estado: true
  }
  filtro = "todas";
  tareas!: Tarea[];
  tareasAux: Tarea[] = [];

  ngOnInit(): void {
    this.obtenerTareas();
      this.tareasAux = this.tareas;
  }

  obtenerTareas(){
    this.serv.getTareas().subscribe((data:any)=>{
      this.tareas = data;
      this.tareasAux = this.tareas;
    });    
  }

  agregar(){
    this.serv.addTarea(this.item).subscribe(()=>{
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

  modificar(item: Tarea){    
      this.serv.updateTarea(item).subscribe(()=>{    
        this.obtenerTareas();        
      });
  }

  completar(item: Tarea){
    item.estado = false;
    this.serv.updateTarea(item).subscribe(()=>{    
      this.obtenerTareas();        
    });
  }


  todas(){
    this.filtro = "todas";
    this.tareasAux = this.tareas;
  }

  completas(){
    this.filtro = "completas";
    this.tareasAux = this.tareas.filter((tarea)=> tarea.estado === false);
  }

  incompletas(){
    this.filtro = "incompletas";
    this.tareasAux = this.tareas.filter((tarea)=> tarea.estado === true);
  }
}

