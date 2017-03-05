import { LoadingHelperService } from './../../core/components/loading/loading-helper.service';
import { UsersService } from './../../core/services/users/users.service';
import { IUserCreateForm } from './../../core/models/user';
import { CustomValidatorsService } from './../../core/services/validations/custom-validators.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.css']
})
export class Feature2Component implements OnInit {

  public userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private loadingService: LoadingHelperService) { }

  ngOnInit() {
    this.userForm = this.initFormGroup();
  }

  initFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: ['this is a predefined value', [
        CustomValidatorsService.requiredWithTrim,
        Validators.minLength(2),
        Validators.maxLength(50)]
      ],
      email: ['', [
        CustomValidatorsService.requiredWithTrim,
        CustomValidatorsService.emailValidator,
        Validators.minLength(2),
        Validators.maxLength(50)]
      ],
    });
  }

  saveForm() {
    if (this.userForm.dirty && this.userForm.valid) {
      this.loadingService.show('Saving user data');
      console.group('Save Form');
      console.log('Show waiting.....Saving user data');
      const user = <IUserCreateForm>this.userForm.value;
      this.usersService
        .post(user)
        .do((id: string) => {
          console.log('User account created');
          this.userForm.reset(user);
        }, (error: any) => {
          console.log(`Oops... there was an error->${error}`);
        })
        .finally(() => {
          console.log('Hide ewaiting');
          this.loadingService.hide();
        })
        .subscribe();
    }
  }

}
