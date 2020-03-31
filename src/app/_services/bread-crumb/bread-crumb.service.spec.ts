import { TestBed } from '@angular/core/testing';

import { BreadCrumbService } from './bread-crumb.service';

describe('BreadCrumbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreadCrumbService = TestBed.get(BreadCrumbService);
    expect(service).toBeTruthy();
  });
});
