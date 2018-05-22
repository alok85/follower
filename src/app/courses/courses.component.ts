import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})


export class CoursesComponent implements OnInit {
  
  courses:string[];
  isActive : boolean;
  email = "abc@gmail.com";
  imageUrl = "../../assets/camera.jpg"; 
  constructor(course : CourseService) {
   this.courses = course.getCourses();
   this.isActive =true;
   }

   getClicked(){
     console.log("btn was clicked.");
   }

   onKeyUp() {
    console.log("Enter key  was pressed.");
   }

   getEmail() {
    console.log(this.email);
   }

  ngOnInit() {
  }

}
