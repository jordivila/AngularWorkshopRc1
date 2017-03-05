
import { HttpInterceptorFakeService } from './http-interceptor-fake.service';
import { Http } from '@angular/http';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockBackend } from '@angular/http/testing';
import { ConfigService } from './../config/config.service';
import { XHRBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import { HttpInterceptorService } from './http-interceptor.service';

export function HttpInterceptorFactory(
  backend: XHRBackend,
  mockBackend: MockBackend,
  defaultOptions: RequestOptions,
  configService: ConfigService) {

  if (configService.production) {
    return new HttpInterceptorService(backend, defaultOptions);
  } else {
    return new HttpInterceptorFakeService(mockBackend, defaultOptions);
  }
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class HttpInterceptorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpInterceptorModule,
      providers: [
        {
          provide: Http,
          useFactory: HttpInterceptorFactory,
          deps: [XHRBackend, MockBackend, BaseRequestOptions, ConfigService]
        },
        MockBackend,
        BaseRequestOptions
      ]
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: HttpInterceptorModule) {
    if (parentModule) {
      throw new Error(
        'HttpInterceptorModule is already loaded. Import it in the AppModule only');
    }
  }
}

