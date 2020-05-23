import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import * as C from '../constants';

export const ibanValidator = (error: ValidationErrors): ValidatorFn => {
  return (iban: AbstractControl): {[key: string]: boolean} | null => {
    if (!iban.value) {
      return null;
    }
    return C.IBAN_REGEXP.test(iban.value) ? null : error;
  };
};
