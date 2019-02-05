import { Injectable } from '@angular/core';
import { book } from './data';

@Injectable({
  providedIn: 'root'
})
// @Input(): book;

export class ServiceService {
  data = book;
  constructor() { }
  getbook(i) {
    console.log(this.data)
    return this.data.items[i];
  }
  getData() {
    return this.data.items;
  }
}
