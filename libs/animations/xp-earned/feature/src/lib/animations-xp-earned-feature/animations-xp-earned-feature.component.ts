/* eslint-disable @angular-eslint/no-output-native */
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';
import { RiveModule } from 'ng-rive';

@Component({
  selector: 'mul-project-animations-xp-earned-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, OverlayModule, RiveModule],
  templateUrl: './animations-xp-earned-feature.component.html',
  styleUrls: ['./animations-xp-earned-feature.component.scss'],
})
export class AnimationsXpEarnedFeatureComponent {
  constructor(private router: Router) {}

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeXpEarnedOverlay(): void {
    this.close.emit();
    this.router.navigateByUrl('/level2');
  }
}
