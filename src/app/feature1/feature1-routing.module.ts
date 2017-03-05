import { Feature1Guard } from './feature1-guard';
import { Feature1Component } from './feature1/feature1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: Feature1Component,
  canActivate: [Feature1Guard],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [Feature1Guard]
})
export class Feature1RoutingModule { }
