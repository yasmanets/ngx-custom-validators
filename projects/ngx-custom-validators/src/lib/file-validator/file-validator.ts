import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';


export const fileExtensionValidator = (error: ValidationErrors, extensionsAllowed: Array<string>): ValidatorFn => {
  return (file: AbstractControl): any => {
    if (!file.value) {
      return null;
    }
    for (const ext of extensionsAllowed) {
      console.log(file.value);
      if (file.value.toLocaleLowerCase().includes(ext)) {
        return null;
      }
    }
    return error;
  };
};
