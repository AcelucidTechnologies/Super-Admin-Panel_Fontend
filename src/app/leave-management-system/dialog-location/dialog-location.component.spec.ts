import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLocationComponent } from './dialog-location.component';

describe('DialogLocationComponent', () => {
  let component: DialogLocationComponent;
  let fixture: ComponentFixture<DialogLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
