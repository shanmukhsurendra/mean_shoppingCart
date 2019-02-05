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
i: number;
book;

  constructor(private serve: ServiceService, private route: ActivatedRoute) { }
 bookes = this.serve.getData();
  ngOnInit() {
 this.i = +this.route.snapshot.paramMap.get('id');
//  this.book = this.serve.getbook(this.i);
  }
  nextpressed() {
    console.log(this.i)
    // if(this.i >= this.bookes.length-1) return;
    this.i += 1;
    // this.book = this.serve.getbook(this.i);
    
  }
  prevpressed() {
    // if(this.i >= 0) {
    this.i -= 1;
    // this.book = this.serve.getbook(this.i);
    // }
  }

}
