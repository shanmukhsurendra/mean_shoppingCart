import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { ActivatedRoute } from '@angular/router';
import {book} from '../data'; 
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
i: any;
book;
  constructor(private serve: ServiceService, private route: ActivatedRoute) { }
//  book = this.serve.getData(i);
  ngOnInit() {
 this.i = this.route.snapshot.paramMap.get('id');
 this.book = this.serve.getbook(this.i);
  }

}
