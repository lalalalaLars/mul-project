import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsCampaignCompletedFeatureComponent } from './animations-campaign-completed-feature.component';

describe('AnimationsCampaignCompletedFeatureComponent', () => {
  let component: AnimationsCampaignCompletedFeatureComponent;
  let fixture: ComponentFixture<AnimationsCampaignCompletedFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsCampaignCompletedFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      AnimationsCampaignCompletedFeatureComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
