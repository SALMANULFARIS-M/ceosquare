import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Top 10 Leadership Podcasts to Follow in 2025 | CEO Square');
    this.meta.updateTag({
      name: 'description',
      content: ` Discover the top leadership podcasts every CEO and entrepreneur should follow in 2025. Gain insights from global business minds and explore the CEO Square Podcast for exclusive conversations.
`
    });

    if (isPlatformBrowser(this.platformId)) {
      const toTopButton = document.getElementById("to-top-button") as HTMLElement;
      // Scroll event listener (only in browser)
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          toTopButton?.classList.remove("hidden");
        } else {
          toTopButton?.classList.add("hidden");
        }
      });
    }
  }
  goToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
