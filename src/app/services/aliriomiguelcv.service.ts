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
  blog: any[] = [];

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
    this.getBlog();
  }

  private getSkills(): void {
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/Skills.json')
      .subscribe(
        (resp: any) => {
          this.skills = resp
        }
      );
  }

  private getTechStack(){
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/TechStack.json')
      .subscribe(
        (resp: any) => {
          this.techStack = resp;
        }
      );

  }

  private getQAStack(){
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/QAStack.json')
      .subscribe(
        (resp: any) => {
          this.qaStack = resp;
        }
      );

  }

  private getExperience(){
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/Experience.json')
      .subscribe(
        (resp: any) => {
          this.experience = resp;
        }
      );

  }

  private getEducation(){
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/Education.json')
      .subscribe(
        (resp: any) => {
          this.education = resp;
        }
      );

  }

  private getServices(){

    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/Services.json')
      .subscribe(
        (resp: any) => {
          this.services = resp;
        }
      );
  }

  private getTestimonials(){
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/Testimonials.json')
      .subscribe(
        (resp: any) => {
          this.testimonials = resp;
        }
      );

  }

  private getBlog(){
    this.http.get('https://cvaliriomiguel-default-rtdb.firebaseio.com/Blog.json')
      .subscribe(
        (resp: any) =>{
          this.blog = resp;
        }
      );
  }
}
