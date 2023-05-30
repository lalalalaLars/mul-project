/* eslint-disable @angular-eslint/no-output-native */
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RiveModule } from 'ng-rive';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mul-project-animations-level2-intro-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, RiveModule],
  templateUrl: './animations-level2-intro-feature.component.html',
  styleUrls: ['./animations-level2-intro-feature.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AnimationsLevel2IntroFeatureComponent {
  constructor(private router: Router) {}

  closeLevel2Overlay() {
    this.router.navigateByUrl('/level2');
  }
}
