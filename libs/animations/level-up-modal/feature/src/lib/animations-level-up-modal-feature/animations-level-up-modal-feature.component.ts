/* eslint-disable @angular-eslint/no-output-native */
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';

import { RiveModule } from 'ng-rive';

import {
  trigger,
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
    trigger('fadeScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scaleY(0) scaleX(0)' }),
        animate(
          '300ms ease-in',
          style({ opacity: 1, transform: 'scaleY(1) scaleX(1)' })
        ),
      ]),
    ]),
  ],
})
export class AnimationsLevelUpModalFeatureComponent {
  @Output() close = new EventEmitter<void>();

  onContinue(): void {
    const levelUpOverlay = document.querySelector('.container') as HTMLElement;

    levelUpOverlay.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 500,
      easing: 'ease-out',
      fill: 'forwards',
    }).onfinish = () => {
      setTimeout(() => {
        this.close.emit();
      }, 300);
    };
  }
}
