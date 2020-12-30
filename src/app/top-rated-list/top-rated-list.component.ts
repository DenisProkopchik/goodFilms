import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-rated-list',
  templateUrl: './top-rated-list.component.html',
  styleUrls: ['./top-rated-list.component.scss']
})
export class TopRatedListComponent implements OnInit {
  todos;
  films;

  setShortDate(str) {
    return new Date(str.split('-'));
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=1d7f4d3e6182d453261ccff9ce9a14bc&language=en-US&page=1").subscribe(todos => {
      console.log(todos);
      this.todos = todos;
      this.films = this.todos.results;
    });
  }
}
