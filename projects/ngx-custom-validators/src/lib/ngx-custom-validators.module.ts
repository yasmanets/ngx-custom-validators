import { maxLengthValidator } from './maxLength-validator/maxLength-validator';
import { minLengthValidator } from './minLength-validator/minLength-validator';
import { patternValidator } from './pattern-validator/pattern-validator';
import { fileExtensionValidator } from './file-validator/file-validator';
import { urlValidator } from './url-validator/url-validator';
import { emailValidator } from './email-validator/email-validator';
import { NgModule } from '@angular/core';

export const NgxCustomValidators = {
  emailValidator,
  urlValidator,
  fileExtensionValidator,
  patternValidator,
  minLengthValidator,
  maxLengthValidator,
};

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class NgxCustomValidatorsModule { }
