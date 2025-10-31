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
    this.title.setTitle('CEO Square: Global Community for Top CEOs & Business Leaders');
    this.meta.updateTag({
      name: 'description',
      content: `Join CEO Square, the exclusive global community where top CEOs and entrepreneurs unite. Expand your network, enhance leadership skills, and position your business for success.`
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'CEO community, global CEO network, top entrepreneurs, business leaders network, executive networking, leadership skills, business success, future of business, CEO resources, business growth'
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
