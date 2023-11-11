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
  data = [
    {
      id: 1,
      name: 'Đoàn Liêng tiến',
    },
    {
      id: 2,
      name: 'Đoàn Liêng tiến',
    },
    {
      id: 3,
      name: 'Đoàn Liêng tiến',
    },
    {
      id: 4,
      name: 'Đoàn Liêng tiến',
    },
  ];
  ngOnInit() {
  console.log('data:::',this.data);

  }
}
