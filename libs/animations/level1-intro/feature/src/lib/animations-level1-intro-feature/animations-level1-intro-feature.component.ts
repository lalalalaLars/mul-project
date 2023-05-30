import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';

import { RiveModule } from 'ng-rive';

@Component({
  selector: 'mul-project-animations-level1-intro-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, RiveModule],
  templateUrl: './animations-level1-intro-feature.component.html',
  styleUrls: ['./animations-level1-intro-feature.component.scss'],
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
export class AnimationsLevel1IntroFeatureComponent {
  constructor(private router: Router) {}

  closeLevel1Overlay() {
    this.router.navigateByUrl('/level1');
  }
}
