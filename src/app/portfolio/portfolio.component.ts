import { Component } from '@angular/core';
import { AliriomiguelcvService } from '../services/aliriomiguelcv.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(public cv: AliriomiguelcvService){

  }

}
