import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ceosquare';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
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
