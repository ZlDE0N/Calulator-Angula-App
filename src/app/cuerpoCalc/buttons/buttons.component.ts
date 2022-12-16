import { Component, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() screenValue = '';
  @Input() result = '';
  // @Input() historic: object[] = [];


  //----Pasar datos al screen perteneciente al componente calc---
  @Output() onNuevoNumero: EventEmitter<any> = new EventEmitter<any>();
  // Borrar Screen totalmente
  @Output() onBorrarNumeros: EventEmitter<any> = new EventEmitter<any>();
  //Borrar numeros de la pantalla
  @Output() onEraseNumber: EventEmitter<any> = new EventEmitter<any>();
  //Modal para el historial 
 @Output() onModalHistorial: EventEmitter<any> = new EventEmitter<any>();
 //Navegar al historial
 @Output() onNavegarHistory: EventEmitter<any> = new EventEmitter<any>();


  //------Agregar Numero al Screen-----
  add(value): void {
    this.onNuevoNumero.emit(this.screenValue + value);
  }

  //------Borrar Screen-------
  clean() {
    this.onBorrarNumeros.emit(this.screenValue = '')
    // console.log('Borrando numero')
  }

  //--------Borrar Numero--------
  erase(): void{
    this.onEraseNumber.emit(this.screenValue = this.screenValue.slice(0, -1));;  
    // console.log('borrando numero')
  }

  //------Constructor para la nevgacion del rout------
  constructor(public router: Router){}

  //------ Evento para la navegacion entre paginas------
  navegar(){
    this.router.navigate(['historial'])
  }

}

