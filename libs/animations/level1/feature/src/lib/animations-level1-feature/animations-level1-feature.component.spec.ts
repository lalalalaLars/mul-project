import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsLevel1FeatureComponent } from './animations-level1-feature.component';

describe('AnimationsLevel1FeatureComponent', () => {
  let component: AnimationsLevel1FeatureComponent;
  let fixture: ComponentFixture<AnimationsLevel1FeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsLevel1FeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationsLevel1FeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
