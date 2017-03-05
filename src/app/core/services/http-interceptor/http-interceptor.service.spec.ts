
import { SeriesService } from './../series/series.service';
import { ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config/config.service';
import { HttpInterceptorService } from './http-interceptor.service';

describe('Http Interceptor', () => {

  let serieService: SeriesService;
  let backend: MockBackend;
  let initialResponse: any;
  let httpInterceptor: HttpInterceptorService;

  beforeEach(() => {

    const configService: ConfigService = {
      production: false,
    };

    const injector = ReflectiveInjector.resolveAndCreate([
      SeriesService,
      BaseRequestOptions,
      MockBackend,
      { provide: ConfigService, useValue: configService },
      {
        provide: Http,
        useFactory: function (backendParam: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new HttpInterceptorService(backendParam, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
    ]);

    httpInterceptor = injector.get(Http);
    serieService = injector.get(SeriesService);
    backend = injector.get(MockBackend);

  });

  it('httpInterceptor instance is injected', () => {
    expect(httpInterceptor).toEqual(jasmine.any(HttpInterceptorService));
  });

  it('we can test results given for a specific data service', () => {
    let connection: any;
    backend.connections.subscribe((c: any) => connection = c);
    initialResponse = serieService.get();
    connection.mockRespond(new Response(new ResponseOptions({ body: '["Dijkstra", "Hopper"]' })));

    let names: any;
    initialResponse.subscribe((data: any) => {
      names = data;
      expect(names).toEqual(['Dijkstra', 'Hopper']);
    });
  });

  it('should return an Observable when get called', () => {
    let connection: any;
    backend.connections.subscribe((c: any) => connection = c);
    initialResponse = serieService.get();
    expect(initialResponse).toEqual(jasmine.any(Observable));
  });

  it('should call onError method when response status code is not 200', () => {

    spyOn(httpInterceptor, 'onError').and.returnValue(() => { return; });

    let connection: any;
    backend.connections.subscribe((c: any) => connection = c);
    initialResponse = serieService.get();
    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));

    let names: any;
    initialResponse.subscribe((data: any) => {
      names = data;
      expect(httpInterceptor.onError).toHaveBeenCalled();
    });

  });

  it('should NOT call onError method when response status code is  200', () => {

    spyOn(httpInterceptor, 'onError').and.returnValue(() => { return; });

    let connection: any;
    backend.connections.subscribe((c: any) => connection = c);
    initialResponse = serieService.get();
    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));

    let names: any;
    initialResponse.subscribe((data: any) => {
      names = data;
      expect(httpInterceptor.onError).toHaveBeenCalledTimes(0);
    });

  });

  it('should call checkError just once. Prevents duplicate event manager on http Interceptor', () => {

    spyOn(httpInterceptor, 'checkError');

    let connection: any;
    backend.connections.subscribe((c: any) => connection = c);
    initialResponse = serieService.get();
    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));

    let names: any;
    initialResponse.subscribe((data: any) => {
      names = data;
      expect(httpInterceptor.checkError).toHaveBeenCalledTimes(1);
    });

  });

  it('HttpInterceptor Subject stream new value when an Http Request is thrown', (done) => {

    const now = new Date();

    httpInterceptor.lastRequest.subscribe((value: Date) => {
      expect(value.getTime()).toBeGreaterThan(now.getTime());
      done();
    });

    let connection: any;
    backend.connections.subscribe((c: any) => connection = c);
    initialResponse = serieService.get();
    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));

    setTimeout(() => {
      initialResponse.subscribe((data: any) => { });
    }, 100);

  });

});

