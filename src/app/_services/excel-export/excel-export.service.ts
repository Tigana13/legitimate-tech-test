import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { ApiService } from '../api/api.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { SnackbarService } from 'src/app/_helpers/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {

  constructor(
    private apiService: ApiService,
    private snackBar: SnackbarService,
  ) { }

  export(url, fileName, fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8;',  responseType = 'blob') {
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', fileType);
    this.snackBar.openSnackBar(
      'Export successfully initiated you will be notified to save the file when done',
      '',
      8000,
      undefined,
      undefined,
      ['snack-bar', 'snack-bar-success']
    );
    this.apiService.get(url, true, params, headers, responseType).subscribe(response => {
      const blob = new Blob([response], { type: fileType });
      saveAs(blob, fileName);
    });
  }
}
