import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import * as C from '../constants';

export const urlValidator = (error: ValidationErrors): ValidatorFn => {
  return (url: AbstractControl): {[key: string]: boolean} | null => {
    if (url.pristine || !url.value) {
      return null;
    }
    url.markAsTouched();
    if (C.URL_REGEXP.test(url.value)) {
      return null;
    }
    return { url: true };
  };
};
