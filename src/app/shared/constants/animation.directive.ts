import { Directive, ElementRef, AfterViewInit, Inject, PLATFORM_ID, Input, HostBinding, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appAnimation]'
})
export class AnimationDirective implements AfterViewInit {
  @Input('appAnimation') animationType: 'fadeInUp' | 'slideLeft' | 'slideRight' | 'zoomIn' = 'fadeInUp';

  @HostBinding('@fadeInUp') fadeInUp: any;
  @HostBinding('@slideLeft') slideLeft: any;
  @HostBinding('@slideRight') slideRight: any;
  @HostBinding('@zoomIn') zoomIn: any;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.triggerAnimation();
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      }, { threshold: 0.3, rootMargin: '50px' });

      this.observer.observe(this.el.nativeElement);
    }
  }

  private triggerAnimation() {
    switch (this.animationType) {
      case 'fadeInUp':
        this.fadeInUp = 'hidden';  // 👈 Start as hidden
        setTimeout(() => this.fadeInUp = 'visible', 10); // 👈 Apply animation after small delay
        break;
      case 'slideLeft':
        this.slideLeft = 'hidden';
        setTimeout(() => this.slideLeft = 'visible', 10);
        break;
      case 'slideRight':
        this.slideRight = 'hidden';
        setTimeout(() => this.slideRight = 'visible', 10);
        break;
      case 'zoomIn':
        this.zoomIn = 'hidden';
        setTimeout(() => this.zoomIn = 'visible', 10);
        break;
      default:
        console.warn(`⚠ Unknown animation type: ${this.animationType}`);
        this.fadeInUp = 'hidden';
        setTimeout(() => this.fadeInUp = 'visible', 10);
        break;
    }
  }

}
