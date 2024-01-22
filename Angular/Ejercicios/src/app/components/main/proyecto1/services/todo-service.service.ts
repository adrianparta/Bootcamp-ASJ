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

  addTarea(tarea: Tarea): Observable<HttpResponse<any>>{
    return this.http.post(this.url, tarea, { observe: 'response', responseType: 'text' as 'json'  });
  }

  updateTarea(tarea: Tarea): Observable<string>{
    return this.http.put<string>(this.url + '/', tarea);
  }

  deleteTarea(id: number): Observable<string>{
    return this.http.delete<string>(this.url + "/" + id);
  }

}
