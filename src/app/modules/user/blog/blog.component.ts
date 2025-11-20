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
      title: 'How to Build Trust as a Leader: 10 Proven Strategies for Modern CEOs',
      slug: 'how-to-build-trust-as-a-leader-2025',
      excerpt: "Learn how to build trust as a leader with practical, actionable strategies CEOs and...",
      date: '2025-11-19',
      author: 'CEO Square Team',
    }

  ];
}
