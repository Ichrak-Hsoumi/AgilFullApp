import { TestBed } from '@angular/core/testing';

import { DashboardAgService } from './dashboard-ag.service';

describe('DashboardAgService', () => {
  let service: DashboardAgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardAgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
