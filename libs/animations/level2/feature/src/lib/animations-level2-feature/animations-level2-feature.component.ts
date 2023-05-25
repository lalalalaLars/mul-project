import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'mul-project-animations-level2-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animations-level2-feature.component.html',
  styleUrls: ['./animations-level2-feature.component.scss'],
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
export class AnimationsLevel2FeatureComponent {
  constructor(private router: Router) {}

  openRewardsOverlay() {
    this.router.navigateByUrl('/rewards');
  }
}
