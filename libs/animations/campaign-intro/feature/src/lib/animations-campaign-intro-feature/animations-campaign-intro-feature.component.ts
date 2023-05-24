/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-output-native */
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'mul-project-animations-campaign-intro-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, OverlayModule],
  templateUrl: './animations-campaign-intro-feature.component.html',
  styleUrls: ['./animations-campaign-intro-feature.component.scss'],
})
export class AnimationsCampaignIntroFeatureComponent {
  constructor(private router: Router) {}

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  toLevel1() {
    this.close.emit();
    this.router.navigateByUrl('/level1');
  }
}
