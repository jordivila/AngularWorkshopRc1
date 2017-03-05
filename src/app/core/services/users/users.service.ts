import { IUserCreateForm } from './../../models/user';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  constructor(private _http: Http) { }

  post(userCreateModel: IUserCreateForm): Observable<any> {
    return this.
      _http
      .post(`http://tokiotabookstoreweb.azurewebsites.net/api/series/`, userCreateModel)
      .map((res: Response) => res.json())
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

}
