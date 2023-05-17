import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsCampaigneCompletedModalFeatureComponent } from './animations-campaigne-completed-modal-feature.component';

describe('AnimationsCampaigneCompletedModalFeatureComponent', () => {
  let component: AnimationsCampaigneCompletedModalFeatureComponent;
  let fixture: ComponentFixture<AnimationsCampaigneCompletedModalFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsCampaigneCompletedModalFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      AnimationsCampaigneCompletedModalFeatureComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
