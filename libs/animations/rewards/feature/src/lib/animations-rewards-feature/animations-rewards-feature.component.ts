/* eslint-disable @angular-eslint/no-output-native */
import { Component, EventEmitter, Output } from '@angular/core';
import { RiveModule } from 'ng-rive';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'mul-project-animations-rewards-feature',
  standalone: true,
  imports: [CommonModule, RiveModule, MatCardModule, OverlayModule],
  templateUrl: './animations-rewards-feature.component.html',
  styleUrls: ['./animations-rewards-feature.component.scss'],
})
export class AnimationsRewardsFeatureComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  onCollectRewards(): void {
    this.close.emit();
  }
}
