import { emailValidator } from './email-validator/email-validator';
import { NgModule } from '@angular/core';

export const NgxCustomValidators = {
  emailValidator,
};

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class NgxCustomValidatorsModule { }
