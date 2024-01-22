import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../model/tarea';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) {}

  url:string = "http://localhost:8080/tareas";

  getTareas():Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.url);
  }

  addTarea(tarea: Tarea): Observable<any>{
    return this.http.post(this.url, tarea, { responseType: 'text' });
  }
  
  updateTarea(tarea: Tarea): Observable<any>{
    
    return this.http.put(this.url + '/' + tarea.id, tarea, { responseType: 'text' });
  }

  deleteTarea(id: number): Observable<any>{
    return this.http.delete(this.url + "/" + id, { responseType: 'text' });
  }

}
