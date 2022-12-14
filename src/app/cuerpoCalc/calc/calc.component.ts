import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent implements OnInit {
  screenValue = '';
  result = '';
  historic: object[] = [];


  agregarNuevoNumero(value: any) {
    this.screenValue += value
  }

  borrarNumero(){
    this.screenValue = '';
  }

  erase(){
    this.screenValue = this.screenValue.slice(0, -1);
    console.log('Borrando')
  }

  clean(): void {
    this.screenValue = '';
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


  //-------------Historic Section
  constructor(private modalService: NgbModal) {}

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'calculator-history'});
    console.log('mensaje de modal de calc.component')
  }

  ngOnInit(): void {
  }

}
