import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RiveModule } from 'ng-rive';

@Component({
  selector: 'mul-project-animations-campaign-completed-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, RiveModule],
  templateUrl: './animations-campaign-completed-feature.component.html',
  styleUrls: ['./animations-campaign-completed-feature.component.scss'],
})
export class AnimationsCampaignCompletedFeatureComponent {}
