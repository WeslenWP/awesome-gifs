import { TestBed } from '@angular/core/testing';

import { WinrefService } from './winref.service';

describe('WinrefService', () => {
  let service: WinrefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinrefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
