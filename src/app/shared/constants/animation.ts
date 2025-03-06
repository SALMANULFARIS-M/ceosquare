import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

export const fadeSlide= trigger('fadeSlide', [
  state('enter', style({ opacity: 1, transform: 'translateX(0) scale(1)' })),
  state('leave', style({ opacity: 0, transform: 'translateX(30px) scale(1.05)' })),
  transition('leave => enter', [animate('800ms ease-out')]),
  transition('enter => leave', [animate('800ms ease-in')]),
])


export const fadeInUpAnimation = trigger('fadeInUp', [
  state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),  // 👈 Start hidden
  state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
  transition('hidden => visible', animate('0.6s ease-out')),
]);

export const slideLeftAnimation = trigger('slideLeft', [
  state('hidden', style({ opacity: 0, transform: 'translateX(-20px)' })),
  state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
  transition('hidden => visible', animate('0.6s ease-out')),
]);

export const slideRightAnimation = trigger('slideRight', [
  state('hidden', style({ opacity: 0, transform: 'translateX(20px)' })),
  state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
  transition('hidden => visible', animate('0.6s ease-out')),
]);

export const zoomInAnimation = trigger('zoomIn', [
  state('hidden', style({ opacity: 0, transform: 'scale(0.9)' })),
  state('visible', style({ opacity: 1, transform: 'scale(1)' })),
  transition('hidden => visible', animate('0.6s ease-out')),
]);

