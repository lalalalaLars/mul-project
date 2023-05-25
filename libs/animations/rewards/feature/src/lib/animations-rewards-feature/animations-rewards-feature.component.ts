/* eslint-disable @angular-eslint/no-output-native */
import { Component } from '@angular/core';
import { RiveModule } from 'ng-rive';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'mul-project-animations-rewards-feature',
  standalone: true,
  imports: [CommonModule, RiveModule, MatCardModule],
  templateUrl: './animations-rewards-feature.component.html',
  styleUrls: ['./animations-rewards-feature.component.scss'],
  animations: [
    trigger('fadeScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scaleY(0) scaleX(0)' }),
        animate(
          '300ms ease-in',
          style({ opacity: 1, transform: 'scaleY(1) scaleX(1)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '800ms ease-out',
          style({ opacity: 0, transform: 'scaleY(0) scaleX(0)' })
        ),
      ]),
    ]),

    trigger('fallIn', [
      transition(':enter', [
        query('.rewards-wrapper', [
          style({ opacity: 0, transform: 'translateY(-60px) scale(1)' }),
          stagger(5, [
            animate(
              '800ms cubic-bezier(1, 0, 0.25, 1.4)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
      transition(':leave', [
        query('.rewards-wrapper', [
          stagger(-5, [
            animate(
              '300ms ease-out',
              style({
                opacity: 0,
                transform: 'translateY(60px) scale(0)',
              })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AnimationsRewardsFeatureComponent {
  constructor(private router: Router) {}

  claimRewards() {
    this.router.navigateByUrl('/campaign-completed');
  }
}
