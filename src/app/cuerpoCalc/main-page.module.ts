import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './calc/calc.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ScreenComponent } from './screen/screen.component';
import { HistorialComponent } from './historial/historial.component';
import { HistorialService } from './service/historial.service';






@NgModule({
  declarations: [
    CalcComponent,
    ScreenComponent,
    ButtonsComponent,
    HistorialComponent
  ],
  exports: [
    CalcComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ //Aqui van todos los servicios
    HistorialService
  ]
})
export class MainPageModule { }
