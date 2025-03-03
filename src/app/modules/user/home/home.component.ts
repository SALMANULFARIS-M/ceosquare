import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { interval } from 'rxjs';
import { fadeSlide } from '../../../shared/constants/animation';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [fadeSlide]
})

export class HomeComponent implements OnInit {
  images = ['/head.webp', '/head2.png'];
  currentImage = this.images[0];
  animationState: 'enter' | 'leave' = 'enter';
  private index = 0;
  interval: string | number | NodeJS.Timeout | undefined
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.interval = setInterval(() => {
        this.animationState = 'leave';
        setTimeout(() => {
          this.index = (this.index + 1) % this.images.length;
          this.currentImage = this.images[this.index];
          this.animationState = 'enter';
        }, 800); // Match with animation duration
      }, 4000);
    }
  }

  features = [
    {
      title: "Elite Global Network",
      description: "Connect with top-tier executives across industries and regions through curated networking events and digital platforms.",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    },
    {
      title: "Executive Mentorship",
      description: "Gain personalized insights from seasoned industry leaders through one-on-one coaching and mastermind sessions.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Exclusive Summits",
      description: "Participate in invitation-only leadership conferences featuring thought-provoking keynotes and interactive workshops.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      title: "Strategic Investment",
      description: "Access curated investment opportunities and connect with qualified investors seeking transformative business ventures.",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Executive Resources",
      description: "Leverage proprietary research, leadership frameworks, and decision-making tools developed for the modern executive.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "Leadership Innovation",
      description: "Discover cutting-edge leadership methodologies and future-focused organizational strategies before they reach the mainstream.",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    }
  ];
  testimonials = [
    {
      name: 'Shaaz',
      designation: 'CEO – Ique Cap, Bengaluru, India',
      message: 'Joining CEO Square has been a game-changer for my business. The networking opportunities provided have connected me with key leaders and investors who have helped take Ique Cap to the next level. The leadership training programs are top-notch, offering practical strategies that I’ve applied directly to my business. CEO Square truly understands what CEOs need to grow and thrive in today’s competitive environment.',
      initial: 'S',
      image: 'assets/testimonials/shaaz.jpg' // Replace with actual image URL or leave null
    },
    {
      name: 'Shefin',
      designation: 'CEO – StudyinBengaluru, Bengaluru, India',
      message: 'As the CEO of a rapidly growing education platform, I needed guidance to navigate the challenges of scaling effectively. CEO Square provided not only valuable networking but also strategic business coaching that directly impacted our success. The exclusive podcasting opportunities have also allowed me to amplify my voice and reach a wider audience. CEO Square offers the perfect blend of leadership training, networking, and exposure.',
      initial: 'S',
      image: null // No image, so initials will be shown
    },
    {
      name: 'Hashim',
      designation: 'CEO – Career Cafe, Bengaluru, India',
      message: 'CEO Square has been a transformative experience for me and my businesses. The level of support, expertise, and networking opportunities is unmatched. I’ve formed connections that have opened doors I didn’t even know existed. From personalized leadership coaching to podcasting that elevated my brand, CEO Square has become an indispensable part of my growth strategy. For any CEO looking to expand and innovate, this platform is a must.',
      initial: 'H',
      image: 'assets/testimonials/hashim.jpg'
    }
  ];

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      clearInterval(this.interval);
    }
  }
}




