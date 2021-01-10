import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SetShortDateService } from '../servises/set-short-date.service';
import { CountPageService } from '../servises/count-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data;
  public results: [];
  public inputValue: string;
  public page: number = 1;

  constructor(
    private http: HttpClient,
    public SetShortDateService: SetShortDateService,
    private CountPageService: CountPageService
  ) { }

  changePage(event) {
    this.page = this.CountPageService.changePage(event.target.id, this.page, this.data);
    this.results = undefined;
    this.getData(this.inputValue);
  }

  getNewData(value) {
    this.page = 1;
    this.getData(value);
  }

  getData(value) {
    if (!value.trim()) return;
    this.inputValue = value;
    this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=1d7f4d3e6182d453261ccff9ce9a14bc&language=en-US&query="${value.toLowerCase()}"&page=${this.page}&include_adult=false`).subscribe(data => {
      console.log(data);
      this.data = data;
      this.results = this.data.results;
    });
  }
  ngOnInit(): void {

  }
}
