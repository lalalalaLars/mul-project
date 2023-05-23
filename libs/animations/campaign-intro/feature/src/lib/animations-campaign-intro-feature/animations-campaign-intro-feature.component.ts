/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-output-native */
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'mul-project-animations-campaign-intro-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, OverlayModule],
  templateUrl: './animations-campaign-intro-feature.component.html',
  styleUrls: ['./animations-campaign-intro-feature.component.scss'],
  animations: [
    trigger('fadeScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scaleY(0) scaleX(0)' }),
        animate(
          '300ms ease-in',
          style({ opacity: 1, transform: 'scaleY(1) scaleX(1)' })
        ),
      ]),
    ]),
    trigger('pageAnimations', [
      transition(':enter', [
        query('.rewards-wrapper', [
          style({ opacity: 0, transform: 'translateY(-60px)' }),
          stagger(5, [
            animate(
              '800ms cubic-bezier(1, 0, 0.25, 1.4)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AnimationsCampaignIntroFeatureComponent {
  constructor(private router: Router) {}

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  toLevel1() {
    this.close.emit();
    this.router.navigateByUrl('/level1');
  }
}
