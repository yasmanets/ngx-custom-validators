# Angular-Custom-Validators
angular-custom-validators is a set of custom validators to validate all your forms in an angular project.
If you miss any validator, you can request its implementation or even implement it yourself and create a pull request with your code.
#### So angular-custom-validator is a simple library to validate all your forms :)
---
[![Build Status](https://travis-ci.com/yasmanets/ngx-custom-validators.svg?branch=master)](https://travis-ci.com/yasmanets/ngx-custom-validators)

## Available validators
---
- email validator
- url validator
- generic file extension validator
- pattern validator
- minimum length
- maximum length
- DNI validator
- CIF validator
- IBAN validator

## Installation
---
```bash
npm i angular-custom-validators
```

## Usage
---
Import `ReactiveFormsModule` in your `app.module.ts` or `custom-module.module.ts`.
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## License
---
[MIT](https://choosealicense.com/licenses/mit/)


### On build...
