import { ILoadingAction, LOADING_HIDE, LOADING_SHOW } from './loading-actions';
import { Injectable } from '@angular/core';
import { ILoadingStore } from './loading-store';

@Injectable()
export class LoadingReducerService {

  public static Reducers(state: ILoadingStore = {
    loadingIsOpen: false,
    loadingText: ''
  }, action: any): ILoadingStore {

    const show = (actionParam: ILoadingAction) => {
      return {
        loadingIsOpen: true,
        loadingText: actionParam.text
      };
    };

    const hide = (actionParam: ILoadingAction) => {
      return {
        loadingIsOpen: false,
        loadingText: actionParam.text
      };
    };

    switch (action.type) {
      case LOADING_SHOW:
        return show(action);
      case LOADING_HIDE:
        return hide(action);
      default:
        return state;
    }
  }

};
