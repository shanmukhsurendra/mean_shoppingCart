import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private serve: ServiceService) { }
books = this.serve.getData();

  ngOnInit() {
  }

}
