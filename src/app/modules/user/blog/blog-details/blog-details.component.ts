import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import blogsData from '../../../../../assets/blogs/blog-contents.json';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-details',
  imports: [HeaderComponent, FooterComponent, CommonModule,],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {
  blog: any;

  constructor(private route: ActivatedRoute, private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.blog = blogsData.find((b: { slug: string | null; }) => b.slug === slug);
    if (this.blog) {
      this.title.setTitle(`${this.blog.title} | CEO Square`);
      this.meta.updateTag({
        name: 'description',
        content: this.blog.metaDescription
      });
    }
  }
  formatBlockText(text: string): string {
    return text ? text.replace(/\n/g, '<br>') : '';
  }
}
