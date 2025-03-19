import { Routes } from '@angular/router';
import {DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../../core/guards/auth.guard';




export const ADMIN_ROUTES: Routes = [
  { path: '', component: DashboardComponent, canActivate: [authGuard] },
];
