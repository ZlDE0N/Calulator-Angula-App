import { Component, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() screenValue = '';
  @Input() result = '';
  @Input() historic: object[] = [];


  //Pasar datos al screen
  @Output() onNuevoNumero: EventEmitter<any> = new EventEmitter<any>();
  // Borrar Screen totalmente
  @Output() onBorrarNumero: EventEmitter<any> = new EventEmitter<any>();
  //Borrar numeros de la pantalla
  @Output() onEraseNumber: EventEmitter<any> = new EventEmitter<any>();
  //Modal para el historial 
 @Output() onModalHistorial: EventEmitter<any> = new EventEmitter<any>();

  //Agregar Numero al Screen
  add(value): void {
    this.onNuevoNumero.emit(this.screenValue + value);
  }



  // }


  //Borrar Screen
  clean() {
    this.onBorrarNumero.emit(this.screenValue = '')
  }

  //Borrar Numero
  erase(): void{
    this.onEraseNumber.emit(this.screenValue = this.screenValue.slice(0, -1));;  
    // console.log('borrando numero')
  }
constructor(private modalService: NgbModal){}

  open(content): void {
    this.onModalHistorial.emit(this.modalService.open(content, {ariaLabelledBy: 'calculator-history'}));
    console.log('mensaje de modal de buttons.component')
  }

}

