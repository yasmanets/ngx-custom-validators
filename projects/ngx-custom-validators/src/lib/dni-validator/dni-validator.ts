import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import * as C from '../constants';

export const dniValidator = (error: ValidationErrors): ValidatorFn => {
  return (dni: AbstractControl): {[key: string]: boolean} | null => {
    if (!dni.value) {
      return null;
    }
    return C.DNI_REGEXP.test(dni.value) ? null : error;
  };
};
