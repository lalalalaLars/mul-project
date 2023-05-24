import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AnimationsLevel1IntroFeatureComponent } from '@mul-project/animations/level1-intro/feature';
import { AnimationsXpEarnedFeatureComponent } from '@mul-project/animations/xp-earned/feature';

@Component({
  selector: 'mul-project-animations-level1-feature',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './animations-level1-feature.component.html',
  styleUrls: ['./animations-level1-feature.component.scss'],
})
export class AnimationsLevel1FeatureComponent implements AfterViewInit {
  constructor(private overlay: Overlay) {}

  ngAfterViewInit(): void {
    const overlayRef = this.overlay.create();
    const level1IntroOverlay = new ComponentPortal(
      AnimationsLevel1IntroFeatureComponent
    );
    const componentRef = overlayRef.attach(level1IntroOverlay);

    componentRef.instance.close.subscribe(() => {
      overlayRef.dispose();
    }, 0);
  }

  openXpEarnedOverlay(): void {
    const overlayRef = this.overlay.create();
    const xpEarnedOverlay = new ComponentPortal(
      AnimationsXpEarnedFeatureComponent
    );
    const componentRef = overlayRef.attach(xpEarnedOverlay);

    componentRef.instance.close.subscribe(() => {
      setTimeout(() => {
        overlayRef.dispose();
      }, 0);
    });
  }
}
