/* eslint-disable @angular-eslint/no-output-native */
import { Component, EventEmitter, Output } from '@angular/core';
import { RiveModule } from 'ng-rive';
import { CommonModule } from '@angular/common';
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
  selector: 'mul-project-animations-campaigne-completed-modal-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, OverlayModule, RiveModule],
  templateUrl: './animations-campaigne-completed-modal-feature.component.html',
  styleUrls: ['./animations-campaigne-completed-modal-feature.component.scss'],
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
export class AnimationsCampaigneCompletedModalFeatureComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  onCollectRewards(): void {
    const rewardsWrapper = document.querySelector(
      '.rewards-wrapper'
    ) as HTMLElement;
    rewardsWrapper.animate(
      [
        { opacity: 1, transform: 'none' },
        { opacity: 0, transform: 'translateY(80px) scaleX(0) scaleY(0)' },
      ],
      {
        duration: 500,
        easing: 'cubic-bezier(1, 0, 0.25, 1.4)',
        fill: 'forwards',
      }
    ).onfinish = () => {
      const campaigneCompletedOverlay = document.querySelector(
        '.container'
      ) as HTMLElement;

      // Add a fade-out animation using Angular animations
      campaigneCompletedOverlay.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 150,
        easing: 'ease-out',
        fill: 'forwards',
      }).onfinish = () => {
        this.close.emit();
      };
    };
  }
}
