import {AbstractControl, ValidatorFn} from '@angular/forms';

export function forbiddenTextPattern( pattern: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = pattern.test(control.value);
    return forbidden ? {forbiddenPattern: {value: control.value}} : null;
  };
}
