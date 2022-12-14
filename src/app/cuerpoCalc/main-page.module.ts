import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './calc/calc.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ScreenComponent } from './screen/screen.component';





@NgModule({
  declarations: [
    CalcComponent,
    ScreenComponent,
    ButtonsComponent
  ],
  exports: [
    CalcComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainPageModule { }
