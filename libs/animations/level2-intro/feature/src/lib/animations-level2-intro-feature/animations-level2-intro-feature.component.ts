/* eslint-disable @angular-eslint/no-output-native */
import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { RiveModule } from 'ng-rive';

@Component({
  selector: 'mul-project-animations-level2-intro-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, OverlayModule, RiveModule],
  templateUrl: './animations-level2-intro-feature.component.html',
  styleUrls: ['./animations-level2-intro-feature.component.scss'],
})
export class AnimationsLevel2IntroFeatureComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeLevel2Overlay() {
    this.close.emit();
  }
}
