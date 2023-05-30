import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mul-project-animations-level1-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animations-level1-feature.component.html',
  styleUrls: ['./animations-level1-feature.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AnimationsLevel1FeatureComponent {
  constructor(private router: Router) {}

  openXpEarnedOverlay(): void {
    this.router.navigateByUrl('/xp-earned');
  }
}
