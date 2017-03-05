
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class CustomValidatorsService {

  constructor() { }

  static emailValidator(control: AbstractControl) {
    // tslint:disable-next-line 
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(control.value);
    if (result) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  static requiredWithTrim(control: AbstractControl) {
    if ((control.value ? false : true) || (<string>control.value).trim() === '') {
      return { 'required': true };
    } else {
      return null;
    }
  }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any): any {
    const config: any = {
      'required': `Required`,
      'invalidEmailAddress': `Invalid email address`,
      'minlength': `minimum length is ${validatorValue.requiredLength}`,
      'maxlength': `maximum length is ${validatorValue.requiredLength}`,
    };

    return config[validatorName];
  }

}
