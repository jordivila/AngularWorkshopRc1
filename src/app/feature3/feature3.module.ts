import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature3RoutingModule } from './feature3-routing.module';
import { Feature3Component } from './feature3.component';
import { Child1Component } from './child1/child1.component';
import { Child11Component } from './child1/child1-1/child1-1.component';
import { Child12Component } from './child1/child1-2/child1-2.component';

@NgModule({
  imports: [
    CommonModule,
    Feature3RoutingModule
  ],
  declarations: [Feature3Component, Child1Component, Child11Component, Child12Component]
})
export class Feature3Module { }
