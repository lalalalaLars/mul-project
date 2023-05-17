import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';

import { RiveModule } from 'ng-rive';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'mul-project-animations-level-up-modal-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, RiveModule, OverlayModule],
  templateUrl: './animations-level-up-modal-feature.component.html',
  styleUrls: ['./animations-level-up-modal-feature.component.scss'],
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
  ],
})
export class AnimationsLevelUpModalFeatureComponent {}
