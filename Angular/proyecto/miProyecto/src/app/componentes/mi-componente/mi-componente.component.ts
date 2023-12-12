import { Component } from '@angular/core';

@Component({
  selector: 'lista',
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css'
})
export class MiComponenteComponent {
  productos = [
    {
    nombre:"Iphone",
    descripcion:"Un telefono de apple",
    imagen:"https://blog.hootsuite.com/wp-content/uploads/2023/09/5.jpeg"
    },
    {
      nombre:"Iphone",
      descripcion:"Un telefono de apple",
      imagen:"https://blog.hootsuite.com/wp-content/uploads/2023/09/5.jpeg"
    }
  ]
}
