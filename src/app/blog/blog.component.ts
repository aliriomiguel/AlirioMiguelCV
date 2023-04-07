import { Component } from '@angular/core';
import { AliriomiguelcvService } from '../services/aliriomiguelcv.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  constructor(public cv: AliriomiguelcvService){

  }

}
