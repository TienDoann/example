import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogCardComponent} from "../components/blog-card/blog-card.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
