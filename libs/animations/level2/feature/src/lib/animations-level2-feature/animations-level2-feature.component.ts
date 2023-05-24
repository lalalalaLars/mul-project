import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AnimationsLevel2IntroFeatureComponent } from '@mul-project/animations/level2-intro/feature';
import { AnimationsRewardsFeatureComponent } from '@mul-project/animations/rewards/feature';

@Component({
  selector: 'mul-project-animations-level2-feature',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './animations-level2-feature.component.html',
  styleUrls: ['./animations-level2-feature.component.scss'],
})
export class AnimationsLevel2FeatureComponent implements OnInit {
  constructor(private overlay: Overlay) {}

  ngOnInit(): void {
    const overlayRef = this.overlay.create();
    const level2IntroOverlay = new ComponentPortal(
      AnimationsLevel2IntroFeatureComponent
    );
    const componentRef = overlayRef.attach(level2IntroOverlay);

    componentRef.instance.close.subscribe(() => {
      overlayRef.dispose();
    });
  }

  openRewardsOverlay(): void {
    const overlayRef = this.overlay.create();
    const rewardsOverlay = new ComponentPortal(
      AnimationsRewardsFeatureComponent
    );

    const componentRef = overlayRef.attach(rewardsOverlay);

    componentRef.instance.close.subscribe(() => {
      overlayRef.dispose();
    });
  }
}
