import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RiveModule } from 'ng-rive';

@Component({
  selector: 'mul-project-animations-on-fire-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, RiveModule],
  templateUrl: './animations-on-fire-feature.component.html',
  styleUrls: ['./animations-on-fire-feature.component.scss'],
})
export class AnimationsOnFireFeatureComponent {}
