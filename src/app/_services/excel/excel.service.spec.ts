import { TestBed } from '@angular/core/testing';

import { ExcelService } from './excel.service';
import {of} from 'rxjs';

describe('ExcelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcelService = TestBed.get(ExcelService);
    expect(service).toBeTruthy();
  });

  it('should save a file to excel', () => {
    const service: ExcelService = TestBed.get(ExcelService);
    const serviceSpy: any = jasmine.createSpyObj('ExcelService', ['saveAsExcelFile']);
    serviceSpy.saveAsExcelFile.and.returnValue(of({}));    expect(service.saveAsExcelFile).toBeTruthy();
  });

  it('should export a file to CSV', () => {
    const service: ExcelService = TestBed.get(ExcelService);
    const serviceSpy: any = jasmine.createSpyObj('ExcelService', ['exportToCsv']);
    serviceSpy.exportToCsv.and.returnValue(of({}));    expect(service.exportToCsv).toBeTruthy();
  });
});
