import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsOnFireFeatureComponent } from './animations-on-fire-feature.component';

describe('AnimationsOnFireFeatureComponent', () => {
  let component: AnimationsOnFireFeatureComponent;
  let fixture: ComponentFixture<AnimationsOnFireFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsOnFireFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationsOnFireFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
