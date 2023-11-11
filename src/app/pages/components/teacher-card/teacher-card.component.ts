import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-teacher-card',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './teacher-card.component.html',
  styleUrl: './teacher-card.component.css',
})
export class TeacherCardComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    items: 4,
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
      940: {
        items: 4,
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
      image: '../../../assets/images/teacher/teacher-member1.jpg',
    },
    {
      id: 2,
      name: 'Đoàn Liêng tiến',
      subtitle: 'Công nghệ thông tin',
      text: 'asdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqwasdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqw',
      image: '../../../assets/images/teacher/teacher-member1.jpg',
    },
    {
      id: 3,
      name: 'Đoàn Liêng tiến',
      subtitle: 'Công nghệ thông tin',
      text: 'asdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqwasdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqw',
      image: '../../../assets/images/teacher/teacher-member1.jpg',
    },
    {
      id: 4,
      name: 'Đoàn Liêng tiến',
      subtitle: 'Công nghệ thông tin',
      text: 'asdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqwasdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqw',
      image: '../../../assets/images/teacher/teacher-member1.jpg',
    },
  ];

  ngOnInit() {
  }
}
