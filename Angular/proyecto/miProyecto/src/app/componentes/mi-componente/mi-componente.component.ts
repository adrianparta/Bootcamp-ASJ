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
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3vEryHNY95cmBtjkkTOMrVgU12_cunZG0vewB6WFTQA2oC8j4MFjdkazTZcTMl9LSLkg&usqp=CAU"
    },
    {
      nombre:"Samsung",
      descripcion:"Telefono cuadrado, grande",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6falbvKEBe0jeHEmXYljv8ZHt-Togx1pIztJ5xF0AB2bJgRJLVaNrLsED1ZbNwy4yReY&usqp=CAU"
    }
  ]
}
