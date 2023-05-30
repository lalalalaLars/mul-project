import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsXpEarnedFeatureComponent } from './animations-xp-earned-feature.component';

describe('AnimationsXpEarnedFeatureComponent', () => {
  let component: AnimationsXpEarnedFeatureComponent;
  let fixture: ComponentFixture<AnimationsXpEarnedFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsXpEarnedFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationsXpEarnedFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
