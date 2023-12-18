import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServRickMortyService {

  constructor(private http: HttpClient) {
  }

  public getPersonajes(){
    return this.http.get('https://rickandmortyapi.com/api/character/?page=1');  
  }

  public getDetallePersonaje(id:string){
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
