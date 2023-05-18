import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AnimationsLevelUpModalFeatureComponent } from '@mul-project/animations/level-up-modal/feature';

@Component({
  selector: 'mul-project-animations-xp-progress-bar-feature',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './animations-xp-progress-bar-feature.component.html',
  styleUrls: ['./animations-xp-progress-bar-feature.component.scss'],
})
export class AnimationsXpProgressBarFeatureComponent {
  constructor(private overlay: Overlay) {}
  // add onLevelUp() method
  open(): void {
    const overlayRef = this.overlay.create();
    const levelUpOverlay = new ComponentPortal(
      AnimationsLevelUpModalFeatureComponent
    );
    const componentRef = overlayRef.attach(levelUpOverlay);

    componentRef.instance.close.subscribe(() => {
      overlayRef.dispose();
    });
  }
}
