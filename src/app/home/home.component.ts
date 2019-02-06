import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
// import { Server } from 'tls';
import { bloomHasToken } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serve: ServiceService ){ }
books = this.serve.getData();
book = this.books.slice(0, 6);
  ngOnInit() {
  }

}
