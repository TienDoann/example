import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseCardComponent} from "../components/course-card/course-card.component";

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

}
