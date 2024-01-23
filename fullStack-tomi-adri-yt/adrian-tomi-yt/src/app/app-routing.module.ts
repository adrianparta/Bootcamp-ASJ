import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVideosComponent } from './components/list-videos/list-videos.component';
import { NewVideoComponent } from './components/new-video/new-video.component';
import { ViewVideoComponent } from './components/view-video/view-video.component';

const routes: Routes = [
  {path: 'videos', children: [
    {path: '', component: ListVideosComponent},
    {path: '0', component: NewVideoComponent},
    {path: ':id', component: ViewVideoComponent},
    {path: '**', redirectTo: ""},
  ]},
  {path: '**', redirectTo: "videos"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
