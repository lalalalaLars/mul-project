import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsXpProgressBarFeatureComponent } from '@mul-project/animations/xp-progress-bar/feature';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AnimationsCampaigneCompletedModalFeatureComponent } from '@mul-project/animations/campaigne-completed-modal/feature';

@Component({
  selector: 'mul-project-dashboard-ui',
  standalone: true,
  imports: [
    CommonModule,
    AnimationsXpProgressBarFeatureComponent,
    OverlayModule,
  ],
  templateUrl: './dashboard-ui.component.html',
  styleUrls: ['./dashboard-ui.component.scss'],
})
export class DashboardUiComponent {
  constructor(private overlay: Overlay) {}

  open(): void {
    const overlayRef = this.overlay.create();
    const campaignCompleteOverlay = new ComponentPortal(
      AnimationsCampaigneCompletedModalFeatureComponent
    );
    const componentRef = overlayRef.attach(campaignCompleteOverlay);

    componentRef.instance.close.subscribe(() => {
      overlayRef.dispose();
    });
  }
}
