import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {

  constructor(public userService: UsersService, private route: Router, private ruta: ActivatedRoute){
  }
  
  parametroURL = this.ruta.snapshot.params['id'];
  mensaje: string = '';

  resetForm(form: NgForm){
    form.reset();
    this.userService.datosUsuario.id = -1;

    setTimeout(() => {      
      this.mensaje = '';
      this.route.navigate(['/users']);
    }, 2500);
  }

  create(form: NgForm){
    if(form.value.id != -1){
      this.userService.updateUser(form.value).subscribe((res: any) => {
        console.log('Respuesta del put: ', res);
        this.mensaje = 'Usuario actualizado correctamente';
        this.resetForm(form);
      });
    }
    else{
      this.userService.createUser(form.value).subscribe((res: any) => {
        console.log('Respuesta del post: ', res);
        this.mensaje = 'Usuario creado correctamente';
        this.resetForm(form);
      });
    }
  }
}
