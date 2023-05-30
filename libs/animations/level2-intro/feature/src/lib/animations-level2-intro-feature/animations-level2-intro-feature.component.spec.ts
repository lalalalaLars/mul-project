import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsLevel2IntroFeatureComponent } from './animations-level2-intro-feature.component';

describe('AnimationsLevel2IntroFeatureComponent', () => {
  let component: AnimationsLevel2IntroFeatureComponent;
  let fixture: ComponentFixture<AnimationsLevel2IntroFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsLevel2IntroFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationsLevel2IntroFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
