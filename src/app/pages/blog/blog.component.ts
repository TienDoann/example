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
  data = [
    {
      id: 1,
      name: 'Đoàn Liêng tiến',
      subtitle: 'Công nghệ thông tin',
      text: 'asdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqwasdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqw',
      image: 'assets/images/blog/blog-thumbnail1.jpg',
    },
    {
      id: 2,
      name: 'Đoàn Liêng tiến',
      subtitle: 'Công nghệ thông tin',
      text: 'asdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqwasdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqw',
      image: 'assets/images/blog/blog-thumbnail2.jpg',
    },
    {
      id: 3,
      name: 'Đoàn Liêng tiến',
      subtitle: 'Công nghệ thông tin',
      text: 'asdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqwasdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqw',
      image: 'assets/images/blog/blog-thumbnail3.jpg',
    },
    {
      id: 4,
      name: 'Đoàn Liêng tiến',
      subtitle: 'Công nghệ thông tin',
      text: 'asdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqwasdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqw',
      image: 'assets/images/blog/blog-thumbnail4.jpg',

    },
  ];
}
