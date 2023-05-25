import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mul-project-animations-campaign-intro-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './animations-campaign-intro-feature.component.html',
  styleUrls: ['./animations-campaign-intro-feature.component.scss'],
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
export class AnimationsCampaignIntroFeatureComponent {
  constructor(private router: Router) {}

  toLevel1() {
    this.router.navigateByUrl('/level1-intro');
  }
}
