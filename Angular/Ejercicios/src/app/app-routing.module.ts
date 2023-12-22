import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Proyecto1Component } from './components/main/proyecto1/proyecto1.component';
import { Proyecto2Component } from './components/main/proyecto2/proyecto2.component';
import { P3RickMortyServiciosComponent } from './components/main/p3-rick-morty-servicios/p3-rick-morty-servicios.component';
import { DetalleComponent } from './components/main/p3-rick-morty-servicios/detalle/detalle.component';
import { PipesComponent } from './components/pipes/pipes.component';

const routes: Routes = [
  {path: 'proyecto1', component: Proyecto1Component},
  {path: 'proyecto2', component: Proyecto2Component},
  {path: 'rick-morty', component: P3RickMortyServiciosComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'rick-morty',
    children: [
      {path: '', component: P3RickMortyServiciosComponent},
      {path: 'detalle/:id', component: DetalleComponent}
    ]
  },
  {path: 'pipes', component: PipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
