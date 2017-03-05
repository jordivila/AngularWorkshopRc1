import { FormValidationsModule } from './../core/components/form-validations/form-validations.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Feature2Component } from './feature2/feature2.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Feature2RoutingModule,
    ReactiveFormsModule,
    FormValidationsModule
  ],
  declarations: [Feature2Component]
})
export class Feature2Module { }
