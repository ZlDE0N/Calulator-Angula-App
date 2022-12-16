import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialService } from '../service/historial.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent{
  //Propiedades
  screenValue = '';
  result = '';
 

  //----Metodo agregado del componente hijo buttons---
  agregarNuevoNumero(value: any) {
    this.screenValue += value
  }
  //----Metodo boton borrar screen del componente hijo buttons----
  borrarNumero(){
    this.screenValue = '';
  }

  //---Metodo borrar un numero individualmente del componente buttons ---
  erase(){
    this.screenValue = this.screenValue.slice(0, -1);
    // console.log('Borrando')
  }
  //---Metodo para Borrar todo el screen referente al boton equal, en la seccion del catch error---
  clean(): void {
    this.screenValue = '';
    // console.log('Deleting number')
  }

  //-------Evaluacion de expresiones----------
  equal(): void {
    this.result = (eval(this.screenValue)).toString();
    try {
      if (this.result === 'Infinity') {
      this.screenValue = 'Error!';
      } else {
        this.historic.push({count: this.screenValue, result: this.result});
        this.screenValue = this.result;
      }
    } catch (error) {
      this.clean();
      alert('Ha ocurrido un error: ' + error.message);
    }
  }  
  //---------Final de Evaluar Expresiones----------


  //-------------Historic Section------------------
  get historic():object[] {
     return this.historialService.historic;
  }  

  constructor(private modalService: NgbModal, private router: Router, private historialService: HistorialService) {
  }

  // open(content): void {
  //   this.modalService.open(content, {ariaLabelledBy: 'calculator-history'});
  //   console.log('mensaje de modal de calc.component')
  // }

  navegar(){
    this.router.navigate(['historial'])
  }
  
}
