import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherCardComponent} from "../components/teacher-card/teacher-card.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TeacherCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
