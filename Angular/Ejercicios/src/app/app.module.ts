import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/main/aside/aside.component';
import { Proyecto1Component } from './components/main/proyecto1/proyecto1.component';
import { Proyecto2Component } from './components/main/proyecto2/proyecto2.component';
import { P3RickMortyServiciosComponent } from './components/main/p3-rick-morty-servicios/p3-rick-morty-servicios.component';
import { ListaComponent } from './components/main/p3-rick-morty-servicios/lista/lista.component';
import { DetalleComponent } from './components/main/p3-rick-morty-servicios/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AsideComponent,
    Proyecto1Component,
    Proyecto2Component,
    P3RickMortyServiciosComponent,
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
