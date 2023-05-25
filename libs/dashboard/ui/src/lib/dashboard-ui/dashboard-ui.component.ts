import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mul-project-dashboard-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-ui.component.html',
  styleUrls: ['./dashboard-ui.component.scss'],
})
export class DashboardUiComponent {
  constructor(private router: Router) {}

  open(): void {
    this.router.navigateByUrl('/campaign-intro');
  }
}
