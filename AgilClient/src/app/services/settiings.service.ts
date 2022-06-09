import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettiingsService {

  private tab = [];

  constructor() { }

  getAll() {
    return this.tab;
  }

  add(vals) {
    this.tab.push(vals);
  }

  getLast(){
    let last:any = this.tab[this.tab.length-1];
    return last;
  }
}
