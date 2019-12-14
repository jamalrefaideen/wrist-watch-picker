import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAnalogWristWatchComponent } from './ngx-analog-wrist-watch.component';

describe('NgxAnalogWristWatchComponent', () => {
  let component: NgxAnalogWristWatchComponent;
  let fixture: ComponentFixture<NgxAnalogWristWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAnalogWristWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAnalogWristWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
