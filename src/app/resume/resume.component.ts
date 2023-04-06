import { Component } from '@angular/core';
import { AliriomiguelcvService } from '../services/aliriomiguelcv.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(public cv: AliriomiguelcvService){

  }

}
