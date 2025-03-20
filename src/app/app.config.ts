import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling'; // Import ScrollingModule
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  importProvidersFrom(BrowserAnimationsModule, ScrollingModule),
  provideRouter(routes), provideClientHydration(withEventReplay()),
  provideAnimations(),
  provideHttpClient(withFetch()),
  provideToastr(),]
};
