import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto2',
  templateUrl: './proyecto2.component.html',
  styleUrl: './proyecto2.component.css',
})
export class Proyecto2Component {
  nombrePersonaje: string = '';
  urlPersonaje: string = '';
  profesionPersonaje: string = '';

  Simpson!: Simpsons;

  listaPersonajes: Simpsons[] = [];

  agregar(){
    this.Simpson = {
      nombrePersonaje: this.nombrePersonaje,
      urlPersonaje: this.urlPersonaje,
      profesionPersonaje: this.profesionPersonaje,
    };
    this.listaPersonajes.push(this.Simpson);
    this.nombrePersonaje = '';
    this.urlPersonaje = '';
    this.profesionPersonaje = '';
  }
}

type Simpsons = {
  nombrePersonaje: string;
  urlPersonaje: string;
  profesionPersonaje: string;
};
