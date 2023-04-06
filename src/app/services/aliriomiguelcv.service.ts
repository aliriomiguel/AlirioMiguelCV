import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AliriomiguelcvService {

  skills: any[] = [];
  techStack: any[] = [];
  qaStack: any[] = [];
  experience: any[] = [];
  education: any[] = [];
  services: any[] = [];
  testimonials: any[] = [];

  corsHeaders: HttpHeaders;

  constructor(private http: HttpClient) { 
    
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.getSkills();
    this.getTechStack();
    this.getQAStack();
    this.getExperience();
    this.getEducation();
    this.getServices();
    this.getTestimonials(); 
  }

  private getSkills(): void {
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/Skills.json')
      .subscribe(
        (resp: any) => {
          this.skills = resp
          console.log(this.skills);
        }
      );
  }

  private getTechStack(){
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/TechStack.json')
      .subscribe(
        (resp: any) => {
          this.techStack = resp;
          console.log(this.techStack);
        }
      );

  }

  private getQAStack(){
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/QAStack.json')
      .subscribe(
        (resp: any) => {
          this.qaStack = resp;
          console.log(this.qaStack);
        }
      );

  }

  private getExperience(){
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/Experience.json')
      .subscribe(
        (resp: any) => {
          this.experience = resp;
          console.log(this.experience);
        }
      );

  }

  private getEducation(){
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/Education.json')
      .subscribe(
        (resp: any) => {
          this.education = resp;
          console.log(this.education);
        }
      );

  }

  private getServices(){

    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/Services.json')
      .subscribe(
        (resp: any) => {
          this.services = resp;
          console.log(this.services);
        }
      );
  }

  private getTestimonials(){
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/Testimonials.json')
      .subscribe(
        (resp: any) => {
          this.testimonials = resp;
          console.log(this.testimonials);
        }
      );

  }
}
