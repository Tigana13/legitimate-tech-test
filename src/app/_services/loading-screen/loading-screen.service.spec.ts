import { TestBed } from '@angular/core/testing';

import { LoadingScreenService } from './loading-screen.service';

describe('LoadingScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingScreenService = TestBed.get(LoadingScreenService);
    expect(service).toBeTruthy();
  });

  it('should initiate loading screen', () => {
    const service: LoadingScreenService = TestBed.get(LoadingScreenService);
    expect(service.startLoading).toBeTruthy();
  });

  it('should halt loading screen', () => {
    const service: LoadingScreenService = TestBed.get(LoadingScreenService);
    expect(service.stopLoading).toBeTruthy();
  });
});
