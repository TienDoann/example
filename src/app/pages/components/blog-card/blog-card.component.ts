import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    items: 3,
    margin: 20,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
    },
    nav: true,
  };

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

  ngOnInit() {
  }
}
