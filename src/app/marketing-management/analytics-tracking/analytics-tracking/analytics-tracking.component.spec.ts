import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsTrackingComponent } from './analytics-tracking.component';

describe('AnalyticsTrackingComponent', () => {
  let component: AnalyticsTrackingComponent;
  let fixture: ComponentFixture<AnalyticsTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
