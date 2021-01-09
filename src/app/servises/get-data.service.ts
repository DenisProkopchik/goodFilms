import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GetDataService {

  constructor(
    private http: HttpClient,
  ) { }
  @Output() onAddData = new EventEmitter;

  getData(nameOfComponent, page) {
    return this.http.get(`https://api.themoviedb.org/3/${nameOfComponent.type}/${nameOfComponent.kind}?api_key=1d7f4d3e6182d453261ccff9ce9a14bc&language=en-US&page=${page}`);
  }
}
