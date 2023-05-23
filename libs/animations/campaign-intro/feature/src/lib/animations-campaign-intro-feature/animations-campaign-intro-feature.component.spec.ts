import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsCampaignIntroFeatureComponent } from './animations-campaign-intro-feature.component';

describe('AnimationsCampaignIntroFeatureComponent', () => {
  let component: AnimationsCampaignIntroFeatureComponent;
  let fixture: ComponentFixture<AnimationsCampaignIntroFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsCampaignIntroFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationsCampaignIntroFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
