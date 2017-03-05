import { Injectable, state } from '@angular/core';
import { IFeature1Store } from './feature1-store';
import { IFeature1Action, CANACTIVATE_ERROR, CANACTIVATE_SET } from './feature1-actions';

@Injectable()
export class Feature1ReducersService {

  public static Reducers(state: IFeature1Store = {
    isInitialized: false,
    canActivate: false,
    canActivateError: null
  }, action: any): IFeature1Store {

    const setCanActivate = (actionParam: IFeature1Action) => {
      return {
        isInitialized: true,
        canActivate: actionParam.canActivate,
      };
    };

    const setError = (actionParam: IFeature1Action) => {
      return {
        isInitialized: true,
        canActivate: false,
        canActivateError: actionParam.error
      };
    };

    switch (action.type) {
      case CANACTIVATE_SET:
        return setCanActivate(action);
      case CANACTIVATE_ERROR:
        return setError(action);
      default:
        return state;
    }
  }

};
