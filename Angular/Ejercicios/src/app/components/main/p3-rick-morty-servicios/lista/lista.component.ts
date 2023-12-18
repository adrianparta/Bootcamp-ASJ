import { Component, OnInit } from '@angular/core';
import { ServRickMortyService } from '../../../../services/serv-rick-morty.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{

  personajes: any = [];

  constructor(public serv:ServRickMortyService) {}

  ngOnInit(): void {
    this.personajes = this.serv.getPersonajes().subscribe((data: any)=>{
      this.personajes = data.results;
      console.log(this.personajes);
      
    });
  }
}

