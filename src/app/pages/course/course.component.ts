import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseCardComponent} from "../components/course-card/course-card.component";

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
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
}
