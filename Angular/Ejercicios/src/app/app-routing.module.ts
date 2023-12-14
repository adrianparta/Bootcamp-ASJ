import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Proyecto1Component } from './components/main/proyecto1/proyecto1.component';
import { Proyecto2Component } from './components/main/proyecto2/proyecto2.component';

const routes: Routes = [
  {path: 'proyecto1', component: Proyecto1Component},
  {path: 'proyecto2', component: Proyecto2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
