import { NgxCustomValidators } from './../../projects/ngx-custom-validators/src/lib/ngx-custom-validators.module';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: string;
  public testForm: FormGroup;

  constructor() {
    this.title = 'NgxCustomValidators';
  }

  ngOnInit() {
    this.setTestForm();
  }

  private setTestForm(): void {
    this.testForm = new FormGroup({
      email: new FormControl(null, {
        validators: NgxCustomValidators.emailValidator({email: true}),
        updateOn: 'blur',
      }),
      url: new FormControl(null, {
        validators: NgxCustomValidators.urlValidator({url: true}),
        updateOn: 'blur'
      }),
      image: new FormControl(null, NgxCustomValidators.fileExtensionValidator({image: true}, ['png', 'jpg', 'jpeg', 'png'])),
      pdf: new FormControl(null, NgxCustomValidators.fileExtensionValidator({pdf: true}, ['pdf'])),
      pattern: new FormControl(null, NgxCustomValidators.patternValidator({pattern: true}, /[A-Z]/)),
    });
  }
}
