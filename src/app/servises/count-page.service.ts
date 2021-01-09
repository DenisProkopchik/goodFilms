import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountPageService {

  constructor() { }
  changePage(targetId, page, data) {
    switch (targetId) {
      case 'firstPage':
        return this.onFirstPage(page);
      case 'plusPage':
        return this.increasePage(page);
      case 'minusPage':
        return this.dicreasePage(page);
      case 'lastPage':
        return this.onLastPage(page, data);
    }
  }
  onFirstPage(page) {
    return page = 1;
  }
  increasePage(page) {
    return ++page;
  }
  dicreasePage(page) {
    return --page;
  }
  onLastPage(page, data) {
    return page = data.total_pages;
  }
}
