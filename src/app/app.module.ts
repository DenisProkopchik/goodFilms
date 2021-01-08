import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopRatedListComponent } from './movies/top-rated-list/top-rated-list.component';
import { PopularComponent } from './movies/popular/popular.component';
import { NowPlayingComponent } from './movies/now-playing/now-playing.component';
import { UpcommingComponent } from './movies/upcomming/upcomming.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopRatedListComponent,
    PopularComponent,
    NowPlayingComponent,
    UpcommingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
