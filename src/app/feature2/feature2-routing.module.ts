import { Feature2Component } from './feature2/feature2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'feature2',
  component: Feature2Component,
  data: {
    icon: 'info-circle',
    title: 'Feature 2',
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Feature2RoutingModule { }
