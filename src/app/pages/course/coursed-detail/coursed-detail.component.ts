import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentListComponent} from "../../components/comment-list/comment-list.component";
import {TeacherCourseCardComponent} from "../../components/teacher-course-card/teacher-course-card.component";

@Component({
  selector: 'app-coursed-detail',
  standalone: true,
  imports: [CommonModule, CommentListComponent, TeacherCourseCardComponent],
  templateUrl: './coursed-detail.component.html',
  styleUrl: './coursed-detail.component.css'
})
export class CoursedDetailComponent {

}
