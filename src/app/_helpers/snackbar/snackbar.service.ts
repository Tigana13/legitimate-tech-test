import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {
  }

  /*****************
   * @param message
   * @param action
   * @param duration
   * @param verticalPos
   * @param horizontalPos
   * @param panelClass
   *********************************
   ********* SAMPLE USAGE **********
   * *******************************
   * import {SnackbarService} from '../_helpers/snackbar/snackbar.service';
   *
   ******* initialize in constructor *********
   *  private snackBarService: SnackbarService
   *
   ****** open snackBar **********************
   *****(pass 'undefined' to function call to opt out of a parameter)
   * this.snackBarService.open('Welcome', 'Dismiss', undefined, undefined, undefined, ['snack-bar', 'snack-bar-success']);
   */
  openSnackBar(message: string,
               action?: string,
               duration?: number,
               verticalPos?: MatSnackBarVerticalPosition,
               horizontalPos?: MatSnackBarHorizontalPosition,
               panelClass?: string[]) {
    const config: any = new MatSnackBarConfig();
    config.duration = duration || 150000;
    config.horizontalPosition = horizontalPos || 'center';
    config.verticalPosition = verticalPos || 'top';
    config.panelClass = panelClass || ['snack-bar', 'snack-bar-success'];
    return this.snackBar.open(message, action, config);
  }

  closeSnackBar() {
    return this.snackBar.dismiss();
  }
}
