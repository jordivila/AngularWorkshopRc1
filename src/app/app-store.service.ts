import { IFeature1Store } from './feature1/feature1-store';
import { Injectable } from '@angular/core';
import { LoadingReducerService } from './core/components/loading/loading-reducer.service';
import { ILoadingStore } from './core/components/loading/loading-store';
import { createStore, Store, combineReducers, Reducer, applyMiddleware } from 'redux';
import { logger, crashReporter } from './app-store-middlewares';
import thunk from 'redux-thunk';

export interface IAppState {
  LoadingStore: ILoadingStore;
  Feature1Store: IFeature1Store;
}

@Injectable()
export class AppStoreService implements Store<IAppState> {

  private _store: Store<IAppState>;
  private _reducers: any = {};

  constructor() {

    const loadingReducer: Reducer<ILoadingStore> = LoadingReducerService.Reducers;

    this._reducers = {
      LoadingStore: loadingReducer,
    };

    this._store = createStore<IAppState>(combineReducers<IAppState>(this._reducers), applyMiddleware(thunk, logger, crashReporter));

  }

  dispatch = (action: any) => this._store.dispatch(action);
  getState = () => this._store.getState();
  subscribe = (listener: () => void) => this._store.subscribe(listener);
  replaceReducer = (nextReducer: Reducer<IAppState>) => this._store.replaceReducer(nextReducer);
  addReducers(reducers: any) {
    const reducerKeys = Object.keys(reducers);

    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      this._reducers[key] = reducers[key];
    }

    this._store.replaceReducer(combineReducers<any>(this._reducers));
  }
}
