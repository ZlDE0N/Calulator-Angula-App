import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcComponent } from './cuerpoCalc/calc/calc.component';
import { HistorialComponent } from './cuerpoCalc/historial/historial.component';
;

// Rutas de navegacion
const routes: Routes = [
  {
    path: '',
    redirectTo: 'calc',
    pathMatch: 'full'
  },
  {
    path: 'historial',
    component: HistorialComponent
  },
  {
    path: 'calc',
    component: CalcComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
