import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.scss']
})
export class UpcommingComponent implements OnInit {
  public todos;
  public films: [];
  public page: number = 1;

  constructor(private http: HttpClient) { }

  setShortDate(str) {
    if (str) return new Date(str.split('-'));
  }

  changePage(event) {
    let targetId = event.target.id;
    this.films = undefined;
    switch (targetId) {
      case 'firstPage':
        this.onFirstPage();
        break;
      case 'plusPage':
        this.increasePage();
        break;
      case 'minusPage':
        this.dicreasePage();
        break;
      case 'lastPage':
        this.onLastPage();
        break;
    }
    this.ngOnInit();
  }
  onFirstPage() {
    this.page = 1;
  }
  increasePage() {
    ++this.page;
  }
  dicreasePage() {
    --this.page;
  }
  onLastPage() {
    this.page = this.todos.total_pages;
  }

  ngOnInit(): void {
    this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=1d7f4d3e6182d453261ccff9ce9a14bc&language=en-US&page=${this.page}`).subscribe(todos => {
      console.log(todos);
      this.todos = todos;
      this.films = this.todos.results;
    });
  }
}
