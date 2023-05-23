import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsXpEarnedModalFeatureComponent } from './animations-xp-earned-modal-feature.component';

describe('AnimationsXpEarnedModalFeatureComponent', () => {
  let component: AnimationsXpEarnedModalFeatureComponent;
  let fixture: ComponentFixture<AnimationsXpEarnedModalFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsXpEarnedModalFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationsXpEarnedModalFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
