import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      [BrowserAnimationsModule],
      RouterModule.forRoot(
        [
          {
            path: '',
            loadChildren: () =>
              import('@mul-project/dashboard/ui').then(
                (m) => m.dashboardUiRoutes
              ),
          },
          {
            path: 'campaign-intro',
            loadChildren: () =>
              import('@mul-project/animations/campaign-intro/feature').then(
                (m) => m.animationsCampaignIntroFeatureRoutes
              ),
          },
          {
            path: 'level1-intro',
            loadChildren: () =>
              import('@mul-project/animations/level1-intro/feature').then(
                (m) => m.animationsLevel1IntroFeatureRoutes
              ),
          },
          {
            path: 'level1',
            loadChildren: () =>
              import('@mul-project/animations/level1/feature').then(
                (m) => m.animationsLevel1FeatureRoutes
              ),
          },
          {
            path: 'xp-earned',
            loadChildren: () =>
              import('@mul-project/animations/xp-earned/feature').then(
                (m) => m.animationsXpEarnedFeatureRoutes
              ),
          },
          {
            path: 'level2-intro',
            loadChildren: () =>
              import('@mul-project/animations/level2-intro/feature').then(
                (m) => m.animationsLevel2IntroFeatureRoutes
              ),
          },
          {
            path: 'level2',
            loadChildren: () =>
              import('@mul-project/animations/level2/feature').then(
                (m) => m.animationsLevel2FeatureRoutes
              ),
          },
          {
            path: 'rewards',
            loadChildren: () =>
              import('@mul-project/animations/rewards/feature').then(
                (m) => m.animationsRewardsFeatureRoutes
              ),
          },
          {
            path: 'on-fire',
            loadChildren: () =>
              import('@mul-project/animations/on-fire/feature').then(
                (m) => m.animationsOnFireFeatureRoutes
              ),
          },
          {
            path: 'campaign-completed',
            loadChildren: () =>
              import('@mul-project/animations/campaign-completed/feature').then(
                (m) => m.animationsCampaignCompletedFeatureRoutes
              ),
          },
        ],
        { initialNavigation: 'enabledBlocking' }
      )
    ),
  ],
}).catch((err) => console.error(err));
