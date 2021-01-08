import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NowPlayingComponent } from './movies/now-playing/now-playing.component';
import { UpcommingComponent } from './movies/upcomming/upcomming.component';
import { PopularComponent } from './movies/popular/popular.component';
import { TopRatedListComponent } from './movies/top-rated-list/top-rated-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'top-rated', component: TopRatedListComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'now-playing', component: NowPlayingComponent },
  { path: 'upcoming', component: UpcommingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
