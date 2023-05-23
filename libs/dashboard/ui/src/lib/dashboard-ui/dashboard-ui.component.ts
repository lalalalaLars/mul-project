import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AnimationsCampaignIntroFeatureComponent } from '@mul-project/animations/campaign-intro/feature';

@Component({
  selector: 'mul-project-dashboard-ui',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './dashboard-ui.component.html',
  styleUrls: ['./dashboard-ui.component.scss'],
})
export class DashboardUiComponent {
  constructor(private overlay: Overlay) {}

  open(): void {
    const overlayRef = this.overlay.create();
    const campaignIntroOverlay = new ComponentPortal(
      AnimationsCampaignIntroFeatureComponent
    );
    const componentRef = overlayRef.attach(campaignIntroOverlay);

    componentRef.instance.close.subscribe(() => {
      overlayRef.dispose();
    });
  }
}
