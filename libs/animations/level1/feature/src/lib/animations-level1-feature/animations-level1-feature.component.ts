import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AnimationsLevel1IntroFeatureComponent } from '@mul-project/animations/level1-intro/feature';

@Component({
  selector: 'mul-project-animations-level1-feature',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './animations-level1-feature.component.html',
  styleUrls: ['./animations-level1-feature.component.scss'],
})
export class AnimationsLevel1FeatureComponent implements OnInit {
  constructor(private overlay: Overlay) {}

  ngOnInit(): void {
    const overlayRef = this.overlay.create();
    const level1IntroOverlay = new ComponentPortal(
      AnimationsLevel1IntroFeatureComponent
    );
    const componentRef = overlayRef.attach(level1IntroOverlay);

    componentRef.instance.close.subscribe(() => {
      overlayRef.dispose();
    });
  }
}
