import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsXpProgressBarFeatureComponent } from './animations-xp-progress-bar-feature.component';

describe('AnimationsXpProgressBarFeatureComponent', () => {
  let component: AnimationsXpProgressBarFeatureComponent;
  let fixture: ComponentFixture<AnimationsXpProgressBarFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsXpProgressBarFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationsXpProgressBarFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
