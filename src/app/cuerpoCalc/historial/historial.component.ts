import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistorialService } from '../service/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {

  //Indentificador = propiedad
  // @Input() historic: object[] = [];


  //----Navegacion----
  navegar(){
    this.router.navigate(['calc']);
  }

  //----Traer informacion del historial.service----
  get historic():object[] {
    return this.historialService.historic;
 }  

  //-----El constructor tiene la inyeccion de dependencias-----
  constructor(private modalService: NgbModal,  public router: Router, private historialService: HistorialService){}

  //----Metodo para abrir el modal---- 
  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'calculator-history'});
    // console.log('mensaje de modal de buttons.component')
  }
}
