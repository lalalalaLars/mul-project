import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RiveModule } from 'ng-rive';

@Component({
  selector: 'mul-project-animations-xp-earned-modal-feature',
  standalone: true,
  imports: [CommonModule, RiveModule, MatCardModule],
  templateUrl: './animations-xp-earned-modal-feature.component.html',
  styleUrls: ['./animations-xp-earned-modal-feature.component.scss'],
})
export class AnimationsXpEarnedModalFeatureComponent {}
