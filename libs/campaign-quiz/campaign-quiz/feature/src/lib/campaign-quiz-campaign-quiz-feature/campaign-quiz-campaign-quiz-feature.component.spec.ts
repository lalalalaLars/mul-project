import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampaignQuizCampaignQuizFeatureComponent } from './campaign-quiz-campaign-quiz-feature.component';

describe('CampaignQuizCampaignQuizFeatureComponent', () => {
  let component: CampaignQuizCampaignQuizFeatureComponent;
  let fixture: ComponentFixture<CampaignQuizCampaignQuizFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignQuizCampaignQuizFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CampaignQuizCampaignQuizFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
