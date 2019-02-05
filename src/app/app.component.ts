import { Component, Input } from '@angular/core';
import { ServiceService} from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// @Input() data;
export class AppComponent {
  title = 'project';
  constructor(private serve: ServiceService ){
  }
}
