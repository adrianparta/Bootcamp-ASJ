import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './componentes/mi-componente/mi-componente.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { NgFooterComponent } from './componentes/ng-footer/ng-footer.component';
import { AddComponent } from './componentes/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    NavBarComponent,
    NgFooterComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
