import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
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
      image: 'assets/images/course/cs-img1.jpg',
      course: '3 years',
      classSize: '20',
      Duration: '10 Hours',
      price: '999$'
    },
    {
      id: 2,
      name: 'Đoàn Liêng tiến',
      subtitle: 'Công nghệ thông tin',
      text: 'asdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqwasdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqw',
      image: 'assets/images/course/cs-img2.jpg',
      course: '3 years',
      classSize: '20',
      Duration: '10 Hours',
      price: '999$'
    },
    {
      id: 3,
      name: 'Đoàn Liêng tiến',
      subtitle: 'Công nghệ thông tin',
      text: 'asdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqwasdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqw',
      image: 'assets/images/course/cs-img3.jpg',
      course: '3 years',
      classSize: '20',
      Duration: '10 Hours',
      price: '999$'
    },
    {
      id:4,
      name: 'Đoàn Liêng tiến',
      subtitle: 'Công nghệ thông tin',
      text: 'asdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqwasdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqw',
      image: 'assets/images/course/cs-img4.jpg',
      course: '3 years',
      classSize: '20',
      Duration: '10 Hours',
      price: '999$'
    },
    {
      id: 5,
      name: 'Đoàn Liêng tiến',
      subtitle: 'Công nghệ thông tin',
      text: 'asdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqwasdfasdfasmgndfkbglsbafsadf1sa4f6sa1f3a5s4d6fas1df334tq4rqw',
      image: 'assets/images/course/cs-img5.jpg',
      course: '3 years',
      classSize: '20',
      Duration: '10 Hours',
      price: '999$'
    },
  ];
  ngOnInit(){
  }
}
