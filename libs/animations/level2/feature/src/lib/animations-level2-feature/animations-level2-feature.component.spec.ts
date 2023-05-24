import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsLevel2FeatureComponent } from './animations-level2-feature.component';

describe('AnimationsLevel2FeatureComponent', () => {
  let component: AnimationsLevel2FeatureComponent;
  let fixture: ComponentFixture<AnimationsLevel2FeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsLevel2FeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationsLevel2FeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
