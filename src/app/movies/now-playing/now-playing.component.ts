import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
  todos;
  films;

  setShortDate(str) {
    return new Date(str.split('-'));
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=1d7f4d3e6182d453261ccff9ce9a14bc&language=en-US&page=1").subscribe(todos => {
      console.log(todos);
      this.todos = todos;
      this.films = this.todos.results;
    });
  }

}
