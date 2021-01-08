import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public todos;
  public results: [];
  public inputValue: string;
  public page: number = 1;

  constructor(private http: HttpClient) { }

  setShortDate(str) {
    if (str) return new Date(str.split('-'));
  }
  changePage(event) {
    let targetId = event.target.id;
    this.results = undefined;
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
    this.getData(this.inputValue);
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
  getData(value) {
    if (!value.trim()) return;
    this.inputValue = value;
    this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=1d7f4d3e6182d453261ccff9ce9a14bc&language=en-US&query="${value.toLowerCase()}"&page=${this.page}&include_adult=false`).subscribe(todos => {
      console.log(todos);
      this.todos = todos;
      this.results = this.todos.results;
    });
  }
  ngOnInit(): void {

  }
}
