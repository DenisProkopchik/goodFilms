import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetShortDateService {

  constructor() { }

  setShortDate(str) {
    if (str) return new Date(str.split('-'));
  }
}
