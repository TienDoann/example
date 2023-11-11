import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CourseComponent} from "./pages/course/course.component";
import {CoursedDetailComponent} from "./pages/course/coursed-detail/coursed-detail.component";
import {TeacherComponent} from "./pages/teacher/teacher.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {TeacherDetailComponent} from "./pages/teacher/teacher-detail/teacher-detail.component";
import {BlogDetailComponent} from "./pages/blog/blog-detail/blog-detail.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'courses',component:CourseComponent},
  {path: 'course-details',component:CoursedDetailComponent},
  {path: 'teachers',component:TeacherComponent},
  {path: 'teacher-details',component:TeacherDetailComponent},
  {path: 'blogs',component:BlogComponent},
  {path: 'blog-details',component:BlogDetailComponent}
];

