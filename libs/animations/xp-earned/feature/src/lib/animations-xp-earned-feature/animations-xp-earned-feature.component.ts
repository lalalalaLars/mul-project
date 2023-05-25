import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RiveModule } from 'ng-rive';
import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'mul-project-animations-xp-earned-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, RiveModule],
  templateUrl: './animations-xp-earned-feature.component.html',
  styleUrls: ['./animations-xp-earned-feature.component.scss'],
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
          '300ms ease-out',
          style({ opacity: 0, transform: 'scaleY(0) scaleX(0)' })
        ),
      ]),
    ]),
    trigger('fallIn', [
      transition(':enter', [
        query('.xp-icon', [
          style({ opacity: 0, transform: 'translateY(-60px)' }),
          stagger(5, [
            animate(
              '800ms cubic-bezier(1, 0, 0.25, 1.4)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
      transition(':leave', [
        query('.xp-icon', [
          stagger(-5, [
            animate(
              '300ms ease-out',
              style({ opacity: 0, transform: 'translateY(60px)' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AnimationsXpEarnedFeatureComponent {
  constructor(private router: Router) {}

  closeXpEarnedOverlay(): void {
    this.router.navigateByUrl('/level2-intro');
  }
}
