import { NgxCustomValidators } from './../../projects/ngx-custom-validators/src/lib/ngx-custom-validators.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
        validators: Validators.compose([
          NgxCustomValidators.emailValidator({email: true}),
          Validators.required,
        ]),
        updateOn: 'blur',
      }),
      url: new FormControl(null, {
        validators: Validators.compose([
          NgxCustomValidators.urlValidator({url: true})
        ]),
        updateOn: 'blur'
      }),
    });
  }
}
