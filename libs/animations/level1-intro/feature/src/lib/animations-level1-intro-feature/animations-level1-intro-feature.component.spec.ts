import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsLevel1IntroFeatureComponent } from './animations-level1-intro-feature.component';

describe('AnimationsLevel1IntroFeatureComponent', () => {
  let component: AnimationsLevel1IntroFeatureComponent;
  let fixture: ComponentFixture<AnimationsLevel1IntroFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsLevel1IntroFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationsLevel1IntroFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
