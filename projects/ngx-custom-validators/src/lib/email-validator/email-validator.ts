import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import * as C from '../constants';

export const emailValidator = (error: ValidationErrors): ValidatorFn => {
  return (email: AbstractControl): any => {
    if (!email.value) {
      return null;
    }
    console.log(email);
    email.markAsTouched();
    if (C.EMAIL_REGEXP.test(email.value)) {
      return null;
    }
    return error;
  };
};
