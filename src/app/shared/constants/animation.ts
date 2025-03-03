import { trigger, state, style, animate, transition } from '@angular/animations';
export const fadeSlide= trigger('fadeSlide', [
  state('enter', style({ opacity: 1, transform: 'translateX(0) scale(1)' })),
  state('leave', style({ opacity: 0, transform: 'translateX(30px) scale(1.05)' })),
  transition('leave => enter', [animate('800ms ease-out')]),
  transition('enter => leave', [animate('800ms ease-in')]),
])

