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

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }
  ngOnInit(): void {
  }
  isMenuOpen = false;
  menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Membership', link: '/membership' },
    { name: 'Magazine', link: '/magazine' },   // Corrected link
    { name: 'Podcast', link: '/podcast' },    // Corrected link
    { name: 'Course', link: '/course' },      // Corrected link
    { name: 'Store', link: '/store' },
    { name: 'Contact', link: '/contact' }
  ];


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
