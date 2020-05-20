import { fileExtensionValidator } from './file-validator/file-validator';
import { urlValidator } from './url-validator/url-validator';
import { emailValidator } from './email-validator/email-validator';
import { NgModule } from '@angular/core';

export const NgxCustomValidators = {
  emailValidator,
  urlValidator,
  fileExtensionValidator,
};

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class NgxCustomValidatorsModule { }
