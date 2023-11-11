import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentListComponent} from "../../components/comment-list/comment-list.component";
import {TeacherCourseCardComponent} from "../../components/teacher-course-card/teacher-course-card.component";

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, CommentListComponent, TeacherCourseCardComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  categories: any[] = [];
}
