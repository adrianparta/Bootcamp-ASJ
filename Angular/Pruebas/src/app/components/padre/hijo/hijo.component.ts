import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() datoEnviado: any;
  @Output() mensaje: EventEmitter<string>;

  enviarMsj() {
    this.mensaje.emit('Mensaje del hijo al padre');
  }

  constructor() {
    this.mensaje = new EventEmitter();
  }
}
