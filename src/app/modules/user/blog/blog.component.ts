import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  blogs = [
    {
      id: 1,
      title: 'Top 10 Leadership Podcasts to Follow in 2025 | CEO Square',
      slug: 'top-leadership-podcasts-2025',
      excerpt:
        "Discover the top leadership podcasts every CEO and entrepreneur should follow in 2025...",
      date: '2025-10-30',
      author: 'CEO Square Team',
    },
    {
      id: 2,
      title: 'Mastering Growth Mindset for Modern Leaders',
      slug: 'growth-mindset-for-leaders',
      excerpt:
        'Learn how growth mindset principles can transform leadership effectiveness and team performance in 2025.',
      date: '2025-09-22',
      author: 'CEO Square Editorial',
    },
  ];


}
