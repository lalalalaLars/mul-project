import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsLevelUpModalFeatureComponent } from './animations-level-up-modal-feature.component';

describe('AnimationsLevelUpModalFeatureComponent', () => {
  let component: AnimationsLevelUpModalFeatureComponent;
  let fixture: ComponentFixture<AnimationsLevelUpModalFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsLevelUpModalFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationsLevelUpModalFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
