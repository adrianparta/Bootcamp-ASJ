import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewVideoComponent } from './components/new-video/new-video.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListVideosComponent } from './components/list-videos/list-videos.component';
import { ViewVideoComponent } from './components/view-video/view-video.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewVideoComponent,
    ListVideosComponent,
    ViewVideoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
