import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CourseCardComponent } from '../components/course-card/course-card.component';
import { TeacherCardComponent } from '../components/teacher-card/teacher-card.component';
import { EventCardComponent } from '../components/event-card/event-card.component';
import { BlogCardComponent } from '../components/blog-card/blog-card.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CourseCardComponent,
    TeacherCardComponent,
    EventCardComponent,
    BlogCardComponent,
    FooterComponent,
    CarouselModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    items:1,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };

  data = [
    {
      id: 1,
      image: '../../../assets/images/teacher/teacher-member1.jpg',
    },
    {
      id: 2,
      image: '../../../assets/images/teacher/teacher-member2.jpg',
    },
    {
      id: 3,
      image: '../../../assets/images/teacher/teacher-member3.jpg',
    },
    {
      id: 4,
      image: '../../../assets/images/teacher/teacher-member1.jpg',
    },
  ];
  ngOnInit(){
  }
}
