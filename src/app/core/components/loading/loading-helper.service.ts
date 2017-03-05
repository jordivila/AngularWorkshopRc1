import { LoadingComponentActions } from './loading-actions';
import { AppStoreService } from './../../../app-store.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingHelperService {

  constructor(
    private _appStore: AppStoreService,
    private _loadingActions: LoadingComponentActions) {

  }

  show(text: string) {
    this._appStore.dispatch(this._loadingActions.show(text));
  }

  hide() {
    this._appStore.dispatch(this._loadingActions.hide());
  }

}
