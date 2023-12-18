import { Component, OnInit } from '@angular/core';
import { ServRickMortyService } from '../../../../services/serv-rick-morty.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{

  id = (this.ruta.snapshot.params['id']);
  

  personaje: any = [];

  constructor(public serv:ServRickMortyService, private ruta:ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.id);
    
    this.serv.getDetallePersonaje(this.id).subscribe((data: any)=>{
      this.personaje = data;
      console.log(this.personaje);
    });
  }
}
