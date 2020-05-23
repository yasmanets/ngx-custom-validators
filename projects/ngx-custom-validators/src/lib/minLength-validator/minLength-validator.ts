import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export const minLengthValidator = (error: ValidationErrors, length: number): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} | null => {
    if (!control.value) {
      return null;
    }
    return control.value.length > length ? null : error;
  };
};
