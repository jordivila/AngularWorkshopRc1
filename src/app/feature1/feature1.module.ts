import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1Component } from './feature1/feature1.component';

@NgModule({
  imports: [
    CommonModule,
    Feature1RoutingModule
  ],
  declarations: [Feature1Component]
})
export class Feature1Module { }
