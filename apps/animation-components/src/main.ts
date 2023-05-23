import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      [BrowserAnimationsModule],
      RouterModule.forRoot(
        [
          {
            path: 'dashboard',
            loadChildren: () =>
              import('@mul-project/dashboard/ui').then(
                (m) => m.dashboardUiRoutes
              ),
          },
          {
            path: 'level1',
            loadChildren: () =>
              import('@mul-project/animations/level1/feature').then(
                (m) => m.animationsLevel1FeatureRoutes
              ),
          },
        ],
        { initialNavigation: 'enabledBlocking' }
      )
    ),
  ],
}).catch((err) => console.error(err));
