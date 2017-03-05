import { Serie } from './../../models/serie';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SeriesService {

  constructor(private _http: Http) { }

  get(): Observable<Serie[]> {
    return this.
      _http
      .get(`http://tokiotabookstoreweb.azurewebsites.net/api/series`)
      .map((res: Response) => res.json())
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }
}
