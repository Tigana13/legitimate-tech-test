import { TestBed } from '@angular/core/testing';

import { ChamasService } from './chamas.service';

describe('ChamasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChamasService = TestBed.get(ChamasService);
    expect(service).toBeTruthy();
  });
});
