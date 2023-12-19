import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserAddComponent } from './components/user-add/user-add.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'user', children:[
    {path: '', component: UserAddComponent},
    {path: ':id', component: UserAddComponent}
  ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
