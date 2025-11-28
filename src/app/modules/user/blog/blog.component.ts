import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import {blogsData} from '../../../../assets/blogs/index';

@Component({
  selector: 'app-blog',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogs = blogsData;
}
