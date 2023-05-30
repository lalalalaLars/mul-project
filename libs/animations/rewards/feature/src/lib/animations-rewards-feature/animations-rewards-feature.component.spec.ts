import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsRewardsFeatureComponent } from './animations-rewards-feature.component';

describe('AnimationsRewardsFeatureComponent', () => {
  let component: AnimationsRewardsFeatureComponent;
  let fixture: ComponentFixture<AnimationsRewardsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsRewardsFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationsRewardsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
