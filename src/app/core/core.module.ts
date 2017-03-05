import { UsersService } from './services/users/users.service';
import { HttpInterceptorModule } from './services/http-interceptor/http-interceptor.module';
import { ConfigService } from './services/config/config.service';
import { SeriesService } from './services/series/series.service';
import { LayoutModule } from './components/layout/layout.module';
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import './operators/rxjs-operators';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    HttpInterceptorModule.forRoot()
  ],
  declarations: [],
  exports: [
    LayoutModule,
    HttpInterceptorModule
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        SeriesService,
        ConfigService,
        UsersService
      ]
    };
  }

  // Prevent reimport of the CoreModule
  // Only the root AppModule should import the CoreModule.
  // Bad things happen if a lazy loaded module imports it
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
