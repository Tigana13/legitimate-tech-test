import { TestBed } from '@angular/core/testing';

import { FormLoaderService } from './form-loader.service';

describe('FormLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormLoaderService = TestBed.get(FormLoaderService);
    expect(service).toBeTruthy();
  });
});
