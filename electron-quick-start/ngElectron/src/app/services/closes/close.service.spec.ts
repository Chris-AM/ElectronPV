import { TestBed } from '@angular/core/testing';

import { CloseService } from './close.service';

describe('CloseService', () => {
  let service: CloseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
