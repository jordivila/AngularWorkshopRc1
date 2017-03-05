import { Injectable } from '@angular/core';
import { Action, ActionCreator } from 'redux';


export const LOADING_SHOW = 'LOADING_SHOW';
export const LOADING_HIDE = 'LOADING_HIDE';

export interface ILoadingAction extends Action {
    isOpen: boolean;
    text?: string;
};

@Injectable()
export class LoadingComponentActions {

    show: ActionCreator<ILoadingAction> =
    (text: string) => ({
        type: LOADING_SHOW,
        isOpen: true,
        text: text
    })

    hide: ActionCreator<ILoadingAction> =
    () => ({
        type: LOADING_HIDE,
        isOpen: false,
    })

}
