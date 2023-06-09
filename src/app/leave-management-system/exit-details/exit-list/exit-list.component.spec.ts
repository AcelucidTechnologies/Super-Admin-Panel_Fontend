import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitListComponent } from './exit-list.component';

describe('ExitListComponent', () => {
  let component: ExitListComponent;
  let fixture: ComponentFixture<ExitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
