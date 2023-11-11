import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherCardComponent} from "../components/teacher-card/teacher-card.component";

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule, TeacherCardComponent],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {

}
