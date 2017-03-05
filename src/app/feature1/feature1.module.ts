import { AppStoreService } from './../app-store.service';
import { Feature1ReducersService } from './feature1-reducers.service';
import { Feature1Actions } from './feature1-actions';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1Component } from './feature1/feature1.component';

@NgModule({
  imports: [
    CommonModule,
    Feature1RoutingModule
  ],
  declarations: [Feature1Component],
  providers: [Feature1Actions, Feature1ReducersService]
})
export class Feature1Module {
  constructor(
    appStore: AppStoreService,
    todoReducerService: Feature1ReducersService) {

    appStore.addReducers({ Feature1Store: Feature1ReducersService.Reducers });
  }
}
