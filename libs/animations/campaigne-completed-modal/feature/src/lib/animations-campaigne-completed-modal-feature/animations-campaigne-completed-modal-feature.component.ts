import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'mul-project-animations-campaigne-completed-modal-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, OverlayModule],
  templateUrl: './animations-campaigne-completed-modal-feature.component.html',
  styleUrls: ['./animations-campaigne-completed-modal-feature.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),

      transition(':enter, :leave', [animate('500ms ease-in')]),
    ]),
    trigger('scale', [
      state('void', style({ transform: 'scaleY(0) scaleX(0)' })),
      state('*', style({})),

      transition(':enter, :leave', [animate('300ms ease-in')]),
    ]),
    trigger('pageAnimations', [
      transition(':enter', [
        query('.rewards-wrapper', [
          style({ opacity: 0, transform: 'translateY(-80px)' }),
          stagger(5, [
            animate(
              '800ms cubic-bezier(1, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AnimationsCampaigneCompletedModalFeatureComponent {}
