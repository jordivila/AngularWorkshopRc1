import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Http, Response, RequestOptionsArgs, ConnectionBackend, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

export interface IHttpInterceptor extends Http {
  lastRequest: Observable<Date>;
}

@Injectable()
export class HttpInterceptorService extends Http implements IHttpInterceptor {

  private lastRequestSubject: ReplaySubject<Date> = new ReplaySubject<Date>();
  public lastRequest: Observable<Date>;

  constructor(private backend: ConnectionBackend, private defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
    this.lastRequest = this.lastRequestSubject.asObservable();
  }

  options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.overrideResponse(super.options(url, options));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.overrideResponse(super.get(url, options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.overrideResponse(super.post(url, body, options));
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.overrideResponse(super.put(url, body, options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.overrideResponse(super.delete(url, options));
  }

  private isError(status: number): boolean {
    return (status !== 200);
  }

  checkError(status: number): void {
    if (this.isError(status)) {
      this.onError(status);
    }
  }

  onError(status: number): void {
    console.log(`Error thrown => ${status}`);
  }

  private overrideResponse(response: Observable<Response>): Observable<Response> {
    return response
      .do((x: Response) => {
        this.checkError(x.status);
      }, (error: any) => {
        this.checkError(error.status);
      })
      .finally(() => {
        this.lastRequestSubject.next(new Date());
      });
  }

}

