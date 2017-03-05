import { NgModule } from '@angular/core';
import { PreloadAllModules, NoPreloading, Routes, RouterModule, provideRoutes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'feature1' },
  {
    path: 'feature1',
    loadChildren: 'app/feature1/feature1.module#Feature1Module',
    data: {
      icon: 'info-circle',
      title: 'Feature 1',
    }
  },
  {
    path: 'feature2',
    loadChildren: 'app/feature2/feature2.module#Feature2Module',
    data: {
      icon: 'info-circle',
      title: 'Feature 2',
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true, preloadingStrategy: NoPreloading, enableTracing: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
