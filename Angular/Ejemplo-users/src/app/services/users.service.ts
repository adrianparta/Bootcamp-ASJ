import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  datosUsuario: any = {
    id: -1,
    name: '',
    job: ''
  };

  URL_API = 'https://reqres.in/api/users';

  //GET USUARIOS
  public getUsers(): Observable<any> {
    return this.http.get(this.URL_API);
  }

  //POST USUARIO
  createUser(user:any): Observable<any>{
    return this.http.post(this.URL_API, user);
  }

  public deleteUser(id: any): Observable<any>{
    return this.http.delete(`${this.URL_API}/${id}`);
  }

  public updateUser(user: any): Observable<any>{
    return this.http.put(`${this.URL_API}/${user.id}`, user);
  }
}
