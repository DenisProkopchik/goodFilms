import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SetShortDateService } from '../../servises/set-short-date.service';
import { GetDataService } from '../../servises/get-data.service';
import { CountPageService } from '../../servises/count-page.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  public data;
  public nameOfComponent = { kind: 'popular', type: 'movie' };
  public results: [];
  public page: number = 1;

  constructor(
    public SetShortDateService: SetShortDateService,
    public GetDataService: GetDataService,
    private CountPageService: CountPageService
  ) { }


  changePage(event) {
    this.page = this.CountPageService.changePage(event.target.id, this.page, this.data);
    this.results = undefined;
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.GetDataService.getData(this.nameOfComponent, this.page).subscribe(data => {
      console.log(data);
      this.data = data;
      this.results = this.data.results;
    });
  }
}
