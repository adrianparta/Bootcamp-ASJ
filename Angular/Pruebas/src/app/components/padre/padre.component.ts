import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  mensaje = "Mensaje del padre al hijo";
  
  recibirMsj(msj: string) {
    this.mensajeHijo = msj;
  }

  mensajeHijo: string = "";
}
