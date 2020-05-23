import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export const patternValidator = (error: ValidationErrors, pattern: RegExp): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} | null => {
    if (!control.value) {
      return null;
    }
    return pattern.test(control.value) ? null : error;
  };
};
