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
            path: 'level-up-modal',
            loadChildren: () =>
              import('@mul-project/animations/level-up-modal/feature').then(
                (m) => m.animationsLevelUpModalFeatureRoutes
              ),
          },
          {
            path: 'xp-progress-bar',
            loadChildren: () =>
              import('@mul-project/animations/xp-progress-bar/feature').then(
                (m) => m.animationsXpProgressBarFeatureRoutes
              ),
          },
          {
            path: 'campaigne-completed',
            loadChildren: () =>
              import(
                '@mul-project/animations/campaigne-completed-modal/feature'
              ).then((m) => m.animationsCampaigneCompletedModalFeatureRoutes),
          },
          {
            path: 'xp-earned',
            loadChildren: () =>
              import('@mul-project/animations/xp-earned-modal/feature').then(
                (m) => m.animationsXpEarnedModalFeatureRoutes
              ),
          },
        ],
        { initialNavigation: 'enabledBlocking' }
      )
    ),
  ],
}).catch((err) => console.error(err));
