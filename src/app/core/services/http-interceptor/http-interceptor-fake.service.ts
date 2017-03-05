import { Serie } from './../../models/serie';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  Http, BaseRequestOptions, Response, ResponseOptions,
  RequestMethod, Request, ResponseType, XHRBackend, RequestOptionsArgs
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpInterceptorService } from './http-interceptor.service';
import { ConfigService } from './../config/config.service';

@Injectable()
export class HttpInterceptorFakeService extends HttpInterceptorService {

  constructor(
    mockBackend: MockBackend,
    options: BaseRequestOptions) {

    super(mockBackend, options);

    mockBackend.connections.subscribe((connection: MockConnection) => {
      this.mockResults(connection);
    });
  }

  private mockResults(connection: MockConnection) {
    // wrap in timeout to simulate server api call 
    setTimeout(() => {

      let data: any;

      if (connection.request.url.includes('http://tokiotabookstoreweb.azurewebsites.net/api/series')) {
        if (connection.request.method === RequestMethod.Get) {
          data = <Serie[]>[
            <Serie>{
              name: 'Lo Carrilet de la Cava',
              authorId: 'Quico el Célio, el Noi i el Mut de Ferreries',
              id: 'this-is-an-amazing-guid'
            }
          ];
        }
      }

      if (data) {

        connection.mockRespond(new Response(new ResponseOptions({
          status: 200,
          body: data,
          type: ResponseType.Basic
        })));

      } else {
        connection.mockError(new Error('Method not allowed'));
      }

    }, 3000);
  }
}

