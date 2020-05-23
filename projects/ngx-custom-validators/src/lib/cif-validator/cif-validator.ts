import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import * as C from '../constants';

export const cifValidator = (error: ValidationErrors): ValidatorFn => {
  return (cif: AbstractControl): {[key: string]: boolean} | null => {
    if (!cif.value) {
      return null;
    }
    return C.CIF_REGEXP.test(cif.value) ? null : error;
  };
};
