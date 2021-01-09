import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NowPlayingComponent } from './movies/now-playing/now-playing.component';
import { UpcommingComponent } from './movies/upcomming/upcomming.component';
import { PopularComponent } from './movies/popular/popular.component';
import { TopRatedListComponent } from './movies/top-rated-list/top-rated-list.component';
import { TopRatedShowsComponent } from './tvShow/top-rated-shows/top-rated-shows.component';
import { PopularTvComponent } from './tvShow/popular-tv/popular-tv.component';
import { OnTheAirComponent } from './tvShow/on-the-air/on-the-air.component';
import { AiringTodayComponent } from './tvShow/airing-today/airing-today.component';
import { PopularPeopleComponent } from './people/popular-people/popular-people.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/top-rated', component: TopRatedListComponent },
  { path: 'movies/popular', component: PopularComponent },
  { path: 'movies/now-playing', component: NowPlayingComponent },
  { path: 'movies/upcoming', component: UpcommingComponent },
  { path: 'shows/top-rated-tv', component: TopRatedShowsComponent },
  { path: 'shows/popular-tv', component: PopularTvComponent },
  { path: 'shows/on-the-air', component: OnTheAirComponent },
  { path: 'shows/airing-today', component: AiringTodayComponent },
  { path: 'people/popular', component: PopularPeopleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
