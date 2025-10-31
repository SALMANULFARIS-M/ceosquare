import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
// import { withRoutes } from '@angular/ssr'; // Removed: No exported member 'withRoutes'

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    // Add other providers as needed
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
