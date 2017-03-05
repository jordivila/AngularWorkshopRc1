import { HttpInterceptorFakeService } from './http-interceptor-fake.service';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { ReflectiveInjector } from '@angular/core';
import { HttpInterceptorService } from './http-interceptor.service';

describe('HttpInterceptorFakeService', () => {

  let httpInterceptorFake: HttpInterceptorService;

  beforeEach(() => {

    const injector = ReflectiveInjector.resolveAndCreate([
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function (backendParam: MockBackend, defaultOptions: BaseRequestOptions) {
          return new HttpInterceptorFakeService(backendParam, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
    ]);

    httpInterceptorFake = injector.get(Http);

  });

  it('HttpInterceptorFakeService instance is injected', () => {
    expect(httpInterceptorFake).toEqual(jasmine.any(HttpInterceptorFakeService));
  });

});
