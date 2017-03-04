import { Feature1Component } from './feature1/feature1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'feature1',
  component: Feature1Component,
  data: {
    icon: 'info-circle',
    title: 'Feature 1',
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Feature1RoutingModule { }
