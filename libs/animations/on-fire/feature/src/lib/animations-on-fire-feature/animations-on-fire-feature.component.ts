import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RiveModule } from 'ng-rive';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mul-project-animations-on-fire-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, RiveModule],
  templateUrl: './animations-on-fire-feature.component.html',
  styleUrls: ['./animations-on-fire-feature.component.scss'],
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
  ],
})
export class AnimationsOnFireFeatureComponent {
  constructor(private router: Router) {}

  continue() {
    this.router.navigateByUrl('/rewards');
  }
}
