import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor(public userService: UsersService){}

  users: any = {};
  mensaje: string = '';

  //listado de usuarios
  ngOnInit(): void {
    this.list();
  }

  //Resetear formulario
  resetForm(form: NgForm){
    form.reset();
    this.userService.datosUsuario.id = -1;

    setTimeout(() => {
      this.mensaje = '';
    }, 3500);
  }

  //Listar usuarios
  list(){
    this.userService.getUsers().subscribe((res: any) => {
      console.log('Respuesta del get: ', res);
      this.users = res.data;
    });   
  }

  //Nuevo Usuario/Actualizar Usuario
  create(form: NgForm){
    if(form.value.id != -1){
      this.userService.updateUser(form.value).subscribe((res: any) => {
        console.log('Respuesta del put: ', res);
        this.list();
        this.mensaje = 'Usuario actualizado correctamente';
        this.resetForm(form);
      });
    }
    else{
      this.userService.createUser(form.value).subscribe((res: any) => {
        console.log('Respuesta del post: ', res);
        this.list();
        this.mensaje = 'Usuario creado correctamente';
        this.resetForm(form);
      });
    }
  }

  //Eliminar usuario
  delete(id: any){
    let confirmacion = confirm('¿Estas seguro de eliminar este usuario?');
    if(confirmacion){
      this.userService.deleteUser(id).subscribe((res:any)=>{
        console.log('Respuesta del delete: ', res);
        this.list();
      });
    }
  }

  //Actualizar usuario
  update(user: any){
    this.userService.datosUsuario = {
      id: user.id,
      name: user.first_name,
      job: 'Albañil'
    };
  }
  
}
