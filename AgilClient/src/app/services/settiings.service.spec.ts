import { TestBed } from '@angular/core/testing';

import { SettiingsService } from './settiings.service';

describe('SettiingsService', () => {
  let service: SettiingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettiingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
