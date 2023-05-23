/* eslint-disable @angular-eslint/no-output-native */
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'mul-project-animations-level1-intro-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, OverlayModule],
  templateUrl: './animations-level1-intro-feature.component.html',
  styleUrls: ['./animations-level1-intro-feature.component.scss'],
})
export class AnimationsLevel1IntroFeatureComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeLevel1Overlay() {
    this.close.emit();
  }
}
