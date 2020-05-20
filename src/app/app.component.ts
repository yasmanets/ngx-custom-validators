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
    this.title = 'ngx-custom-validators';
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
    });
  }
}
