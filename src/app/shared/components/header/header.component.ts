import { CommonModule, isPlatformBrowser, ViewportScroller } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  ngOnInit(): void {
  }
  isMenuOpen = false;
  menuItems = [
    { name: 'Home', link: '/', redirectType: false },
    { name: 'About', link: '/about', redirectType: false },
    { name: 'Membership', link: '/membership', redirectType: false },
    { name: 'Magazine', link: '/membership', redirectType: true },   // Redirect to Membership
    { name: 'Podcast', link: '/membership', redirectType: true },    // Redirect to Membership
    { name: 'Course', link: '/membership', redirectType: true },
    { name: 'Store', link: '/store', redirectType: false },
    { name: 'Contact', link: '/contact', redirectType: false }
  ];


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
