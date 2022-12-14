//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common'; //Aqui es donde viene las propiedades y metodos basicos y necesarios de angular
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { MainPageModule } from './cuerpoCalc/main-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
