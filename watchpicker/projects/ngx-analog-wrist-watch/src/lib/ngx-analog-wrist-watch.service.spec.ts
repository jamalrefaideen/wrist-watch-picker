import { TestBed } from '@angular/core/testing';

import { NgxAnalogWristWatchService } from './ngx-analog-wrist-watch.service';

describe('NgxAnalogWristWatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAnalogWristWatchService = TestBed.get(NgxAnalogWristWatchService);
    expect(service).toBeTruthy();
  });
});
