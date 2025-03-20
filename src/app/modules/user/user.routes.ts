import { Routes } from '@angular/router';
import {HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MembershipComponent } from './membership/membership.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { StoreComponent } from './store/store.component';
import { MagazineComponent } from './magazine/magazine.component';
import { PodcastComponent } from './podcast/podcast.component';
import { CourseComponent } from './course/course.component';



export const USER_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'magazine', component: MagazineComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'course', component: CourseComponent },
  { path: 'store', component: StoreComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms-of-service', component: PrivacyComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
];
