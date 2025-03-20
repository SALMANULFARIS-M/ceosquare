import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-course',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

}
